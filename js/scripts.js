'use strict';

const rootElement = document.querySelector('#root');

const title = document.querySelector('#title');
const subtitle = document.querySelector('.subtitle');
const firstParagraph = document.querySelector('p');
const allParagraphs = document.querySelectorAll('p');

const h3element = document.createElement('h3');
h3element.innerText = "Hello, I am an h3 tag!";

rootElement.append(h3element);

title.innerText = "Hello JavaScript!";

const h1element = document.querySelector('#heading');
h1element.innerText = 'Toppings';

const burger = document.querySelector("#burger");
burger.className = 'list-item';

const newListItem = document.createElement('li');
newListItem.innerText = 'Ketchup';
const listItem = document.querySelector('#list');

listItem.append(newListItem);
