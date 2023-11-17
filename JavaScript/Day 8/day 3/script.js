//Date 

// Date and Time in JavaScript

//Date

// const date=new Date();//return current data and time





// We can place 7 numbers inside the brackets (2022, 3(Apr), 13, 10, 30, 35, 0),

//new Date(year,month,day,hours,minutes,seconds,ms)

// BUT must hav20e at least 2 (Year, Month)

// This is the order( year, month, day(number of), hour, minute, second, millisecond)

const date2=new Date(2023, 12, 11,5,30,40,60);
console.log(date2);

//toLocalString() =>covert date to the local string
const localDate=date.toLocaleString('default',{month:'narrow'});
const dayName=date.toLocaleString('default',{weekday:'narrow'});
console.log(localDate);
console.log(dayName)
const differentZone=date.toLocaleString('en-US',{timeZone:'germany/berlin'})
console.log(differentZone);

console.log(date.getFullYear());
console.log(date.getMonth());

//set interval

