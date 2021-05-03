import { TemperaturePipe } from './temperature.pipe';

describe('TemeraturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });
});
