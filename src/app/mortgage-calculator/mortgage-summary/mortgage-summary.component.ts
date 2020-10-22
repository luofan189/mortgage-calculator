import { Component, Input, OnInit } from '@angular/core';
import { MortgageCalculationSummary } from 'src/models/mortgage-calculation-summary';
import { MortgageScheduleItem } from 'src/models/mortgage-schedule-item';

@Component({
  selector: 'app-mortgage-summary',
  templateUrl: './mortgage-summary.component.html',
  styleUrls: ['./mortgage-summary.component.scss']
})
export class MortgageSummaryComponent implements OnInit {

  @Input()
  summary: MortgageCalculationSummary;

  @Input()
  schedules: MortgageScheduleItem[];

  constructor() { }

  ngOnInit(): void {
  }
}
