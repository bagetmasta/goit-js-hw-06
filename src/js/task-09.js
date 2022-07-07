const buttonChangeColor = document.querySelector('.change-color');
const bgValue = document.querySelector('.color');
const bodyRef = document.querySelector('body');

buttonChangeColor.addEventListener('click', event => {
  bgValue.textContent = getRandomHexColor();

  bodyRef.style.backgroundColor = bgValue.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
