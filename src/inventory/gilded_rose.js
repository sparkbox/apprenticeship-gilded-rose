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

//Quality Strategies & strategies object
const updateStrategies = {
  "Aged Brie": cheeseUpdate,
  "Backstage passes to a TAFKAL80ETC concert": ticketUpdate,
  "Sulfuras, Hand of Ragnaros": legendaryUpdate,
  "Conjured Mana Cake": conjuredUpdate,
  "default": defaultUpdate
};

function cheeseUpdate(item) {
  let change = (item.sell_in < 0 ? 2 : 1);
  return clampQuality(item.quality + change);
}

function legendaryUpdate(item) {
  return item.quality;
}

function ticketUpdate(item) {
  let change = 0;
  if(item.sell_in <= 10 && item.sell_in >=0) {
    change = 2
  }
  else if(item.sell_in > 10) {
    change = 1;
  }
  else {
    change = -50;
  }
  return clampQuality(item.quality + change);
}

function conjuredUpdate(item){
  let change = (item.sell_in < 0 ? -4 : -2);
  return clampQuality(item.quality + change);
}

function defaultUpdate(item) {
  let change = (item.sell_in < 0 ? -2 : -1);
  return clampQuality(item.quality + change);
}

//Sell-in updates
function updateSellIn(item) {
  if(item.name != "Sulfuras, Hand of Ragnaros"){
    return item.sell_in - 1;
  }
  return item.sell_in;
}

//Helpers
function clampQuality(quality) {
  return Math.max(0,Math.min(50,quality));
}

//Select sell-in, quality strategiess
export function updateItems(items) {
  const updatedItems = JSON.parse(JSON.stringify(items));

  updatedItems.map((item) => {
    item.sell_in = updateSellIn(item);
    let updateQuality = updateStrategies[item.name] || updateStrategies["default"];
    item.quality = updateQuality(item);
  });

  return updatedItems;
}