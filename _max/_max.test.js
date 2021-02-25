const _ = require('lodash');

describe('test _max function', () => {
  it('should return max value', () => {
    expect(_.max([3, 4, 1, 34, 100])).toBe(100);
  });

  it('should return max correct value', () => {
    expect(_.max([0.3, 0.4, 0.1, 0.34, 0.100])).toBeCloseTo(0.4);
  });

  it('should return undefined', () => {
    expect(_.max([])).toBeUndefined();
  });

  it('should return not undefined', () => {
    expect(_.max(['a', 'v'])).not.toBeUndefined();
  });

  it('should return true', () => {
    expect(_.max(['a', 'v'])).toBeTruthy();
  });

  it('should return 2', () => {
    expect(_.max([2,2,2,2])).toEqual(2);
  });

})