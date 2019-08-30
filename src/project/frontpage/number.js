"use strict";

$(document).on('click', '.plus', function () {
	let el =  $(this).parent().parent().parent()[0].id;	
   	document.getElementById(el).querySelector('.number__window').value++;   	   	
});

$(document).on('click', '.minus', function () {
   	let numberValue = $(this).parent().find(".number__window");   
   	if (numberValue[0].value > 0) numberValue[0].value--; 
});