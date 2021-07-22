import { Item, updateQuality } from './gilded_rose';
import {
  sellInDecreasesItem,
  handleBrie,
  handleBackstagePass,
  handleConjuredItem,
} from './helpers';

describe('Helper functions', () => {
  it('check if item increases as sell in decreases', () => {
    const increasingItem = new Item('Aged Brie', 2, 0);
    const decreasingItem = new Item('Elixir of the Mongoose', 5, 7);
    expect(sellInDecreasesItem(increasingItem)).toBe(false);
    expect(sellInDecreasesItem(decreasingItem)).toBe(true);
  });

  it('handles conditions of Aged Brie', () => {
    const agedBrie = new Item('Aged Brie', 2, 0);
    handleBrie(agedBrie);
    // increases quality as sell in decreases;
    expect(agedBrie.quality).toBe(1);
    expect(agedBrie.sell_in).toBe(1);
  });

  it('handles conditions of Backstage Passes', () => {
    const aboveTenDaysBackstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20);
    const tenDaysBackstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
    const fiveDaysBackstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
    const noDaysBackstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20);
    handleBackstagePass(aboveTenDaysBackstagePass);
    handleBackstagePass(tenDaysBackstagePass);
    handleBackstagePass(fiveDaysBackstagePass);
    handleBackstagePass(noDaysBackstagePass);
    // increases by one with age;
    expect(aboveTenDaysBackstagePass.quality).toBe(21);
    expect(aboveTenDaysBackstagePass.sell_in).toBe(10);
    // increases by 2 within 10 days of show;
    expect(tenDaysBackstagePass.quality).toBe(22);
    expect(tenDaysBackstagePass.sell_in).toBe(9);
    // increase by 3 within 5 days of show;
    expect(fiveDaysBackstagePass.quality).toBe(23);
    expect(fiveDaysBackstagePass.sell_in).toBe(4);
    // loses all value after show
    expect(noDaysBackstagePass.quality).toBe(0);
    expect(noDaysBackstagePass.sell_in).toBe(-2);
  });

  it('handles conditions of Conjured items', () => {
    const conjuredItem = new Item('Conjured Mana Cake', 3, 6);
    handleConjuredItem(conjuredItem);
    expect(conjuredItem.quality).toBe(4);
    expect(conjuredItem.sell_in).toBe(2);
  });
});

describe('`updateQuality`', () => {
  it('deprecates the sell in by one for a Haunted Shoe', () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it('makes sure the quality is never negative', () => {
    const standardItem = new Item('Haunted Shoe', -1, 1);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(0);
  });

  it('deprecatees the quality by two once sell_in < 0', () => {
    const standardItem = new Item('Haunted Shoe', -1, 10);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(8);
  });

  it('increases the quality, decreases sell_in by one for Aged Brie', () => {
    const agedBrie = new Item('Aged Brie', 2, 0);
    updateQuality([agedBrie]);
    expect(agedBrie.quality).toBe(1);
    expect(agedBrie.sell_in).toBe(1);
  });

  it('no quality can reach above 50', () => {
    const agedBrie = new Item('Aged Brie', 2, 50);
    updateQuality([agedBrie]);
    expect(agedBrie.quality).toBe(50);
  });

  it('should check all conditions of backstage passes (see comments)', () => {
    const aboveTenDaysBackstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20);
    const tenDaysBackstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
    const fiveDaysBackstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
    const noDaysBackstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20);

    updateQuality([aboveTenDaysBackstagePass]);
    updateQuality([tenDaysBackstagePass]);
    updateQuality([fiveDaysBackstagePass]);
    updateQuality([noDaysBackstagePass]);
    // increases by one with age;
    expect(aboveTenDaysBackstagePass.quality).toBe(21);
    expect(aboveTenDaysBackstagePass.sell_in).toBe(10);
    // increases by 2 within 10 days of show;
    expect(tenDaysBackstagePass.quality).toBe(22);
    expect(tenDaysBackstagePass.sell_in).toBe(9);
    // increase by 3 within 5 days of show;
    expect(fiveDaysBackstagePass.quality).toBe(23);
    expect(fiveDaysBackstagePass.sell_in).toBe(4);
    // loses all value after show
    expect(noDaysBackstagePass.quality).toBe(0);
    expect(noDaysBackstagePass.sell_in).toBe(-2);
  });

  it('should not change Sulfuras at all', () => {
    const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    updateQuality([sulfuras]);
    expect(sulfuras.quality).toBe(80);
    expect(sulfuras.sell_in).toBe(0);
  });
});
