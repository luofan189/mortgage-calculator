import { PaymentFrequency } from './payment-frequency.enum';
import { PrepaymentFrequency } from './prepayment-frequency.enum';

export class MortgageInput {

  loanAmount: number;
  interestRate: number;
  term: number;
  amortization: number;
  paymentFrequency: PaymentFrequency;

  prepayment: number;
  prepaymentFrequency: PrepaymentFrequency;
  startWithPayment: number;

  constructor(result: {
    loanAmount?: number,
    interestRate?: number,
    term?: number,
    amortization?: number,
    paymentFrequency?: PaymentFrequency,
    prepayment?: number,
    prepaymentFrequency?: PrepaymentFrequency,
    startWithPayment?: number
  } = {}) {
    this.loanAmount = result.loanAmount || 0;
    this.interestRate = result.interestRate || 0;
    this.term = result.term || 25;
    this.paymentFrequency = result.paymentFrequency || PaymentFrequency.Monthly;
    this.prepayment = result.prepayment || 0;
    this.prepaymentFrequency = result.prepaymentFrequency || PrepaymentFrequency.OneTime;
    this.startWithPayment = result.startWithPayment || 1;
  }
}
