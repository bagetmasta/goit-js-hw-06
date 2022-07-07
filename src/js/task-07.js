const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
console.log(textRef);

inputRef.addEventListener('input', event => {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
});
