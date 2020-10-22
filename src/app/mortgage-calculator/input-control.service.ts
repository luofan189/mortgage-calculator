import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputBase } from '../../models/input-base';

@Injectable()
export class InputControlService {
  constructor() { }

  createFormGroup(inputs: InputBase<string>[]): FormGroup {
    const group: any = {};

    inputs.forEach(input => {
      group[input.key] = input.required ?
        new FormControl(input.defaultValue || '', [
          Validators.required,
          Validators.min(input.min),
          Validators.max(input.max)
        ])
        : new FormControl(input.defaultValue || '', [
          Validators.min(input.min),
          Validators.max(input.max)
        ]);
    });

    return new FormGroup(group);
  }
}
