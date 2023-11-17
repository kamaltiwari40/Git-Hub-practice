// Arrays & Loops:

// Learning Objectives:

// - To understand what an array is
// - To explore how arrays can be used.
// - To make use of array methods.
// - To explore loops and integrate them into your code.

// Array
// let coffeeOrder = [
//     "James - Americano",
//     "Hannah - Frappuccino",
//     "Alex - Latte"
// ];

// console.log(coffeeOrder);

// Remember JavaScript counts from 0
// console.log(coffeeOrder[0]);

// coffeeOrder[1] = "Hannah - Tea";
// console.log(coffeeOrder);

// coffeeOrder[3] = "New Array Item";
// console.table(coffeeOrder);

// Array Property

// When working with Arrays the .length property refers to the number of items in the array
// console.log(coffeeOrder.length);

// Array Methods
// coffeeOrder.push("Christian - Water");
// console.log(coffeeOrder);

// coffeeOrder.pop();
// console.log(coffeeOrder);

// Loops
let colours = [
    "Blue",
    "Green",
    "Red",
    "Yellow",
    "Orange",
    "Black",
    "Purple",
    "Pink",
    "Brown"
];

console.log(colours);

// Increment Operator ++

// Placed before adds 1 then reads the value - Prefix
// Placed after reads the value then adds 1 - Postfix

// let a = 0;
// console.log(++a);
// console.log(a);

// For Loop

for (let i = 0; i < colours.length; i++) {
    // console.log(`Loop counter ${i}`);
    // console.log(colours[i]);
};


let multiplesTwo = []

// for (let i = 1; i < 21; i++) {
//     console.log(`Loop Counter ${i}`)
//     if (i % 2 === 0) {
//         multiplesTwo.push(i)
//     }
// }

// console.log(multiplesTwo)
// console.log(`The numbers between 1 and 20 that are divisible by 2 are: ${multiplesTwo}.`)


// While Loop
// let number = 1;

// while (number < 11) {
//     console.log(number)
//     number++;
// }

// While Loop - Card Game
// let cards = ["Diamond", "Heart", "Club", "Spade"];
// let currentCard = "";

// while (currentCard !== "Spade") {
//     console.log(currentCard)
//     currentCard = cards[Math.floor(Math.random() * 4)];
// }
// console.log(currentCard);
// console.log("Game Over!");

// Do While

// A do while loop will always run at least once
// It runs the loop body, then check the condition


// let num = 10;

// do {
//     console.log(num)
// } while (num < 1);









// Task One

let favoriteFilm = [
    "The One",
    "Luther",
    "Expendables",
    "The Matrix",
    "The Kings Speech"
]

favoriteFilm.push("Collateral", "The Lord of the Rings");

for (let film of favoriteFilm) {
    
console.log(film);
}

//Task Two
const random=Math.round(Math.random()*100);
for (let i= 0; i < 10; i++); {
   let randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber);
}

//Task 3



for (let i = 20; i >= 0; i--) {
     console.log(i)
 }
 //Task 4

 for (let i=0; i<5; i++) {
    let num = Math.floor(Math.random()*50) +1;
    if (num % 5 === 0) { 
        console.log (num +" is divisible by 5");
    } else {
        console.log (num +" is not divisible by 5");
    }
 }

// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// fruits.forEach(function(fruit) {
//     console.log(fruit);
// })