import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// material
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
import { MortgageSummaryComponent } from './mortgage-calculator/mortgage-summary/mortgage-summary.component';
import { CalculationSummaryComponent } from './mortgage-calculator/calculation-summary/calculation-summary.component';
import { PaymentDiagramComponent } from './mortgage-calculator/payment-diagram/payment-diagram.component';
import { PaymentPlanFormComponent } from './mortgage-calculator/payment-plan-form/payment-plan-form.component';
import { PrepaymentPlanFormComponent } from './mortgage-calculator/prepayment-plan-form/prepayment-plan-form.component';
import { PaymentScheduleComponent } from './mortgage-calculator/payment-schedule/payment-schedule.component';
import { LabelInfoComponent } from './mortgage-calculator/label-info/label-info.component';
import { MoneyPipe } from './mortgage-calculator/money.pipe';
import { InputItemComponent } from './mortgage-calculator/input-item/input-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MortgageCalculatorComponent,
    MortgageSummaryComponent,
    CalculationSummaryComponent,
    PaymentDiagramComponent,
    PaymentPlanFormComponent,
    PrepaymentPlanFormComponent,
    PaymentScheduleComponent,
    LabelInfoComponent,
    MoneyPipe,
    InputItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
