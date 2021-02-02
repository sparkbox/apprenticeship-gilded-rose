import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it("Why won't my test pass?", () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it('Updates the quality of aged brie', () => {
    const testItem = new Item('Aged Brie', 7, 2);
    updateQuality([testItem])
    expect(testItem.quality).toBe(3);
  });
});
