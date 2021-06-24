import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it('deprecates the sell in by one for a Haunted Shoe', () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it.todo('This is a good place for a good test!');
});
