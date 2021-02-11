import { Item, updateQuality } from './gilded_rose';

describe('updating of standard items', () => {
  it.todo("Why won't my test pass?", () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(4);
  });

  it.todo('decreases the sell_in of a standard item by 1');

  it.todo('decreases the quality of a standard item by 1');

  it.todo('decreases the quality of a standard item by 2 if the sell_in is less than 0');
});

describe('updating of aged brie', () => {
  it.todo('decreases the sell_in of aged brie by 1');

  it.todo('increases the quality of aged brie by 1');

  it.todo('does not update the quality of aged brie to more than 50');
});

describe('updating of backstage passes', () => {
  it.todo('decreases the sell_in of backstage passes by 1');

  it.todo('increases the quality of backstage passes by 2 if there are 10 sell_in days or less');

  it.todo('increases the quality of backstage passes by 3 if there are 5 sell_in days or less');

  it.todo('decreases the quality of backstage passes to 0 if there are 0 sell_in days or less');

  it.todo('does not update the quality of backstage passes to more than 50');
});

describe('updating of sulfuras', () => {
  it.todo('does not update sell_in of sulfuras');

  it.todo('does not update the quality of sulfuras');
});

describe('updating of conjured items', () => {
  it.todo('decreases the sell_in of conjured items by 1');

  it.todo('decreases the quality of of conjured items by 2');
});
