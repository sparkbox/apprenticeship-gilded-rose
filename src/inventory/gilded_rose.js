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

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

export function updateQuality(items) {
  items.forEach((item) => {
    const improvesWithAge = item.name === AGED_BRIE || item.name === BACKSTAGE_PASSES;
    const constantQuality = item.name === SULFURAS;

    if (constantQuality) return;

    determineItemQuality(item, improvesWithAge);
    item.sell_in -= 1;
  });
}

function isBackstagePass(item) {
  if (item.name === BACKSTAGE_PASSES) {
    handleBackstagePass(item);
  } else {
    // All other items that improve with age increase by 1.
    item.quality += 1;
  }
};

function keepItemQualityWithinRange(itemQuality) {
  const min = 0;
  const max = 50;
  return Math.min(Math.max(itemQuality, min), max);
};

// Modifies the quality of an item as time moves on.
function determineItemQuality(item, improvesWithAge) {
  // Quality degrades twice as fast when sell_in < 0.
  if (item.sell_in < 0) item.quality -= 1;

  // Add quality if the item improves with age.
  if (improvesWithAge) {
    isBackstagePass(item);
  } else {
    // Quality degrades by 1 as default, only if it doesn't improve with age.
    item.quality -= 1;
  }

  // Quality has a max of 50 and cannot be negative.
  item.quality = keepItemQualityWithinRange(item.quality);
}

// Modifies backstage passes, based on the sell_in value
function handleBackstagePass(item) {
  if (item.sell_in <= 10 && item.sell_in > 5) {
    item.quality += 2;
  } else if (item.sell_in <= 5) {
    item.quality += 3;
  }
}