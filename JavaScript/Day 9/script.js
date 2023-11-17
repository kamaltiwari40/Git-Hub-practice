function greeting() {
    
    console.log('hello');

}

// const setTimeOut (greeting, 10000);

function greeting(name) {
    console.log(`hello ${name}`);
}

// const setTimeOut ( greeting, 1000);

const delay=60*100;
const timeout=setTimeOut(greeting1, delay, 'Kamal');

//clearTimeOut();= clear the setTimeOut();
clearTimeout();

//setInterval() call a function 
setInterval(greeting, 2000);

function currentTime() {
    const date=new Date();
    document.getElementById('p1').innerHTML=data
    // console.log(date.getSeconds());
}

currentTime();
setInterval(currentTime, 1000);
clearInterval();

let count=1;
function welcome() {
    console.log ('Welcome to JavaScript');
    if (count==4) {
        clearInterval(call);
    }
    count++;
}

// const call=setInterval(welcome, 2000);

// Math Object

console.log(Math.floor(Math.random()*100)+1);

// Math Object

// .min()    // used to find lowest value in list of arguments e.g. (0,150,-200,-50,50) would return -200
// .max()    // used to find highest value in list of arguments e.g. (0,150,-200,-50,50) would return 150
// .round()  // returns the value of (x) where x is a number rounded to the nearest integer (whole number) 3.4, 3.5
// .sqrt()   // used to return the square root of a number (x) rounded to the nearest integer (whole number)
// .pow()    // takes (x, y), returns value of x to the power of y (e.g. pow(3,4)= 3 x 3 x 3 x 3 = 81)
//.floor()  // takes (x), rounds value of x down to nearest integer (e.g. 4.7 -> 4 or 8.6 -> 8)
//.random() // returns random number between 0-1
//.ceil()   // takes x, returns value of x rounded up to nearest integer (e.g. 4.4 -> 5)



// has context menu

// Ternary Conditional Operators
// short and concise way of writing conditional statements
//condition ? trueExpression : falseExpression

let marks=80;

if(marks>70)

{
    console.log("Great Marks")

}

else{

    console.log("Study more!")

}


marks>70? console.log("Great Marks T"): console.log("Study more!");

/*

let score=60;
let result;
if(score>60)

{
    result="Excellent";
}

else if(score>50)

{
    result="Good";
}

else
{
    result="Poor result";
}
console.log(result);
*/

let score=40;
let result= score>60? "Excellent": score>50? "Good":"Poor result";
console.log(result);

let score=70;
 score>60? result="Excellent": score>50? result="Good":result="Poor result";
console.log(result);


