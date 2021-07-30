/* eslint-disable no-param-reassign */

function isItOver50(increase, item) {
  if (item.quality + increase >= 50) {
    item.quality = 50;
  } else {
    item.quality += increase;
  }
  item.sell_in -= 1;

  return item;
}

export function handleBrie(item) {
  isItOver50(1, item);
}

export function handleBackstagePass(item) {
  if (item.sell_in <= 0) {
    item.quality = 0;
    item.sell_in -= 1;
  } else if (item.sell_in <= 5) {
    isItOver50(3, item);
  } else if (item.sell_in <= 10) {
    isItOver50(2, item);
  } else {
    isItOver50(1, item);
  }

  return item;
}

export function handleConjuredItem(item) {
  item.quality -= 2;
  item.sell_in -= 1;
  return item;
}

export function handleNonUniqueItem(item) {
  if (item.quality === 0) {
    item.quality = 0;
  } else if (item.sell_in < 0) {
    if (item.quality < 2) {
      item.quality -= 1;
    } else {
      item.quality -= 2;
    }
  } else {
    item.quality -= 1;
  }
  item.sell_in -= 1;

  return item;
}
