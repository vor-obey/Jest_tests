const _ = require('lodash');

describe('test _groupBy function', () => {
  it('should be defined', () => {
    expect(_.groupBy).toBeDefined();
    expect(_.groupBy).not.toBeUndefined();
  });

  it('should group array by length', () => {
    const arr = ['shop', 'magazine', 'write', 'book', 'closed', 'comfortable', 'read', 'function'];
    const result = {
      4: ['shop', 'book', 'read'],
      8: ['magazine', 'function'],
      5: ['write'],
      6: ['closed'],
      11: ['comfortable']
    }
    expect(_.groupBy(arr, 'length')).toEqual(result);
  });

  it('should group array by Math.floor', () => {
    const arr = [5.3, 5.4, 6.3, 3, 3.55, 5, 55, 0.23, 55.09 ];
    const result = {
      5: [5.3, 5.4, 5],
      6: [6.3],
      3: [3, 3.55],
      55: [55, 55.09],
      0: [0.23]
    }
    expect(_.groupBy(arr, Math.floor)).toEqual(result);
  });

  it('should return object with key undefined and value array', () => {
    const arr = [5.3, 5.4, 6.3, 3, 3.55, 5, 55, 0.23, 55.09 ];
    expect(_.groupBy(arr, 'abc')).toEqual({undefined: arr});
  })

  it('should return object', () => {
    const arr = [5.3, 5.4, 6.3, 3, 3.55, 5, 55, 0.23, 55.09 ];
    expect(_.groupBy(arr, 'abc')).toBeInstanceOf(Object);
  })
})