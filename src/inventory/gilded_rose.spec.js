import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it('deprecates the sell in by one for a Haunted Shoe', () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it('increases the quality by one for Aged Brie', () => {
    const specialItem = new Item('Aged Brie', 10, 10);
    updateQuality([specialItem]);
    expect(specialItem.quality).toBe(11);
  });

  it('increases the quality by two for Aged Brie', () => {
    const specialItem = new Item('Aged Brie', -1, 10);
    updateQuality([specialItem]);
    expect(specialItem.quality).toBe(12);
  });

  it('decreases the quality by one for Conjured Mana Cake', () => {
    const standardItem = new Item('Conjured Mana Cake', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(9);
  });

  it('with less than 11 days to sell, increases the quality by two for Backstage Passes', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
    updateQuality([item]);
    expect(item.quality).toBe(22);
  });

  it('with less than 6 days to sell, increases the quality by three for Backstage Passes', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
    updateQuality([item]);
    expect(item.quality).toBe(23);
  });

  it('event has passed, sets the quality to 0', () => {
    const item = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20);
    updateQuality([item]);
    expect(item.quality).toBe(0);
  });

  it('item has expired, quality should be decreased by 2', () => {
    const item = new Item('Conjured Mana Cake', -1, 20);
    updateQuality([item]);
    expect(item.quality).toBe(18);
  });
});
