import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from 'src/models/input-base';
import { DropdownInput } from 'src/models/input-dropdown';
import { NumberInput } from 'src/models/input-number';
import { MortgageResult } from 'src/models/mortgage-result';
import { PaymentFrequency } from 'src/models/payment-frequency.enum';
import { InputControlService } from './input-control.service';
import { MortgageCalculateService } from './mortgage-calculate.service';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.scss'],
  providers: [InputControlService, MortgageCalculateService]
})
export class MortgageCalculatorComponent implements OnInit {

  paymentPlanInputs: InputBase<any>[] = [
    new NumberInput({
      key: 'mortgage-amount',
      label: 'Mortgage Amount:',
      defaultValue: 100000,
      required: true,
      min: 5000,
      max: 1000000000,
      tooltip: 'The total mortgage amount, between 5000 and 1000000000'
    }),
    new NumberInput({
      key: 'interest-rate',
      label: 'Interest Rate (annual):',
      defaultValue: 0.05,
      required: true,
      min: 0,
      max: 0.99,
      tooltip: 'The annual interest rate, must be less than 1'
    }),
    new DropdownInput({
      key: 'amortization-period',
      label: 'Amortization Period:',
      defaultValue: '25',
      options: [
        {key: '10', value: '10 Years'},
        {key: '25', value: '25 Years'},
        {key: '30', value: '30 Years'},
      ],
      required: true,
      tooltip: 'The total amortization length'
    }),
    new DropdownInput({
      key: 'payment-frequency',
      label: 'Payment Frequency:',
      defaultValue: 'monthly',
      options: [
        {key: 'weekly', value: 'Weekly'},
        {key: 'biweekly', value: 'BiWeekly'},
        {key: 'semi-monthly', value: 'Semi-Monthly'},
        {key: 'monthly', value: 'Monthly'},
      ],
      required: true,
      tooltip: 'How often do you want to pay your mortgage'
    }),
    new DropdownInput({
      key: 'term',
      label: 'Term:',
      defaultValue: '5',
      options: [
        {key: '1', value: '1 Year'},
        {key: '2', value: '2 Years'},
        {key: '3', value: '3 Years'},
        {key: '4', value: '4 Years'},
        {key: '5', value: '5 Years'},
        {key: '6', value: '6 Years'},
        {key: '7', value: '7 Years'},
        {key: '8', value: '8 Years'},
        {key: '9', value: '9 Years'},
        {key: '10', value: '10 Years'},
      ],
      required: true,
      tooltip: 'The mortgage term'
    }),
  ];

  prepaymentPlanInputs: InputBase<any>[] = [
    new NumberInput({
      key: 'prepayment-amount',
      label: 'Prepayment Amount:',
      defaultValue: 10000,
      required: true,
      min: 0,
      max: 50000,
      tooltip: 'The prepayment amount, between 0 and 50000'
    }),
    new DropdownInput({
      key: 'prepayment-frequency',
      label: 'Prepayment Frequency:',
      defaultValue: '1',
      options: [
        {key: '1', value: 'One time'},
        {key: '2', value: 'Each year'},
        {key: '3', value: 'Same as regular payment'},
      ],
      required: true,
      tooltip: 'The frequency of the prepayment'
    }),
    new NumberInput({
      key: 'start-with-payment',
      label: 'Start With Payment:',
      defaultValue: 1,
      required: true,
      tooltip: 'When do you want to start the prepayment',
      min: 1,
    }),
  ];

  form: FormGroup;
  mortgageResult: MortgageResult;

  constructor(
    private inputControlService: InputControlService,
    private mortgageCalculateService: MortgageCalculateService) { }

  ngOnInit(): void {
    this.form = this.inputControlService.createFormGroup([].concat(this.paymentPlanInputs, this.prepaymentPlanInputs));
  }

  onCalculate(): void {

    if (this.form.value['payment-frequency'] === 'monthly') {
      this.mortgageResult = this.mortgageCalculateService.getMonthlyMortgageResult({
        loanAmount: this.form.value['mortgage-amount'],
        interestRate: this.form.value['interest-rate'],
        term: parseInt(this.form.value.term, 10),
        amortization: parseInt(this.form.value['amortization-period'], 10),
        paymentFrequency: PaymentFrequency.Monthly,
        prepayment: parseInt(this.form.value['prepayment-amount'], 10),
        prepaymentFrequency: parseInt(this.form.value['prepayment-frequency'], 10),
        startWithPayment: parseInt(this.form.value['start-with-payment'], 10)
      });
    } else if (this.form.value['payment-frequency'] === 'semi-monthly') {
      // TODO: need to implement semi-monthly payment frequency
      alert('TODO: need to implement semi-monthly payment frequency');
    } else if (this.form.value['payment-frequency'] === 'biweekly') {
      // TODO: need to implement biweekly payment frequency
      alert('TODO: need to implement biweekly payment frequency');
    } else if (this.form.value['payment-frequency'] === 'weekly') {
      // TODO: need to implement weekly payment frequency
      alert('TODO: need to implement weekly payment frequency');
    }

  }
}
