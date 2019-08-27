"use strict";

import './project/test/test.js';
import './project/main.scss';
import createCard from './project/frontpage/create-card.js';

// showContent(1,"shaurma");

// function showContent(i,categor){	
// 	let elementsMenu = document.querySelectorAll('.menu__item');

// 	elementsMenu[i].addEventListener("click", ()=>{
// 		$("div.card").remove();
// 		createCard(categor);  		
// 		event.preventDefault();
	
// 		for (let elem of elementsMenu) {
// 			elem.classList.remove('active');
// 		};

// 		elementsMenu[i].classList.add('active');	
// 	});
// };

// let menu = ['pizza','shaurma','sandwiches','burgers','chicken','drinks','salads'];

// for (let i = 0; i< menu.length; i++) {
// 	 showContent(i,menu[i]);
// };

createCard('pizza');
const menu = ['pizza','shaurma','sandwiches','burgers','chicken','salads','drinks'];   
const elementsMenu = document.querySelectorAll('.menu__item'); 

$('.menu__item').on('click', function () {
    let indexMenuItem = $(this).index();

	$("div.card").remove();
	createCard(menu[indexMenuItem]);  		
	event.preventDefault();

	document.querySelector('.active').classList.remove('active');
	elementsMenu[indexMenuItem].classList.add('active');	  
});


