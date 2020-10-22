import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MortgageCalculationSummary } from 'src/models/mortgage-calculation-summary';
import { MortgagePayment } from 'src/models/mortgage-payment';
import { MortgageScheduleItem } from 'src/models/mortgage-schedule-item';
import { PrepaymentFrequency } from 'src/models/prepayment-frequency.enum';
import { MoneyPipe } from '../money.pipe';

import { MortgageSummaryComponent } from './mortgage-summary.component';

describe('MortgageSummaryComponent', () => {
  let component: MortgageSummaryComponent;
  let fixture: ComponentFixture<MortgageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageSummaryComponent, MoneyPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageSummaryComponent);
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

  it('should total payment 200 and balance is 200', () => {
    expect(component.schedules[0].totalPayment).toBe(200);
    expect(component.schedules[0].balance).toBe(200);
  });

  it('should total payment 200 and balance is 0 when it\'s last payment', () => {
    component.schedules = [
      new MortgageScheduleItem({
        paidInterestAmount: 100,
        paidPrincipleAmount: 100,
        period: 0,
        principle: 50
      }),
    ];

    expect(component.schedules[0].totalPayment).toBe(200);
    expect(component.schedules[0].balance).toBe(0);

  });
});
