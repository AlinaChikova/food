"use strict";
import '../frontpage/number.js';

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


let inf_sand = {
	size: "15 См",
	bread: 'Белый итальянский',
	veg: ['Пекинская капуста'],
	fill: ['Бекон'],
	sauces: ['1000 Островов'],
	price: 35
};

$(document).on('click', '.head__close', function () {
	inf_sand = {
		size: "15 См",
		bread: 'Белый итальянский',
		veg: ['Пекинская капуста'],
		fill: ['Бекон'],
		sauces: ['1000 Островов'],
		price: 0 };
		$(".modalcard").remove();
		$(".start").click();


});

$(document).on('click', '.link', function () {
	let el =  $(this).parent().parent()[0].id;	
	inf_sand.name = document.getElementById(el).querySelector('.card__name').innerText;
	inf_sand.img = document.getElementById(el).querySelector('.product__image').src;
	console.log(inf_sand);
	$(".start").click();
});



$('.popup-menu li').on('click', function () {
    let indexMenuItem = $(this).index();
	visibleCard = 0;
    $(".title").remove();
    $(".modalcard").remove();
 	$(".ready").remove();
    let parent = document.querySelector('.popup-head');
	parent.insertAdjacentHTML('afterbegin',` <p class="title">${headerTitle[indexMenuItem]}</p>`);
		
	document.querySelector('.menu-active').classList.remove('menu-active');
	elementsMenu[indexMenuItem].classList.add('menu-active');	

	if (indexMenuItem == 5) {
		let content = document.querySelector('.content');
		// $(".ready").remove();
		content.insertAdjacentHTML('afterend',` 
			<div class="ready">	
				<div class="ready-wrap-f">	
				<div class='ready-wrap'>		
					<div class="ready__image">
					    <div class="product">
					        <img class="product__image" src="${inf_sand.img}">
					    </div> 
					</div>
					<div class="ready-description">
						<div class="ready-description-title">Ваш сендвич готов!</div>
						<div class=desc-wrap>
						<span>Размер: ${inf_sand.size} </span>
						<span>Хлеб: ${inf_sand.bread}</span>
						<span>Овощи: ${inf_sand.veg}</span>
						<span>Соусы: ${inf_sand.sauces}</span>
						<span>Начинка: ${inf_sand.fill}</span>
						</div>
						<div class="ready-description-name">${inf_sand.name}</div>
					</div>
					</div>
				<div class="ready-footer">
				    <div class="number ready-number">
				        <p>количество</p>
				        <div class="number__wrap">
				            <button class="number__button minus"><i class="fas fa-minus"></i></button>
				            <input class="number__window" value="0">
				            <button class="number__button plus"><i class="fas fa-plus"></i></button>
				        </div>
				    </div>
				    <div class="ready-wrap-price">
				        <div class="card__price ready-price">Цена: <span class="card__price-value">${inf_sand.price}</span> руб.</div>
				        <button class="card__add add_popup">в корзину</button>
				    </div>
				</div>
			</div>`);
	} else {
		createModalCard(popupMenu[indexMenuItem]);	
		changeVisibleCard(0);
	}


  
});

let numSauces = 1;
$(document).on('click', '.modalcard', function () {
	const cards = document.querySelectorAll('.modalcard'); 
	let indexCard = $(this).index();

	let menuActive = document.querySelector('.menu-active');
	
	if (menuActive==elementsMenu[0] || menuActive==elementsMenu[1]) {
		document.querySelector('.modalcard-active').classList.remove('modalcard-active');
		cards[indexCard].classList.add('modalcard-active');	 
		if (menuActive==elementsMenu[0] ){
			inf_sand.size = cards[indexCard].querySelector('.card__name').innerText;
			inf_sand.price += +cards[indexCard].querySelector('.card__price-value').innerText;
		}
		if (menuActive==elementsMenu[1] ){
			inf_sand.bread = cards[indexCard].querySelector('.card__name').innerText;
			inf_sand.price += +cards[indexCard].querySelector('.card__price-value').innerText;
		}
		
		console.log(inf_sand);
	}
	if (menuActive==elementsMenu[2] || menuActive==elementsMenu[4]) {	

		cards[indexCard].classList.toggle('modalcard-active');
		let checkEl = 	 cards[indexCard].querySelector('.card__name').innerText;
		let arr;
		if (menuActive==elementsMenu[2]){
			 arr = 'veg';
		} else {
			arr = 'fill';
		};

		let check =  inf_sand[arr].indexOf(checkEl);
		// console.log(check);
		if (check == -1) {
			inf_sand[arr].push(checkEl);
			inf_sand.price += +cards[indexCard].querySelector('.card__price-value').innerText;
		} else {
			inf_sand[arr].splice(check,1);
			inf_sand.price -= +cards[indexCard].querySelector('.card__price-value').innerText;
		};		
		console.log(inf_sand)
	};


	if (menuActive==elementsMenu[3]) {	
	console.log(inf_sand);	
	let checkEl = 	 cards[indexCard].querySelector('.card__name').innerText;	
	console.log(checkEl);
	console.log(inf_sand.sauces);	
	let check = inf_sand.sauces.indexOf(checkEl);
	console.log(check);
		if (numSauces < 3) {			
			if (cards[indexCard].classList.contains('modalcard-active')) {
				cards[indexCard].classList.remove('modalcard-active');
				numSauces--;	
				inf_sand.sauces.splice(check,1);
				inf_sand.price -= +cards[indexCard].querySelector('.card__price-value').innerText;		
			} else {
				cards[indexCard].classList.add('modalcard-active');
				numSauces++;
				inf_sand.sauces.push(checkEl);
				inf_sand.price += +cards[indexCard].querySelector('.card__price-value').innerText;
			};			
		} else {			
			if (cards[indexCard].classList.contains('modalcard-active')) {
				cards[indexCard].classList.remove('modalcard-active');	
				numSauces--; 
				inf_sand.sauces.splice(check,1);
				inf_sand.price -= +cards[indexCard].querySelector('.card__price-value').innerText;
			};
		};			
	};
	// if (visibleCard < cards.length) visibleCard += 6;
	// changeVisibleCard(visibleCard);
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

$(document).on('click', '.back', function () {
	if (visibleCard > 0) visibleCard -= 6;
	changeVisibleCard(visibleCard);
});

$(document).on('click', '.forward', function () {
	let cards = document.querySelectorAll('.modalcard'); ``
	if (visibleCard < cards.length) visibleCard += 6;
	changeVisibleCard(visibleCard);
});


$(document).on('click', '.add_popup', function () {
	let el =  $(this).parent().parent()[0].id;

	let basketItem = {
   		number: document.getElementById(el).querySelector('.number__window').value,
   		name: document.getElementById(el).querySelector('.ready-description-name').innerText,
   		price: document.getElementById(el).querySelector(".card__price-value").innerText,
   		id: el
	};	

	
	changeBasket(basket);
});