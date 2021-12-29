const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const reversedIngrs = ingredients.reverse();

let ingr = document.querySelector("#ingredients");

for (let i = 0; i < reversedIngrs.length; i++) {
  let newIngr = document.createElement("li");
  newIngr.textContent = reversedIngrs[i];
  ingr.prepend(newIngr);
}