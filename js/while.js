
// while loop answer

let i = 2;

while(i <= 65536){
    console.log(`${i}`);
    i += i;
}

console.log("");

// for loop answer

for(let i = 2; i <= 65536; i += i) {
    console.log(`${i}`);
}

console.log("");

// ice cream question

// let allCones = Math.floor(Math.random() * 50) + 50;
// console.log(`The ice cream vendor has ${allCones} left to sale.`);

// let j = 0;
// do {
//     let soldCones = Math.floor(Math.random() * (5 - 1)) + 1;
//     if(allCones === 0){
//         console.log(`Yay! sold them all`);
//         break;
//     }else if(allCones >= soldCones){
//         console.log(`Just sold ${soldCones} cones.`);
//         allCones = allCones - soldCones;
//         console.log(`There are ${allCones} left.`);
//         continue;
//     }else if(allCones < soldCones){
//         console.log(`I can't sell you ${soldCones} because I only have ${allCones} left.`);
//     }
//     j++
// } while (j < 100);

let conesToSell = Math.floor(Math.random() * 50) + 50;
do {
    let conesToBuy = Math.floor(Math.random() * (5 - 1));
    if (conesToBuy <= conesToSell) {
        console.log(`${conesToBuy} cone${conesToBuy === 1? '' : 's'} sold...`);
        conesToSell -= conesToBuy;
    } else {
        console.log(`Cannot sell you ${conesToBuy} cones, I only have ${conesToSell}...`);
        console.log(`${conesToSell} cone${conesToSell === 1? '' : 's'} sold...`);
        conesToSell -= conesToSell;
    }
    if (conesToSell === 0) {
        console.log(`Yay, I sold them all.`);
        break;
    }
} while (conesToSell > 0)


