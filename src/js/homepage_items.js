import { resetQualityAndSellIn, updateQuality, getNewItems } from '../inventory/gilded_rose.js';

const getItemRowHtml = ({ name, sell_in: sellIn, quality }) => {
  const itemHtml = document.createElement('tr');
  itemHtml.innerHTML += `<td>${name}</td>`;
  itemHtml.innerHTML += `<td>${quality}</td>`;
  itemHtml.innerHTML += `<td>${sellIn}</td>`;
  return itemHtml;
};

const renderItemsOnHomepage = (items) => {
  const elementItemsList = document.querySelector('#items > tbody');
  elementItemsList.innerHTML = null;
  items.forEach((element) => {
    const itemHtml = getItemRowHtml(element);
    elementItemsList.append(itemHtml);
  });
};

const bindEventListenToButton = (items, buttonId, buttonActionFunction) => {
  const button = document.getElementById(buttonId);
  button.addEventListener('click', (e) => {
    e.preventDefault();
    buttonActionFunction(items);
    renderItemsOnHomepage(items);
  });
};

const showItemsOnHomePage = () => {
  const items = getNewItems();
  renderItemsOnHomepage(items);
  bindEventListenToButton(items, 'reset-items-button', resetQualityAndSellIn);
  bindEventListenToButton(items, 'update-items-button', updateQuality);
};

showItemsOnHomePage();
