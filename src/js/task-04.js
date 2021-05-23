//   Счетчик состоит из спана и кнопок, которые должны увеличивать и 
//уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее
//значение счетчика.
// Создай функции increment и decrement для увеличения и 
//уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и 
//обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>


const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}


const btnForRemove = document.querySelector('#counter').firstElementChild

const btnForAdd = document.querySelector('#counter').lastElementChild

const valueInDoc = document.querySelector('#value')

btnForRemove.addEventListener('click', () => {
    counterValue.decrement();
    valueInDoc.textContent = counterValue.value
});
btnForAdd.addEventListener('click', () => {
    counterValue.increment();
    valueInDoc.textContent = counterValue.value
});






