"use strict";
const data = require('../../data.json');

function createCard(categor) {
	// let card = document.createElement('div');	
	let parent = document.getElementById('frontpage');

	for (let i = 0; i < data.menu.length; i++) {
		if (data.menu[i].category == categor) {
			let imageSrc = '';
			if (data.markets[ data.menu[i].market] !== undefined) {
				imageSrc = data.markets[ data.menu[i].market].image;
			}
			parent.insertAdjacentHTML('beforeend',
				`<div class="card" id="${data.menu[i].category}-${i}">
					<div class="market">
	                        <img class="market_image" src="${imageSrc}">
	                </div>
	                <div class="product">
	                    <img class="product__image" src=" ${data.menu[i].image}" alt="image">
	                </div> 
	                <div class="card__name">${data.menu[i].name}</div>
	                <div class="card__description">
	                    <a href="">${data.menu[i].description}</a>
	                </div>
	                <div class="card__price">Цена: <span class="card__price-value">${data.menu[i].price}</span> руб.</div>
	                <div class="number">
	                    <p>количество</p>
	                    <div class="number__wrap">
	                        <button class="number__button minus"><i class="fas fa-minus"></i></button>
	                        <input class="number__window" value="0">
	                        <button class="number__button plus"><i class="fas fa-plus"></i></button>
	                    </div>
	                </div>
	                <div class="add-wrap">
	                    <button class="card__add">в корзину</button>
	                </div>
                </div>`
            );				
		};
	};
	
};

export default createCard;



// createCard("burgers");
//exports.createCard = createCard;


