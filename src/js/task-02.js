const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const newArray = ingredients.map(ingredient => {
  const newItemList = document.createElement('li');
  newItemList.classList.add('list');
  newItemList.textContent = ingredient;

  return newItemList;
});

ingredientsListRef.append(...newArray);
