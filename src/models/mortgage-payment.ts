
export class MortgagePayment {


  numOfPayments: number;
  payment: number;
  prepayment: number;
  principlePayments: number;
  interestPayments: number;

  constructor(result: {
    numOfPayments?: number,
    payment?: number,
    prepayment?: number,
    principlePayments?: number,
    interestPayments?: number
  } = {}) {

    this.numOfPayments = result.numOfPayments || 0;
    this.payment = result.payment || 0;
    this.prepayment = result.prepayment || 0;
    this.principlePayments = result.principlePayments || 0;
    this.interestPayments = result.interestPayments || 0;
  }

  get totalCosts(): number {
    return this.principlePayments + this.interestPayments;
  }
}
