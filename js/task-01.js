const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach((element) => {
    console.log("Category:", element.firstElementChild.innerText);
    console.log("Elements:", element.lastElementChild.children.length);
})




// const items = document.querySelectorAll(".item");
// const titles = document.querySelectorAll(".item h2");
// const elements = document.querySelectorAll(".item li");
// console.log(elements.children);

// let titlesArr = [];

// for (let i = 0; i < titles.length; i++) {
//     titlesArr.push(`\nCategory: ${titles[i].textContent}\nElements: ${elements.length}`);
// }

// console.log(`Number of categories: ${items.length}`);

// console.log(titlesArr.join(" "));
