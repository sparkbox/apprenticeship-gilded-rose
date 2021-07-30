import { handleBackstagePass, handleBrie, handleConjuredItem, handleNonUniqueItem, sellInDecreasesItem } from "./helpers.js";

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
    if(sellInDecreasesItem(item)) {
      handleNonUniqueItem(item);
    } else {
      if(item.name === 'Aged Brie') {
        handleBrie(item);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        handleBackstagePass(item);
      } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
        console.log('hi') // do nothing;
      } else if (item.name.includes('Conjured')) {
        handleConjuredItem(item);
      }
    }
  })
}

export function resetQualityAndSellIn(items) {
  const originals = [
    new Item('+5 Dexterity Vest', 10, 20),
    new Item('Aged Brie', 2, 0),
    new Item('Elixir of the Mongoose', 5, 7),
    new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new Item('Conjured Mana Cake', 3, 6),
  ];

  items.forEach((item) => {
    const origItem = originals.filter(word => word.name === item.name)
    item.quality = origItem[0].quality;
    item.sell_in = origItem[0].sell_in;
  });
}