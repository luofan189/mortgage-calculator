import { Component, Input, OnInit } from '@angular/core';
import { MortgageScheduleItem } from 'src/models/mortgage-schedule-item';

@Component({
  selector: 'app-payment-schedule',
  templateUrl: './payment-schedule.component.html',
  styleUrls: ['./payment-schedule.component.scss']
})
export class PaymentScheduleComponent implements OnInit {

  @Input()
  title = 'Payment Schedule';

  @Input()
  schedules: MortgageScheduleItem[];

  constructor() { }

  ngOnInit(): void {
  }

  getIndex(item: MortgageScheduleItem, index: number): string {
    return `${item.period} + ${index}`;
  }
}
