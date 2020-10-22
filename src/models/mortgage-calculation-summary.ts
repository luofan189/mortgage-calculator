import { MortgagePayment } from './mortgage-payment';
import { PrepaymentFrequency } from './prepayment-frequency.enum';

export class MortgageCalculationSummary {

  termPayments: MortgagePayment;
  amortizationPayments: MortgagePayment;
  amortization: number;
  term: number;
  principle: number;
  prepayment: number;
  prepaymentFrequency: PrepaymentFrequency;
  startWithPayment: number;

  constructor(result: {
    termPayments?: MortgagePayment,
    amortizationPayments?: MortgagePayment,
    amortization?: number,
    term?: number,
    principle?: number,
    prepayment?: number,
    prepaymentFrequency?: PrepaymentFrequency,
    startWithPayment?: number;
  } = {}) {
    this.termPayments = result.termPayments || new MortgagePayment({});
    this.amortizationPayments = result.amortizationPayments || new MortgagePayment({});
    this.amortization = result.amortization || 0;
    this.term = result.term || 0;
    this.principle = result.principle || 0;
    this.prepayment = result.prepayment || 0;
    this.prepaymentFrequency = result.prepaymentFrequency || PrepaymentFrequency.OneTime;
    this.startWithPayment = result.startWithPayment || 1;
  }
}
