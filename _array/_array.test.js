describe('test _array', () => {
  it('should add new element in collection', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'milk',
    ];
    shoppingList.push('beer');

    expect(shoppingList).toContainEqual('beer');
    expect(shoppingList).toHaveLength(6);
    expect(shoppingList).toMatchSnapshot();
  })
})
