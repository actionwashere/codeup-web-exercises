// create function for multiplying numbers 1 - 10

showMultiplicationTable(1);
// showMultiplicationTable(2);
// showMultiplicationTable(3);
// showMultiplicationTable(4);
// showMultiplicationTable(5);
// showMultiplicationTable(6);
// showMultiplicationTable(7);
// showMultiplicationTable(8);
// showMultiplicationTable(9);
// showMultiplicationTable(10);



function showMultiplicationTable(input) {
    for(let i = 1; i <= 10; i++) {
        console.log(`${input} * ${i} = ${(input * i)}`);
    }
}

