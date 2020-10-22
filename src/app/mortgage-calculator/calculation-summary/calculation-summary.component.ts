import { Component, Input, OnInit } from '@angular/core';
import { MortgageCalculationSummary } from 'src/models/mortgage-calculation-summary';
import { MortgageScheduleItem } from 'src/models/mortgage-schedule-item';

@Component({
  selector: 'app-calculation-summary',
  templateUrl: './calculation-summary.component.html',
  styleUrls: ['./calculation-summary.component.scss']
})
export class CalculationSummaryComponent implements OnInit {

  @Input()
  title = 'Calculation Summary';

  @Input()
  summary: MortgageCalculationSummary;
  @Input()
  schedules: MortgageScheduleItem[];

  constructor() { }

  ngOnInit(): void {
  }
}
