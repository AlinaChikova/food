const data = require('../../data.json');
// alert(data.menu[1].name);

// alert(data.menu.length);

  // let div = document.createElement('div');
  // div.innerHTML = `aaaaa${data.menu[1].name}aaaaa`;
  // var parent = document.getElementById('frontpage');	
  // parent.append(div);



function createCard() {	
	let div = document.createElement('div');
	let parent = document.getElementById('frontpage');	
	div.className = "card";
	for (let i=0; i<data.menu.length; i++) {
		if (data.menu[i].category="salads") {
			div.innerHTML =`<div class="market">
                        <img class="market_image" src="./images/markets/subway_logo.png" alt="market">
                    </div>
                    <div class="product">
                        <img class="product__image" src=" ${data.menu[i].image}" alt="image">
                    </div> 
                    <div class="card__name">${data.menu[i].name}</div>
                    <div class="card__description">
                        <a href="">${data.menu[i].description}</a>
                    </div>
                    <div class="card__price">Цена: ${data.menu[i].price} руб.</div>
                    <div class="number">
                        <p>количество</p>
                        <div class="number__wrap">
                            <button class="number__button minus">-</button>
                            <div class="number__window">1</div>
                            <button class="number__button plus">+</button>
                        </div>
                    </div>
                    <div class="add-wrap">
                        <button class="card__add">в корзину</button>
                    </div>`     ;

			parent.appendChild(div);
			alert(data.menu[i].category);
		}
	}	
	
};
