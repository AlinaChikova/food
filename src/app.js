"use strict";

import './project/test/test.js';
import './project/main.scss';
// import './project/frontpage/create-content.js';
import createCard from './project/frontpage/create-card.js';

createCard('pizza');

const menu = ['pizza','shaurma','sandwiches','burgers','chicken','salads','drinks'];   
const elementsMenu = document.querySelectorAll('.menu__item'); 

$('.menu__item').on('click', function () {
    let indexMenuItem = $(this).index();
	$(".card").remove();
	// $("div.card").remove();
	createCard(menu[indexMenuItem]);  		
	// event.preventDefault();
	createCard('shaurma');
	document.querySelector('.active').classList.remove('active');
	elementsMenu[indexMenuItem].classList.add('active');	  
});

$(document).on('click', '.plus', function () {
	let el =  $(this).parent().parent().parent()[0].id;	
   	let a = document.getElementById(el).querySelector('.number__window');
   	a.value++;   	
});


$(document).on('click', '.minus', function () {
   	let numberValue = $(this).parent().find(".number__window");   
   	if (numberValue[0].value > 0) numberValue[0].value--; 
});


let basket = []

$(document).on('click', '.card__add', function () {

	let a =  $(this).parent().parent()[0].id;
	console.log(a);
	debugger;
	let number = document.getElementById(a).querySelector('.number__window');
	let name = document.getElementById(a).querySelector('.card__name'); 
	let price = document.getElementById(a).querySelector(".card__price-value"); 

	let basketItem = {
   		number: number.value,
   		name: name.innerText,
   		price: price.innerText,
   		id: a
	};
	// console.log(basketItem);
	let i = basket.findIndex(item => item.name == basketItem.name);	

	if (i == -1) {
		if (basketItem.number != 0) basket.push(basketItem);
	} else {
		(basketItem.number == 0) ? basket.splice(i,1) :	basket[i] = basketItem;		
	};  
	// console.log(basket);
	changeBasket();
});

function changeBasket() {
	$(".list").find('.list-item').remove();
	document.querySelector('.sum-value').innerText = 0; 

	let parent = document.querySelector('.list');
	
	for (let i = 0; i<basket.length; i++) {
		parent.insertAdjacentHTML('beforeend',
			`<div class="list-item">
	       		<p>${basket[i].name}</p>
	        	<p>${basket[i].number}</p>
	        </div>`
   		);

   		let sum = +document.querySelector('.sum-value').innerText;    		
   		sum = sum + +basket[i].price*+basket[i].number;
   		document.querySelector('.sum-value').innerText = sum; 
	};

	if (basket.length > 0) document.querySelector('.checkout').classList.add('active-checkout')
	else document.querySelector('.checkout').classList.remove('active-checkout');
};

