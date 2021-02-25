const _ = require('lodash');

describe('test _compact function', () => {
  let arr;
  beforeEach(() => {
     arr = [1,0, '0', '', false, true, '-1', null, undefined, 'abc'];
  });

  it('should be defined', () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  it('should add new element in array', () => {
    arr.push('shop');
    expect(arr).toContain('shop');
  })

  it('should delete falsy values from array', () => {
    const result = [1,'0', true, '-1', 'abc'];
    expect(_.compact(arr)).toEqual(result);
  });

  it('should not to contain falsy values', () => {
    expect(_.compact(arr)).not.toContain(0);
    expect(_.compact(arr)).not.toContain('');
    expect(_.compact(arr)).not.toContain(null);
    expect(_.compact(arr)).not.toContain(undefined);
    expect(_.compact(arr)).not.toContain(false);
  });
});