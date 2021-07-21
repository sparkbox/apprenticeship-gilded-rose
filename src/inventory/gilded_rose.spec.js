import { Item, updateQuality } from './gilded_rose';

describe('Helper functions', () => {
  it('check if item increases as sell in decreases', () => {
    const increasingItem = new Item('Aged Brie', 2, 0);
    const decreasingItem = new Item('Elixir of the Mongoose', 5, 7);
    expect(sellInDecreasesItem(increasingItem)).toBe(false);
    expect(sellInDecreasesItem(decreasingItem)).toBe(true);
  });
  it('increases quality of Aged Brie', () => {
    const agedBrie = new Item('Aged Brie', 2, 0);
    handleBrie(agedBrie);
    expect(agedBrie.quality).toBe(1);
    expect(agedBrie.sell_in).toBe(1);
  });
});

describe('`updateQuality`', () => {
  it('deprecates the sell in by one for a Haunted Shoe', () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it.todo('This is a good place for a good test!');
});
