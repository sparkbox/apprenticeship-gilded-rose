import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it.todo("Why won't my test pass?", () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(4);
  });

  it.todo('This is a good place for a good test!');
});
