
// ================ FUNCTION DRILLS


// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

function returnTwo(){
    return 2
}

console.log(returnTwo());

// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

function returnName() {
    return "Aharown";
}

console.log(returnName());

// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))

function addThree(num){
    return num + 3;
}

console.log(addThree(5));

// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

function sayString(input){
    return input;
}

console.log(sayString("Aharown"));

// 5) Make a function called sayHowdy() which console.logs the string "Howdy!"
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value

function sayHowdy(){
    return "Howdy!";
}

console.log(sayHowdy());

// ======== CONDITIONALS (switch / ternary / with functions)


// write a function, abbrevToDay, that takes in a three-character abbreviation for the day of the week and returns the complete day of the week
// Example: abbrevToDay('mon') returns 'Monday'

// function abbrevToDay(day){
//     if (day === "mon"){
//         return "Monday";
//     } else if (day === "tue"){
//         return "Tuesday";
//     } else if (day === "wed"){
//         return "Wednesday";
//     } else if (day === "thu"){
//         return "Thursday";
//     } else if (day === "fri"){
//         return "Friday";
//     } else if (day === "sat"){
//         return "Saturday";
//     } else if (day === "sun"){
//         return "Sunday";
//     } else {
//         return `Not a valid input.`;
//     }
// }

function abbrevToDay(day) {
    let newDay;
    switch (day) {
        case "mon" :
            newDay = "Monday";
            return newDay;
            break;
        case "tue" :
            newDay = "Tuesday";
            return newDay;
            break;
        case "wed" :
            newDay = "Wednesday";
            return newDay;
            break;
        case "thu" :
            newDay = "Thursday";
            return newDay;
            break;
        case "fri" :
            newDay = "Friday";
            return newDay;
            break;
        case "sat" :
            newDay = "Saturday";
            return newDay;
            break;
        case "sun" :
            newDay = "Sunday";
            return newDay;
            break;
        default:
            return `Not a valid input.`
    }
}


console.log(abbrevToDay("mon"));
console.log(abbrevToDay("tue"));
console.log(abbrevToDay("wed"));
console.log(abbrevToDay("thu"));
console.log(abbrevToDay("fri"));
console.log(abbrevToDay("sat"));
console.log(abbrevToDay("sun"));