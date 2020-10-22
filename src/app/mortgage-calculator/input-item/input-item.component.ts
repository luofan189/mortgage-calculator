import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { InputBase } from '../../../models/input-base';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.scss']
})
export class InputItemComponent implements OnInit {

  @Input()
  input: InputBase<string>;
  @Input()
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


  get isValid(): boolean {
    return this.form.controls[this.input.key].valid;
  }
}
