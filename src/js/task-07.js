// Напиши скрипт, который реагирует на изменение
//значения input#font - size - control(событие input) и 
//изменяет инлайн - стиль span#text обновляя свойство font - size.
//В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
const inputEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');




inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    
    const numberOfNewFont = getRandomInt(16, 45)
   spanText.style.fontSize = `${numberOfNewFont}px`
    
    }


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}
