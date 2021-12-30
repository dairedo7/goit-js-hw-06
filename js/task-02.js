const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingr = document.querySelector("#ingredients");

let ingrArr = [];

let sortedArr = ingredients.map((element) => {
  let newIngr = document.createElement("li");
  newIngr.textContent = element;

  return ingrArr.push(newIngr);
})

ingr.append(...ingrArr);

// const reversedIngrs = ingredients.reverse();
// for (let i = 0; i < reversedIngrs.length; i++) {
//   let newIngr = document.createElement("li");
//   newIngr.textContent = reversedIngrs[i];
//   ingr.prepend(newIngr);
// }