import { MoneyPipe } from './money.pipe';

describe('MoneyPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MoneyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return $100.12 for 100.123456', () => {
    const pipe = new MoneyPipe();
    expect(pipe.transform(100.123456, 'symbol', '1.2-2')).toBe('$100.12');
  });
});
