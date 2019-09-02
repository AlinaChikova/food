"use strict";
const data = require('../../data.json');

const headerTitle = [
	'Выберите размер',
	'Хлеб для сендвича на выбор',
	'Дополнительные овощи бесплатно',
	'Выберите 3 бесплатных соуса по вкусу',
	'Добавьте начинку по вкусу',
	'Проверьте и добавьте в корзину'
];

const popupMenu = ['sizes','breads','vegetables','sauces','fillings'];   
const elementsMenu = document.querySelectorAll('.popup-menu li'); 


function createModalCard(obj) {
	
	let parent = document.querySelector('.content-card');

	let objKeys = Object.keys(data[obj]);
	let objValues = Object.values(data[obj]);

	for (let i = 0; i < objValues.length; i++) {		
		
		let imageSrc = '';
		if (objValues[i].image !== undefined) {
			imageSrc = objValues[i].image; 
		};

		let active = (i==0) ? " modalcard-active" : "";
		parent.insertAdjacentHTML('beforeend',
				`<div class="card modalcard ${active}">
				    <div class="product">
				    	<img class="product__image" src="${imageSrc}" alt="image">
				    </div>
				    <div class="card__name">${objValues[i].name}</div>
				    <div class="card__price">Цена: <span class="card__price-value">${objValues[i].price}</span> руб.</div>
				</div>`
    	);		
    };		
};
let visibleCard = 0;

$('.popup-menu li').on('click', function () {
    let indexMenuItem = $(this).index();
	visibleCard = 0;
    $(".title").remove();
    $(".modalcard").remove();

    let parent = document.querySelector('.popup-head');
	parent.insertAdjacentHTML('afterbegin',` <p class="title">${headerTitle[indexMenuItem]}</p>`);
		
	createModalCard(popupMenu[indexMenuItem]);	

	changeVisibleCard(0);
	document.querySelector('.menu-active').classList.remove('menu-active');
	elementsMenu[indexMenuItem].classList.add('menu-active');	  
});

let numSauces = 1;
$(document).on('click', '.modalcard', function () {
	const cards = document.querySelectorAll('.modalcard'); 
	let indexCard = $(this).index();

	let menuActive = document.querySelector('.menu-active');
	
	if (menuActive==elementsMenu[0] || menuActive==elementsMenu[1]) {
		document.querySelector('.modalcard-active').classList.remove('modalcard-active');
		cards[indexCard].classList.add('modalcard-active');	 

	}
	if (menuActive==elementsMenu[2] || menuActive==elementsMenu[4]) {		
		cards[indexCard].classList.toggle('modalcard-active');	 
	}
	if (menuActive==elementsMenu[3]) {			
		if (numSauces < 3) {			
			if (cards[indexCard].classList.contains('modalcard-active')) {
				cards[indexCard].classList.remove('modalcard-active');
				numSauces--;			
			} else {
				cards[indexCard].classList.add('modalcard-active');
				numSauces++;
			};			
		} else {			
			if (cards[indexCard].classList.contains('modalcard-active')) {
				cards[indexCard].classList.remove('modalcard-active');	
				numSauces--; 
			};
		};			
	};
});

$(document).on('click', '.link', function () {
	document.querySelector('.title').innerText = 'Выберите размер';
	$(".modalcard").remove();
	createModalCard('sizes')
	document.querySelector('.menu-active').classList.remove('menu-active');
	elementsMenu[0].classList.add('menu-active');	

});



$(document).on('click', '.back', function () {
	if (visibleCard > 0) visibleCard -= 6;
	changeVisibleCard(visibleCard);
});

$(document).on('click', '.forward', function () {
	let cards = document.querySelectorAll('.modalcard'); ``
	if (visibleCard < cards.length) visibleCard += 6;
	changeVisibleCard(visibleCard);
});



function changeVisibleCard(min) {
	let cards = document.querySelectorAll('.modalcard'); 

	if (cards.length > 6) {
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.display = 'none';
		};
		for (let i = min; i < min+6; i++) {
			cards[i].style.display = 'flex';
		};
	} else{
		for (let i = 0; i < cards.length; i++) {
			cards[i].style.display = 'flex';
		};
	};
};