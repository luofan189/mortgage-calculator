import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MortgagePayment } from 'src/models/mortgage-payment';
import { MortgageScheduleItem } from 'src/models/mortgage-schedule-item';
import { PrepaymentFrequency } from 'src/models/prepayment-frequency.enum';
import { MoneyPipe } from '../money.pipe';

import { CalculationSummaryComponent } from './calculation-summary.component';

describe('CalculationSummaryComponent', () => {
  let component: CalculationSummaryComponent;
  let fixture: ComponentFixture<CalculationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationSummaryComponent, MoneyPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationSummaryComponent);
    component = fixture.componentInstance;
    component.summary = {
      termPayments: new MortgagePayment({}),
      amortizationPayments: new MortgagePayment({}),
      amortization: 5,
      term: 5,
      principle: 100000,
      prepayment: 0,
      prepaymentFrequency: PrepaymentFrequency.OneTime,
      startWithPayment: 1
    };
    component.schedules = [
      new MortgageScheduleItem({
        paidInterestAmount: 100,
        paidPrincipleAmount: 100,
        period: 0,
        principle: 300
      }),
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
