import { MortgageScheduleItem } from './mortgage-schedule-item';

export class MortgageSchedule {

  schedules: MortgageScheduleItem[];

  constructor(result: {
    schedules?: MortgageScheduleItem[]
  } = {}) {
    this.schedules = result.schedules || [];
  }
}
