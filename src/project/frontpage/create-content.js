"use strict";

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

