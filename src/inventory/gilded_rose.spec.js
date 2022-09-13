import { Item, updateQuality } from './gilded_rose';

// ----Standard Item Quality----//
describe('updateQuality', () => {
  describe('when updating default item', () => {
    it('deprecates the sell in by one', () => {
      const standardItem = new Item('Haunted Shoe', 10, 10);
      updateQuality([standardItem]);
      expect(standardItem.sell_in).toBe(9);
    });
    // ----Quality deprecates by double for sell_in < 0----//
    it('deprecates quality by double when sell_in<0', () => {
      const standardItem = new Item('Haunted Shoe', 0, 5);
      updateQuality([standardItem]);
      expect(standardItem.quality).toBe(3);
    });
  });

  // ----Aged Brie Quality increases with age----//
  // increase sell_in to 3 and quality to 1 --passes
  describe('when updating Aged Brie', () => {
    it('increase quality of Aged Brie with age', () => {
      const standardItem = new Item('Aged Brie', 3, 0);
      updateQuality([standardItem]);
      expect(standardItem.quality).toBe(1);
    });

    // ----Quality of item is never >50----//
    // increase quality to 49 --passes
    it('increase quality of Aged Brie with age', () => {
      const standardItem = new Item('Aged Brie', 15, 49);
      updateQuality([standardItem]);
      expect(standardItem.quality).toBe(50);
    });
  });

  // --- "Sulfuras"- never has to be sold nor does it decrease in quality---//
  // Does not decrease in quality when I run it (test passed)

  it('sulfuras quality does not decrease with age', () => {
    const standardItem = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(80);
  });

  // ----backstage passes----//
  // increases in quality as it's sell_in value (age)decreases
  it('increase quality of backstage passes with decreased sell_in', () => {
    const standardItem = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      14,
      20,
    );
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(21);
  });

  // quality increases by 2 when there are 10 days or less
  it('increase quality of backstage passes with decreased sell_in', () => {
    const standardItem = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      10,
      20,
    );
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(22);
  });

  // quality increases by 2 when there are 10 days or less
  it('increase quality of backstage passes with decreased sell_in', () => {
    const standardItem = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      9,
      20,
    );
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(22);
  });

  // quality increases by 3 when there are 5 days or less
  it('increase quality of backstage passes with decreased sell_in', () => {
    const standardItem = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      5,
      20,
    );
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(23);
  });

  // quality increases by 3 when there are 5 days or less
  it('increase quality of backstage passes with decreased sell_in', () => {
    const standardItem = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      3,
      20,
    );
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(23);
  });

  // quality drops to zero after the concert
  it('decrease quality of backstage passes to zero after concert', () => {
    const standardItem = new Item(
      'Backstage passes to a TAFKAL80ETC concert',
      0,
      20,
    );
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(0);
  });

  // not sure how to test for 'quality of an item is never negative'
  // if it's zero, you can't have negative quality so expect to be zero for a passing test!
  it('quality of an item is never negative', () => {
    const standardItem = new Item('Conjured Mana Cake', 3, 0);
    updateQuality([standardItem]);

    expect(standardItem.quality).toBe(0);
  });

  it('quality of a non-"Sulfuras" item will degrade by 1', () => {
    const standardItem = new Item('Elixir of the Mongoose', 5, 7);
    updateQuality([standardItem]);

    expect(standardItem.quality).toBe(6);
  });
});
