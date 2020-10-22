
export class MortgageScheduleItem {

  principle: number;
  period: number;
  paidPrincipleAmount: number;
  paidInterestAmount: number;


  constructor(result: {
    principle?: number,
    period?: number,
    paidPrincipleAmount?: number,
    paidInterestAmount?: number
  } = {}) {
    this.principle = result.principle || 0;
    this.period = result.period || 0;
    this.paidPrincipleAmount = result.paidPrincipleAmount || 0;
    this.paidInterestAmount = result.paidInterestAmount || 0;
  }

  get totalPayment(): number {
    return this.paidPrincipleAmount + this.paidInterestAmount;
  }

  get balance(): number {
    return this.principle - this.paidPrincipleAmount > 0 ? this.principle - this.paidPrincipleAmount : 0;
  }
}
