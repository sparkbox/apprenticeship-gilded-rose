import { Item, updateQuality } from './gilded_rose';

describe('updating of standard items', () => {
  it('decreases the sell_in of a standard item by 1', () => {
    const standardItem = new Item('Hand of Thor', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  it('decreases the quality of a standard item by 1', () => {
    const standardItem = new Item('Hand of Thor', 10, 30);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(29);
  });

  it('decreases the quality of a standard item by 2 if the sell_in is less than 0', () => {
    const standardItem = new Item('Hand of Thor', 0, 20);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(18);
  });
});

describe('updating of aged brie', () => {
  const agedBrie = new Item('Aged Brie', 2, 0);

  afterEach(() => {
    // updates the quality and sell_in back to original quantities
    agedBrie.sell_in = 2;
    agedBrie.quality = 0;
  });

  it('increments in quality by 1', () => {
    const agedBrieArray = updateQuality([agedBrie]);
    expect(agedBrieArray[0].quality).toBe(1);
  });

  it('decrements the sell_in by 1', () => {
    updateQuality([agedBrie]);
    expect(agedBrie.sell_in).toBe(1);
  });

  it('does not increase the quality to more than 50', () => {
    agedBrie.quality = 50;
    const agedBrieArray = updateQuality([agedBrie]);
    expect(agedBrieArray[0].quality).toBe(50);
  });

  it('increases in quality twice as fast if sell_in is less than 0', () => {
    agedBrie.sell_in = -1;
    const agedBrieArray = updateQuality([agedBrie]);
    expect(agedBrieArray[0].quality).toBe(2);
  });
});

describe('updating of backstage passes', () => {
  const pass = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10);
  const passTenDays = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 8);
  const passFiveDays = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15);
  const passMaximumQuality = new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50);
  const passPostConcert = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50);
  const passMinimumQuality = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0);

  beforeAll(() => {
    updateQuality([pass, passTenDays, passFiveDays, passMaximumQuality,
      passPostConcert, passMinimumQuality]);
  });

  it('decreases the sell_in of backstage passes by 1', () => {
    expect(pass.sell_in).toBe(10);
  });

  it('increases the quality of backstage passes by 2 if there are 10 sell_in days or less', () => {
    expect(passTenDays.quality).toBe(10);
  });

  it('increases the quality of backstage passes by 3 if there are 5 sell_in days or less', () => {
    expect(passFiveDays.quality).toBe(18);
  });

  it('decreases the quality of backstage passes to 0 if there are 0 sell_in days or less', () => {
    expect(passPostConcert.quality).toBe(0);
  });

  it('does not update the quality of backstage passes to more than 50', () => {
    expect(passMaximumQuality.quality).toBe(50);
  });

  it('does not reduce the quality of backstage passes to below zero', () => {
    expect(passMinimumQuality.quality).toBe(0);
  });
});

describe.only('updating of sulfuras', () => {
  const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);

  it('does not update sell_in', () => {
    const sulfurasArray = updateQuality([sulfuras]);
    expect(sulfurasArray[0].sell_in).toBe(0);
  });

  it('does not update quality', () => {
    const sulfurasArray = updateQuality([sulfuras]);
    expect(sulfurasArray[0].quality).toBe(80);
  });
});

describe('updating of conjured items', () => {
  const cake = new Item('Conjured Mana Cake', 5, 10);
  const oldCake = new Item('Conjured Mana Cake', -1, 10);

  beforeAll(() => {
    updateQuality([cake, oldCake]);
  });

  it.skip('decreases the sell_in of conjured items by 1', () => {
    expect(cake.sell_in).toBe(4);
  });

  it.skip('decreases the quality of conjured items by 2', () => {
    expect(cake.quality).toBe(8);
  });

  it.skip('decreases the quality of conjured items by 4', () => {
    expect(oldCake.quality).toBe(6);
  });
});
