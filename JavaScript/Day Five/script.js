const exampleObject = { 
    key1: "value1",
    key2: "value2"
}

// Coffee Shop 

const coffeeShop = {
    name: "Costa",
    branchNumber: 250,
    specialOffers: true,
    drinks: [
        "Americano",
        "Latte",
        "Tea"
    ]
}
//data with object - accessed via dot notation.
console.log(coffeeShop)

//Add a new property
coffeeShop.muffin =["blueberry", "Chocolate"];
console.log(coffeeShop);

coffeeShop.breakfastOffer = "free bagel with any coffee";
coffeeShop.lunchOffer = "free coffee with any sandwhich";

let offer = "No Current Offer";
let time = 1000;

if (time < 1100) {
offer = coffeeShop.breakfastOffer;
console.log(offer);
} else if (time < 1500) {
    offer = coffeeShop.lunchOffer;
    console.log(offer);
}

//Methods

coffeeShop.open = function () {
    return "we are open, come on in!"
}

coffeeShop.close = function () {
    return "Sorry, we are closed, please come back tomorrow!"
}
console.log(coffeeShop.open());
console.log(coffeeShop.close());

//Task 1

const person = {
    myName: "Kamal Tiwari",
    myAge: "35",
    city: "New York",

}
//Task 2
const favoriteSongs = ["Jailhouse Rock", "Will", "Bohemian Rhapsody"];
 
console.table(person);
console.log(favoriteSongs);

//Task 3
class Alarm {
    checkAlarm(dayOfWeek) {
        const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const weekendNames = ['Saturday', 'Sunday'];

        // Convert input to title case for case-insensitive comparison
        const formattedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1).toLowerCase();

        if (weekdayNames.includes(formattedDay)) {
            return "Get up at 7:00am";
        } else if (weekendNames.includes(formattedDay)) {
            return "Sleep in it's the weekend";
        } else {
            return "Invalid day of the week";
        }
    }
}

// Example usage:
const myAlarm = new Alarm();
const weekdayResult = myAlarm.checkAlarm("Monday");
const weekendResult = myAlarm.checkAlarm("Saturday");

console.log(weekdayResult);  // Output: Get up at 7:00am
console.log(weekendResult);  // Output: Sleep in it's the weekend


// Nested Objects
const employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Engineer',
    department: {
        name: 'Engineering',
        location: 'Building A',
        supervisor: {
            name: 'Jane Smith',
            position: 'Engineering Manager'
        }
    }
};

console.log(employee.department.supervisor.name);

const library = {
    name: 'Public Library',
    location: 'City Center',
    books: [
        {
            id: 'B001',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            details: {
                genre: 'Fiction',
                year: 1925
            }
        },
        {
            id: 'B002',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            details: {
                genre: 'Fiction',
                year: 1960
            }
        }
    ]
};

console.log(library.books(0).title);
