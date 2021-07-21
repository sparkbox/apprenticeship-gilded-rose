/* eslint-disable no-param-reassign */
export function sellInDecreasesItem(item) {
  return item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert' && item.name !== 'Sulfuras, Hand of Ragnaros';
}

export function handleBrie(item) {
  item.quality += 1;
  item.sell_in -= 1;
  return item;
}

export function handleBackstagePass(item) {
  if (item.sell_in <= 0) {
    item.quality = 0;
  } else if (item.sell_in <= 5) {
    item.quality += 3;
  } else if (item.sell_in <= 10) {
    item.quality += 2;
  } else {
    item.quality += 1;
  }
  item.sell_in -= 1;
}

export function handleConjuredItem(item) {
  item.quality -= 2;
  item.sell_in -= 1;
}
