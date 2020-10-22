import { MortgageCalculationSummary } from './mortgage-calculation-summary';
import { MortgageSchedule } from './mortgage-schedule';

export class MortgageResult {

  mortgageCalculationSummary: MortgageCalculationSummary;
  mortgageSchedules: MortgageSchedule;

  constructor(result: {
    mortgageCalculationSummary?: MortgageCalculationSummary,
    mortgageSchedules?: MortgageSchedule
  } = {}) {
    this.mortgageCalculationSummary = result.mortgageCalculationSummary || new MortgageCalculationSummary({});
    this.mortgageSchedules = result.mortgageSchedules || new MortgageSchedule({});
  }

  get balanceAfterTerm(): number {
    return 0;
  }

}
