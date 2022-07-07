const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const newItemList = document.createElement('li');
  newItemList.classList.add('list');
  newItemList.textContent = ingredient;

  ingredientsListRef.append(newItemList);
}
