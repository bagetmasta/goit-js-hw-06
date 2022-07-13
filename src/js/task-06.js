const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  const maxSymbols = Number(inputRef.dataset.length);

  if (event.currentTarget.value.length !== maxSymbols) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
});
