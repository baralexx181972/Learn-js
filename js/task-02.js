const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const markup = ingredients.map(ingredient => `<li class='item'>${ingredient}</li>`).join('');
console.log(markup);
list.innerHTML = markup;
// for (let i of ingredients) {
//   const vegetables = document.createElement('li');
//   vegetables.className = 'item';
//   console.log(vegetables);
//   vegetables.textContent = ingredients[i];
//   console.log(vegetables);
// }

// const heading = document.createElement('li');
// console.log(heading); // <h1></h1>

// heading.textContent = ingredients[1];
// console.log(heading);
