const inputRef = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const divBoxes = document.querySelector('#boxes');
// const newArray = ['React'];
// const markup = newArray.map(array => `<div class="test">Nastya</div>`);
const newElements = document.createElement('li');

createButton.addEventListener('click', event => {
  createBoxes(inputRef.value);
});

function createBoxes(amount) {
  console.log(amount);

  // divBoxes.insertAdjacentHTML('afterbegin', newElements);
  divBoxes.append(newElements);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
