import { Item, updateQuality } from './gilded_rose';

const items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Conjured Mana Cake', 3, 6),
];

export default function getHtmlListFromArray(itemArray) {
  let htmlOutput = '<ol>';
  itemArray.forEach((item) => {
    htmlOutput += `<li>${JSON.stringify(item)}</li>`;
  });
  htmlOutput += '</ol>';
  return htmlOutput;
}

export const htmlListItems = getHtmlListFromArray(updateQuality(items));
