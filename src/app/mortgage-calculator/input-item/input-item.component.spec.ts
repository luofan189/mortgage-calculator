import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { InputItemComponent } from './input-item.component';

describe('InputItemComponent', () => {
  let component: InputItemComponent;
  let fixture: ComponentFixture<InputItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatIconModule, ReactiveFormsModule ],
      declarations: [ InputItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputItemComponent);
    component = fixture.componentInstance;
    component.input = {
      key: 'key',
      label: 'label',
      tooltip: 'tooltip',
      value: '1',
      defaultValue: '1',
      min: 0,
      max: 10,
      step: 1,
      required: true,
      type: 'type',
      controlType: 'text',
      options: null
    };
    const group: any = {};
    group[component.input.key] = new FormControl(component.input.defaultValue, []);
    component.form = new FormGroup(group);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
