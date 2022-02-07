import { Item, updateQuality } from './gilded_rose';

describe('`updateQuality`', () => {
  it('deprecates the sell in by one for a Haunted Shoe', () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  // it.todo('This is a good place for a good test!');


  it('deprecates the quality by one for a Haunted Shoe', () => {
    const standardItem = new Item('Haunted Shoe', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(9);
  });

  //=====================

  //brie quality +1 as sell_in -1

  it('increases the quality by one for aged brie', () => {
    const standardItem = new Item('Aged Brie', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(11);
  });


  it('deprecates the sell_in by one for aged brie', () => {
    const standardItem = new Item('Aged Brie', 10, 10);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(9);
  });

  //======================


  //the quality of an item is never negative
  //use one real item? or test for every real item? 
  //NOT aged brie--it only goes up
  //NOT sulfuras--it does NOT decrease
  //idk about backstage passes

  //if quality is already 0, deprecation stops!  
  //quality stays 0

  it('verifies that an item is never negative', () => {
    const standardItem = new Item('Elixir of the Mongoose', 1, 0);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(0);
  });

  //trying to cover some lines below 33
  //quality of an item is never more than 50

  //it('verifies that if the qulity of an  incrementing-quality-item is already 50, that it stays 50 and does not go beyond')

  //why highlight?

  //run coverage in chrome...


  it('verifies that the quality of an item never increases to more than 50', () => {
    const standardItem = new Item('Aged Brie', 5, 50);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(50);
  });

  //if not brie or bs passes, quality increases by 1 if less than 50

  it('verifies that the quality of an item never increases to more than 50', () => {
    const standardItem = new Item('Aged Brie', 5, 50);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(50);
  });

  //why only running 3 tests?

});
