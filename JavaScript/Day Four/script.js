// function declaration
greeting();
function greeting() {
    console.log("Hello World")
}

// login and log out

let userOnline = false;
function updateUserStatus() {
    if (userOnline) {
        userOnline = false 
        console.log("user signed out")
    } else {
        userOnline = true 
        console.log("user signed in")
    }
}

updateUserStatus()
updateUserStatus()
updateUserStatus()

//Parameters and Arguements

function atm(accountNumber, amount) {
    console.log(`account number: ${accountNumber} Amount withdrawn: ${amount}`)
}

atm(212345678, 200);

//nested functions

function quadruple(num) {
    function double(num) {
        return num * 2
    }
    return double(num) *2
}

console.log(quadruple(10));

function squaredDeclaration(num) {
    return num*num;
}

console.log(squaredDeclaration(100));

const sqauredArrow = (num) => {
    return num *num;
}

const sqauredArrowImplicit = (num) => num *num;

console.log(sqauredArrowImplicit(5));

//Anonymous

const squareAnon = function (num) {
    return num * num;
}
console.log(squareAnon(2));

//Task One

function greet(firstName, lastName) {
    console.log(`Good Afternoon ${firstName} ${lastName}, What are your plans for Next Week`)
}
greet ("Kamal", "Tiwari")

//Task 2
// function sortName(string) {
//     const sortName = string.split("").sort().join("")
//     console.log(`string ${sortName}`)
// }
// sortName()

// function sortString(string) {
//     const sortedString = string.split("").sort().join("");
//   console.log(`Sorted string: ${sortedString}`);
// }

// sortString("Hello, world!");

function cashMachine(withdrawal, pin) {
    let storedPin = 0000
    let accountBalance = 2000
    if (pin === storedPin && accountBalance >= withdrawal) {
        console.log("Transaction Approved")
        accountBalance -= withdrawal;
        return "Your transaction was successful. Your new balance is" + accountBalance;

    } else {
        console.log("Transaction, has been declined")
        return "Your PIN is incorrect. Please check your pin and try again. Please note your access will be blocked after 4 incorrect attempts"
    }
    
}

console.log(cashMachine(2000,0000))
console.log(cashMachine(2000,5678))
console.log(cashMachine(2000,4903))