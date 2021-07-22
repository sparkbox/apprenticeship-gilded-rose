import { handleBackstagePass, handleBrie, handleConjuredItem, sellInDecreasesItem } from "./helpers";

// Item constructor. DO NOT MODIFY OR THE GOBLIN WILL EAT YOU!
export function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

/*
* Update inventory
* @param {Item[]} items - an array of Items representing the inventory to be updated
* Example usage:

const items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Conjured Mana Cake', 3, 6),
];

updateQuality(items);
*/
export function updateQuality(items) {
  items.forEach((item) => {
    if(sellInDecreasesItem(item) && item.sell_in > 0) {
      item.sell_in -= 1;
      item.quality -= 1;
    } else {
      if(item.name === 'Aged Brie') {
        handleBrie(item);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        handleBackstagePass(item);
      } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
        console.log('hi')
      } else {
        if (item.quality === 0) {
          item.quality = item.quality;
        } else if (item.sell_in < 0) {
          if(item.quality < 2) {
            item.quality -= 1
          } else {
            item.quality -= 2;
          }
        }
      }
    }
  })
}
