import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from 'src/models/input-base';
import { InputControlService } from '../input-control.service';

@Component({
  selector: 'app-payment-plan-form',
  templateUrl: './payment-plan-form.component.html',
  styleUrls: ['./payment-plan-form.component.scss'],
  providers: [InputControlService]
})
export class PaymentPlanFormComponent implements OnInit {

  @Input()
  title = 'Payment Plan';

  @Input()
  inputs: InputBase<any>[];

  @Input()
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
