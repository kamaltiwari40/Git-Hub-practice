let subject="Java \\\" Script";
let subject2='javaScript';
let subject3=`JavaScript ${subject2} Continue string`;
const date=new Date();
console.log('Today date is', date.getDate(), ' Rest of the String');

//slice(startIndex, endIndex),startIndex - inclusive , endIndex is exlusive
console.log(subject2.slice(-5,-1));
// const firstLetter=subject2.slice(0,1)
// console.log(`${firstLetter.toUpperCase()}${subject2.slice(1)}`);

//substring
console.log(subject2.substring(-2));
console.log(subject2.substr(3,6));
console.log(subject2.replaceAll('J', 'Z'));
console.log(subject2.trim);

// remove extra space from the middle of the string

// let subject3=`JavaScript      ${subject2}    Continue string`;
// console.log(subject2.replaceAll(/\s+getComputedStyle,''));

// JSON - JavaScript Object Notation - used for API's
// JSON JavaScript Object Notation ----------------
let jsonObj=`{"firstName":"John", "lastName":"Math","Education":true}`;
let jsObj={firstName:"John", lastName:"Math",Education:true};

//JSON.parse()=> will convert JSON string into the javascript object

script=JSON.parse(jsonObj)
console.log(script);

//JSON.stringify() //convert a javaScript object back to JSON string

let jasonData=JSON.stringify(script);

console.log(jasonData);

// let jsonObj ={"firstName":"John", "lastName":}
// let jsobj={firstName:"John", lastName: }

// let jsonObj ={`"firstName": "John", lastName: "Math", Education: true`}
// const numbers = [2, 4, 7, 32, 7, 9, 8, 10, 4];

let numbers=[2,4,7,32,7,9,8,10,4];

for (let i=0; i < numbers.length-1; i++) {
    if (numbers [i] < %2=0) {
    console.log (numbers[i]);
}

}

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

function maximumValue() {
let maxValue = [0];
for (let i=0; i < numbers.length; i++) {
    if (numbers[i] > maxValue)
    {
        maxValue=number[i]
    }
}
console.log(maxValue);
}
maximumValue();