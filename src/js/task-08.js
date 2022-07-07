const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert(`Все поля должны быть заполнены`);
  } else {
    const newObject = {};
    newObject.email = email.value;
    newObject.password = password.value;

    console.log(newObject);
  }
}
