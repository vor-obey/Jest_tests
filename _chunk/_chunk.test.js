const _ = require('lodash');

describe('test _chunk function', () => {
  it('should split the array into 2 parts', () => {
    expect(_.chunk(['1','2','3','4','5','6','7','8','9','10'], 5)).toEqual([['1','2','3','4','5'], ['6','7','8','9','10']])
  });

  it('should return one array', () => {
    expect(_.chunk([1,2,3,4,5,6], 7)).toEqual([[1,2,3,4,5,6]])
  });

  it('should return empty array', () => {
    expect(_.chunk([1,2,3,4,5,6], 0)).toEqual([])
  });

  it('should wrap every element in array', () => {
    expect(_.chunk([1,2,3,4,5,6])).toEqual([[1],[2],[3],[4],[5],[6]])
  });

  it('should split array into 2 parts', () => {
    expect(_.chunk(['2',3,5], 2)).toEqual([['2', 3],[5]])
  });
})




