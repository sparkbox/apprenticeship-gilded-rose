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

function mutateItemQuality(currentQuality, amount = 1) {
  if (currentQuality >= 50) {
    // the rules state that the quality should never be more than 50
    if (currentQuality + amount === 0) {
      /**
       * The only time we will change the quality when it's 50 or more is when 
       * we want to change backstage passes' quality to 0 (if sellin is less than 0).
       * example: new Item('Backstage passes to a TAFKAL80ETC concert', -1, 50)
       */
      return 0;
    } else {
      return currentQuality;
    }
  }
  // quality can increase or decrease, if no amount is specified quality will increase by 1
  return currentQuality + amount;
}

function mutateItemSellIn(currentSellIn, amount = 1) {
  // is generally always decremented (by 1)
  return currentSellIn - amount;
}

export function updateQuality(items) {
  const result = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].name === 'Sulfuras, Hand of Ragnaros') {
          result.push(items[i])
    } else if (items[i].name === 'Aged Brie') {
        if (items[i].sell_in < 0) {
          result.push({...items[i], quality: mutateItemQuality(items[i].quality,2)})
        } else {
          result.push({...items[i], quality: mutateItemQuality(items[i].quality)})
        }
    } else if (items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].sell_in <= 0) {
        result.push({...items[i], quality: mutateItemQuality(items[i].quality, -(items[i].quality))})
      } else if (items[i].sell_in < 6) {
        result.push({...items[i], quality: mutateItemQuality(items[i].quality, 3)})
      } else if (items[i].sell_in < 11) {
        result.push({...items[i], quality: mutateItemQuality(items[i].quality,2)})
      } else {
        result.push({...items[i], quality: mutateItemQuality(items[i].quality)})
      }
    } else {
      //this block will handle all standard items
      if (items[i].sell_in <= 0) {
        result.push({...items[i], quality: mutateItemQuality(items[i].quality,-2)})
      } else {
        result.push({...items[i], quality: mutateItemQuality(items[i].quality,-1)})
      }
    }

    if (items[i].name !== 'Sulfuras, Hand of Ragnaros') {
      //this will access the current item in results array and update the sell_in value accordingly
      const currentItem = result.slice(-1)
      const updatedSellInItem = {...currentItem[0], sell_in: mutateItemSellIn(items[i].sell_in)}
      result[i] = updatedSellInItem
    }

    return result
  }
}