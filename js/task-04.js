let counterValue = 0;

const btnDecRef = document.querySelector('button[data-action="decrement"]');
const btnIncRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector("#value");

const decrease = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

const increase = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const decrementRef = btnDecRef.addEventListener("click", decrease);
const incrementRef = btnIncRef.addEventListener("click", increase);

console.log(counterValue);
