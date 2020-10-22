import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from 'src/models/input-base';
import { InputControlService } from '../input-control.service';

@Component({
  selector: 'app-prepayment-plan-form',
  templateUrl: './prepayment-plan-form.component.html',
  styleUrls: ['./prepayment-plan-form.component.scss'],
  providers: [InputControlService]
})
export class PrepaymentPlanFormComponent implements OnInit {

  @Input()
  title = 'Prepayment Plan';

  @Input()
  inputs: InputBase<any>[];

  @Input()
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }
}
