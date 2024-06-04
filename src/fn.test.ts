import { fn } from './fn';

describe('fn', () => {
  test('fn', () => {
    const str = 'hello jest';
    expect(fn(str)).toBe(str);
  });
});
