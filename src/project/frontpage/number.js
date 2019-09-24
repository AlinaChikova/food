"use strict";

$(document).on('click', '.plus', function () {
	let numberValue = $(this).parent().find(".number__window");   
   	 numberValue[0].value++; 	
   		   	
});

$(document).on('click', '.minus', function () {
   	let numberValue = $(this).parent().find(".number__window");   
   	if (numberValue[0].value > 0) numberValue[0].value--; 
});

