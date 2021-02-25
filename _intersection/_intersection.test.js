const _ = require('lodash');

describe('test _intersection function', () => {
  it('should returns empty array ', () => {
    const a = [22, 1];
    const b = [2, 4];
    expect(_.intersection(a,b)).toEqual([])
  });

  it('should returns the new array of intersecting values', () => {
    const a = [22, 1, 3, 3,56, 22];
    const b = [2, 11, 3, 3,55, 22];
    expect(_.intersection(a,b)).toEqual([22,3])
  });

  it('should returns empty array ', () => {
    const a = [22, 1, 3, 3,56, 22];
    const b = [];
    expect(_.intersection(a,b)).toEqual([])
  });

  it('should returns array with each element once ', () => {
    const a = [22, 1, 3, 3,56, 22];
    expect(_.intersection(a)).toEqual([22,1,3,56])
  });

  it('should show empty array  ', () => {
    expect(_.intersection()).toEqual([])
  });

  it('should return empty array if arguments are object ', () => {
    expect(_.intersection({'a': 1, 'b': 2}, {'a': 1, 'c': 3 })).toEqual([])
  });

});
