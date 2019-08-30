"use strict";

function changeBasket(arr) {
	$(".list").find('.list-item').remove();
	document.querySelector('.sum-value').innerText = 0; 

	let parent = document.querySelector('.list');
	
	for (let i = 0; i<arr.length; i++) {
		parent.insertAdjacentHTML('beforeend',
			`<div class="list-item">
	       		<p>${arr[i].name}</p>
	        	<p>${arr[i].number}</p>
	        </div>`
   		);
   		debugger;
   		let sum = +document.querySelector('.sum-value').innerText;    		
   		sum = sum + +arr[i].price*+arr[i].number;
   		document.querySelector('.sum-value').innerText = sum; 
	};

	if (arr.length > 0) document.querySelector('.checkout').classList.add('active-checkout')
	else document.querySelector('.checkout').classList.remove('active-checkout');
};

export default changeBasket;