"use strict";

import './project/test/test.js';
import './project/main.scss';
import createCard from './project/frontpage/create-card.js';

function showContent(i,categor){	
	let elementsMenu = document.querySelectorAll('.menu__link');

	elementsMenu[i].addEventListener("click", ()=>{

		$("div.card").remove();
		createCard(categor);  
		event.preventDefault();

		for (let j = 0; j<elementsMenu.length; j++) {
			elementsMenu[j].style['color'] = 'black';
			elementsMenu[j].style['background-color'] = 'white';		
		};	
		
		elementsMenu[i].style['background-color'] = '#ffcd33';
		elementsMenu[i].style['color'] = 'white';
	});
};

showContent(0,'pizza');
showContent(1,'shaurma');
showContent(2,'sandwiches');
showContent(3,'burgers');
showContent(4, 'chicken');
showContent(5, 'drinks');
showContent(6, 'salads');






