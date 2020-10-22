export class InputBase<T> {
  key: string;
  label: string;
  tooltip: string;
  value: T;
  defaultValue: T;
  min: number;
  max: number;
  required: boolean;
  type: string;
  controlType: string;
  options: {
    key: string | number,
    value: string
  }[];


  constructor(options: {
    key?: string;
    label?: string;
    tooltip?: string;
    value?: T;
    defaultValue?: T;
    required?: boolean;
    type?: string;
    controlType?: string;
    min?: number;
    max?: number;
    options?: {key: string | number, value: string}[];
  } = {}) {
    this.key = options.key || '';
    this.label = options.label || '';
    this.tooltip = options.tooltip || '';
    this.value = options.value;
    this.defaultValue = options.defaultValue;
    this.required = !!options.required;
    this.type = options.type || '';
    this.controlType = options.controlType || '';
    this.options = options.options || [];
    this.min = options.min || -Infinity;
    this.max = options.max || Infinity;
  }
}
