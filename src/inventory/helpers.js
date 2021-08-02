/* eslint-disable no-param-reassign */

const QUALITY_DEPRECATION = 1;
const MAX_QUALITY = 50;

function isItOverMax(increase, item, max) {
  if (item.quality + increase >= max) {
    item.quality = max;
  } else {
    item.quality += increase;
  }
  item.sell_in -= 1;

  return item;
}

export function handleBrie(item) {
  isItOverMax(1, item, MAX_QUALITY);
}

export function handleBackstagePass(item) {
  if (item.sell_in <= 0) {
    item.quality = 0;
    item.sell_in -= 1;
  } else if (item.sell_in <= 5) {
    isItOverMax(3, item, MAX_QUALITY);
  } else if (item.sell_in <= 10) {
    isItOverMax(2, item, MAX_QUALITY);
  } else {
    isItOverMax(1, item, MAX_QUALITY);
  }

  return item;
}

export function handleConjuredItem(item) {
  item.quality -= (QUALITY_DEPRECATION * 2);
  item.sell_in -= 1;
  return item;
}

export function handleNonUniqueItem(item) {
  item.sell_in -= 1;
  if (item.qualtiy === 0) return item;
  if (item.sell_in < 0) {
    item.quality - (QUALITY_DEPRECATION * 2) < 0
      ? item.quality = 0
      : item.quality -= (QUALITY_DEPRECATION + QUALITY_DEPRECATION);
  } else {
    item.quality -= QUALITY_DEPRECATION;
  }

  return item;
}
