const _ = require('lodash');

describe('test _initial function', () => {
  const arr = ['a', 'd', 'g', 'f', 'd'];

  it('should return array without last element', () => {
    expect(_.initial(arr)).toEqual(['a', 'd', 'g', 'f'])
  });

  it('should return empty array', () => {
    expect(_.initial([])).toEqual([])
  });

  it('should return first element', () => {
    expect(_.initial([null, undefined])).toEqual([null])
  });
})