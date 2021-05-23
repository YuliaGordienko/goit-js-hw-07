// Напиши скрипт, который реагирует на изменение
//значения input#font - size - control(событие input) и 
//изменяет инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
const inputEl = document.querySelector('#font-size-control');

const spanText = document.getElementById('text');
const findFontSize = document.defaultView.getComputedStyle(spanText).fontSize;
const fontSize = parseInt(findFontSize);


inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    spanText.style.fontSize = '36px'
}