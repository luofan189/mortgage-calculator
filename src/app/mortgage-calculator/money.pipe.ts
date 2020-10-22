import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const currencyPipe = new CurrencyPipe('en-CA');
    return currencyPipe.transform(value, 'USD', 'symbol', '1.2-2');
  }

}
