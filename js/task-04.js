
let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.getElementById('value');

const targetBtnClickDecrement = (event) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const targetBtnClickIncrement = (event) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', targetBtnClickDecrement);
incrementBtn.addEventListener('click', targetBtnClickIncrement);


