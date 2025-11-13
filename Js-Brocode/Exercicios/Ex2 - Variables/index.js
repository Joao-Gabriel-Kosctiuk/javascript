//1. declaration  let x;
//2. assignment   x = 100;

let age = 25;
let forsale = true;

console.log(`Is this car for sale: ${forsale}`)
console.log(`Your are ${age} years old`);

let title = "header";
let paragraph = "paragraph";

document.getElementById("h1").textContent = `It's a ${title}`;
document.getElementById("p").textContent = `It's a ${paragraph}`;

console.log(typeof title);
console.log(typeof paragraph);
console.log(typeof forsale);
console.log(typeof age);