const counterValue = document.querySelector('#value');
counterValue.value = 0;
console.log(counterValue.value);

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');

buttonDecrement.addEventListener('click', event => {
  counterValue.value -= 1;
  counterValue.textContent = counterValue.value;
});

buttonIncrement.addEventListener('click', () => {
  counterValue.value += 1;
  counterValue.textContent = counterValue.value;
});
