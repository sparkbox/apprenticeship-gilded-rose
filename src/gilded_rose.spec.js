import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it("Why won't my test pass?", () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it('Updates the quality of aged brie', () => {
    const brie = new Item('Aged Brie', 7, 2);
    const brieExpired = new Item('Aged Brie', -1, 10)
    const brieHighestQuality = new Item('Aged Brie', -1, 50)
    updateQuality([brie, brieExpired, brieHighestQuality])
    expect(brie.quality).toBe(3);
    expect(brieExpired.quality).toBe(12);
    expect(brieHighestQuality.quality).toBe(50);
  });

  it('Updates the quality of sulfuras', () => {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 50);
    updateQuality([sulfuras]);
    expect(sulfuras.quality).toBe(50);
  })
});
