"use strict";

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');

// Книги по прорядку
book[0].before(book[1]);
book[2].before(book[4]);
book[4].after(book[3]);
book[3].after(book[5]);

//Меняем фон страницы 
document.body.style.background = 'url(./image/you-dont-know-js.jpg)';



//Исправляем заголовок
const links = document.querySelectorAll('a');
links[2].innerText = 'Книга 3. this и Прототипы Объектов';

//Удаляем баннер
document.querySelector('.adv').remove();

//Получаем коллекцию глав
const chaptersBooks = document.querySelectorAll('div.book>ul>li');

//Книга 2 главы по порядку
chaptersBooks[10].before(chaptersBooks[12]);
chaptersBooks[10].before(chaptersBooks[14]);
chaptersBooks[15].after(chaptersBooks[8]);

//Книга 5 главы по порядку 
chaptersBooks[40].after(chaptersBooks[38]);
chaptersBooks[37].after(chaptersBooks[45]);
chaptersBooks[43].after(chaptersBooks[41]);

//Добавляем новую главу
chaptersBooks[55].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');