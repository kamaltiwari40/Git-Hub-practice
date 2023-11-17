// Date and Time in JavaScript
//Date
const date=new Date();//return current data and time
console.log(date);

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
const differentZone=date.toLocaleString('en-US',{timeZone:'Asia/Kolkata', year:'numeric', month:'long', weekday:'long',day:'numeric',hour:'numeric'})
console.log(differentZone);
const newDate=Date.now();
console.log(newDate);

console.log(date.getFullYear());//2023
console.log(date.getMonth());//10
console.log(date.getDate());//15
console.log(date.getDay());//3
console.log(date.getHours());//16
console.log(date.getMinutes());
console.log(date.getTime());




