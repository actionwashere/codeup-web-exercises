// create function for multiplying numbers 1 - 10

// showMultiplicationTable(1);
// showMultiplicationTable(2);
// showMultiplicationTable(3);
// showMultiplicationTable(4);
// showMultiplicationTable(5);
// showMultiplicationTable(6);
showMultiplicationTable(7);
// showMultiplicationTable(8);
// showMultiplicationTable(9);
// showMultiplicationTable(10);



function showMultiplicationTable(input) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${input} * ${i} = ${(input * i)}`);
    }
}


getRandomInt(20, 200);


function getRandomInt(min, max) {
    for(let i = 0; i < 10; i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let num = (Math.floor(Math.random() * (max - min) + min));
        console.log(`The Number ${num} is ${isEven(num)}`);

    }
}

function isEven(num) {
    return (num % 2 == 0) ? "even" : "odd";
}


// function isEven(num) {
//     if (num % 2 == 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }


