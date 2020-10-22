import { Injectable } from '@angular/core';
import { MortgageCalculationSummary } from 'src/models/mortgage-calculation-summary';
import { MortgagePayment } from 'src/models/mortgage-payment';
import { MortgageResult } from 'src/models/mortgage-result';
import { MortgageSchedule } from 'src/models/mortgage-schedule';
import { MortgageScheduleItem } from 'src/models/mortgage-schedule-item';
import { PrepaymentFrequency } from 'src/models/prepayment-frequency.enum';
import { MortgageInput } from '../../models/mortgage-input';

@Injectable()
export class MortgageCalculateService {

  constructor() { }

  getMonthlyMortgageResult(input: MortgageInput): MortgageResult {
    // fixed rate payment with semi-compounding
    // P: principle, r: interest rate, n: 12 month, t: term
    // payment = (P X (r/n) X (1 + r/n)^n(t)) / ((1 + r/n)^n(t) - 1)

    // calculate effective monthly interest rate with semi-compounding
    const monthlyInterestRate = Math.pow(1 + input.interestRate / 2, 1.0 / 6) - 1;
    const numberOfMonthlyPayments = input.amortization * 12;
    const payment = (((monthlyInterestRate * input.loanAmount * (Math.pow((1 + monthlyInterestRate), numberOfMonthlyPayments)))) /
     ((Math.pow((1 + monthlyInterestRate), numberOfMonthlyPayments)) - 1));

    // get payment schedules
    const mortgageSchedule = this.calculateMortgageSchedule(input, payment);

    // get mortgage summary
    const calculateSummary = this.calculateMonthlyMortgagePayments(input, payment, mortgageSchedule);

    return new MortgageResult({
      mortgageCalculationSummary: calculateSummary,
      mortgageSchedules: mortgageSchedule
    });
  }

  private calculateMonthlyMortgagePayments(
    input: MortgageInput,
    payAmount: number, mortgageSchedule: MortgageSchedule): MortgageCalculationSummary {

    // for amortization related data
    let paidInterestsForAmortization = 0;
    for (const schedule of mortgageSchedule.schedules) {
      paidInterestsForAmortization += schedule.paidInterestAmount;
    }

    // for term related data
    let paidInterestsForTerm = 0;
    let paidPrincipleForTerm = 0;
    for (let i = 0; i < mortgageSchedule.schedules.length; i++) {
      if (i > input.term * 12 - 1) {
        break;
      }

      paidPrincipleForTerm += mortgageSchedule.schedules[i].paidPrincipleAmount;
      paidInterestsForTerm += mortgageSchedule.schedules[i].paidInterestAmount;
    }

    return new MortgageCalculationSummary({
      termPayments: new MortgagePayment({
        numOfPayments: input.term * 12,
        payment: payAmount,
        prepayment: input.prepayment,
        principlePayments: paidPrincipleForTerm,
        interestPayments: paidInterestsForTerm,
      }),
      amortizationPayments: new MortgagePayment({
        numOfPayments: input.amortization * 12,
        payment: payAmount,
        prepayment: input.prepayment,
        principlePayments: input.loanAmount,
        interestPayments: paidInterestsForAmortization
      }),
      amortization: input.amortization,
      term: input.term,
      principle: input.loanAmount,
      prepayment: input.prepayment,
      prepaymentFrequency: input.prepaymentFrequency,
      startWithPayment: input.startWithPayment
    });
  }

  private calculateMonthlyInterestPayment(monthlyInterestRate: number, remainingBalance: number): number {
    return monthlyInterestRate * remainingBalance;
  }

  private calculateMortgageSchedule(input: MortgageInput, payAmount: number): MortgageSchedule {
    const schedules: MortgageScheduleItem[] = [];

    // calculate effective monthly interest rate with semi-compounding
    const monthlyInterestRate = Math.pow(1 + input.interestRate / 2, 1.0 / 6) - 1;
    let remainingBalance: number = input.loanAmount;

    for (let i = 0; i < input.amortization * 12; i++) {
      let prepayment = 0;
      // handle prepayment in different frequencies
      if (input.prepayment > 0) {
        if (input.prepaymentFrequency === PrepaymentFrequency.SameAsRegularPayment) {
          prepayment = i >= input.startWithPayment - 1 ? input.prepayment : 0;
        } else if (input.prepaymentFrequency === PrepaymentFrequency.EachYear) {
          prepayment = i >= input.startWithPayment - 1 && (i + 1 - input.startWithPayment) % 12 === 0 ? input.prepayment : 0;
        } else if (input.prepaymentFrequency === PrepaymentFrequency.OneTime) {
          prepayment = i === input.startWithPayment - 1 ? input.prepayment : 0;
        }
      }

      const paidInterest = this.calculateMonthlyInterestPayment(monthlyInterestRate, remainingBalance);
      schedules.push(new MortgageScheduleItem({
        principle: remainingBalance <= 0 ? 0 : remainingBalance,
        period: i,
        paidInterestAmount: paidInterest,
        paidPrincipleAmount: prepayment + payAmount - paidInterest > remainingBalance ?
          remainingBalance : prepayment + payAmount - paidInterest
      }));

      remainingBalance = remainingBalance - (prepayment + payAmount - paidInterest);
      // if already paid off
      if (remainingBalance <= 0) {
        break;
      }
    }

    return new MortgageSchedule({
      schedules
    });
  }
}
