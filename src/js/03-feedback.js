/*В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.*/


import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const input = {};

const inputForm = document.querySelector('.feedback-form');
 
inputForm.addEventListener('input', throttle(newInput, 500));   
    
function newInput(event) {
  
    input.email = inputForm.elements.email.value;
    input.message = inputForm.elements.message.value;
    localStorage.setItem(KEY, JSON.stringify(input));

}
 
updatePage();

function updatePage() {
    
    const savedData = localStorage.getItem(KEY);

    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        inputForm.email.value = email;
        inputForm.message.value = message;
    }
  return
}

inputForm.addEventListener('submit', onFormSubmit);  

function onFormSubmit(event) {
  event.preventDefault();
if(!inputForm.email.value || !inputForm.message.value)return;
    event.currentTarget.reset();
  localStorage.removeItem(KEY);
  console.log(input)
}
