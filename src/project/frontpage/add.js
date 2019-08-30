"use strict";

import a from '../basket/a.js';
import changeBasket from '../basket/chandeBasket.js';
import '../basket/chandeBasket.js';

// a();

let basket = [];

$(document).on('click', '.card__add', function () {
	let el =  $(this).parent().parent()[0].id;

	let basketItem = {
   		number: document.getElementById(el).querySelector('.number__window').value,
   		name: document.getElementById(el).querySelector('.card__name').innerText,
   		price: document.getElementById(el).querySelector(".card__price-value").innerText,
   		id: el
	};	
	let i = basket.findIndex(item => item.name == basketItem.name);	
	if (isNaN(basketItem.number)) {
		alert("Введите число!");		
	} else {
		if (i == -1) {
			if (basketItem.number != 0) basket.push(basketItem);
		} else {
			(basketItem.number == 0) ? basket.splice(i,1) :	basket[i] = basketItem;		
		}; 
	};
	
	changeBasket(basket);
});

