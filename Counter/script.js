const mainTitle = document.querySelector('#title');
let value = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');


btnIncrement.addEventListener(`click`, () => {
    value++;
    mainTitle.textContent = value;
})

btnDecrement.addEventListener(`click`, () => {
    value--;
    mainTitle.textContent = value;
})
btnReset.addEventListener(`click`, () => {
    value = 0;
    mainTitle.textContent = value;
})