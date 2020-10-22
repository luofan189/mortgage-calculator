import { TestBed } from '@angular/core/testing';
import { MortgageResult } from 'src/models/mortgage-result';
import { PaymentFrequency } from 'src/models/payment-frequency.enum';
import { PrepaymentFrequency } from 'src/models/prepayment-frequency.enum';
import { MoneyPipe } from './money.pipe';

import { MortgageCalculateService } from './mortgage-calculate.service';

describe('MortgageCalculateService', () => {
  let service: MortgageCalculateService;
  let mortgageResult: MortgageResult;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MortgageCalculateService]
    });
    service = TestBed.inject(MortgageCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('[W/O prepayment] Assume mortgage $100K at 5% interest rate for 25 years, monthly repay with 5 year term, payment should be $581.60 floored', () => {
    mortgageResult = service.getMonthlyMortgageResult({
      loanAmount: 100000,
      interestRate: 0.05,
      term: 5,
      amortization: 25,
      paymentFrequency: PaymentFrequency.Monthly,
      prepayment: 0,
      prepaymentFrequency: PrepaymentFrequency.OneTime,
      startWithPayment: 1
    });

    const pipe = new MoneyPipe();
    expect(pipe.transform(mortgageResult.mortgageCalculationSummary.termPayments.payment, 'symbol', '1.2-2')).toBe('$581.60');
  });

  it('[with prepayment] Assume mortgage $100K at 5% interest rate for 25 years, monthly repay with 5 year term, total payment# should be 248', () => {
    mortgageResult = service.getMonthlyMortgageResult({
      loanAmount: 100000,
      interestRate: 0.05,
      term: 5,
      amortization: 25,
      paymentFrequency: PaymentFrequency.Monthly,
      prepayment: 10000,
      prepaymentFrequency: PrepaymentFrequency.OneTime,
      startWithPayment: 1
    });

    const pipe = new MoneyPipe();
    expect(mortgageResult.mortgageSchedules.schedules.length).toBe(248);
  });

  it('[with prepayment] Assume mortgage $100K at 5% interest rate for 25 years, monthly repay with 5 year term, prepayment $10K and prepayment frequency is each year, total payment# should be 81', () => {
    mortgageResult = service.getMonthlyMortgageResult({
      loanAmount: 100000,
      interestRate: 0.05,
      term: 5,
      amortization: 25,
      paymentFrequency: PaymentFrequency.Monthly,
      prepayment: 10000,
      prepaymentFrequency: PrepaymentFrequency.EachYear,
      startWithPayment: 1
    });

    const pipe = new MoneyPipe();
    expect(mortgageResult.mortgageSchedules.schedules.length).toBe(81);
  });

  it('[with prepayment] Assume mortgage $100K at 5% interest rate for 25 years, monthly repay with 5 year term, prepayment $10K and prepayment frequency is same as regular, total payment# should be 10', () => {
    mortgageResult = service.getMonthlyMortgageResult({
      loanAmount: 100000,
      interestRate: 0.05,
      term: 5,
      amortization: 25,
      paymentFrequency: PaymentFrequency.Monthly,
      prepayment: 10000,
      prepaymentFrequency: PrepaymentFrequency.SameAsRegularPayment,
      startWithPayment: 1
    });

    const pipe = new MoneyPipe();
    expect(mortgageResult.mortgageSchedules.schedules.length).toBe(10);
  });
});
