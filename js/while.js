
// i = 2;
//
// while(i <= 65536){
//     console.log(`${i}`);
//     i += i;
// }

// for(let i = 2; i <= 65536; i += i) {
//     console.log(`${i}`);
// }

// ice cream question
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
//
// var soldCones = Math.floor(Math.random() * 5) + 1;
// var i = allCones;
//
// do {
//     if(i = )
//     console.log(soldCones);
//     } while (allCones);
//

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(`The vendor has ${allCones} cones left to sell`);


//
// var cusAmountA = (allCones / soldCones);
// var cusAmountB = (soldCones - (cusAmountA % 1).toFixed(1));
// console.log(`THIS SHOULD BE A DECIMAL!!! : ${cusAmountB}`);
//
// console.log(`There were ${cusAmountA} customers`);
// console.log(cusAmountA);
//
// do {
//     let soldCones = Math.floor(Math.random() * 5) + 1;
//     allCones = allCones - soldCones;
//     console.log(`${soldCones} cones sold...`);
//     console.log(`i have ${allCones} cones left`);
// } while (allCones >= 0);

var allCones = Math.floor(Math.random() * 50) + 50;
console.log("all cones are " + allCones);

var i = 0;
do {
    var soldCones = Math.floor(Math.random() * (5 - 1)) + 1;
    if(allCones === 0){
        console.log("Yay! sold them all");
        break;
    }else if(allCones >= soldCones){
        console.log("Just sold " + soldCones + " cones.");
        allCones = allCones - soldCones;
        console.log("remaining cones " + allCones);
        continue;
    }else if(allCones < soldCones){
        console.log("cannot sell you! I have " + allCones + " because you want " + soldCones);
    }
    i++
} while (i < 100);

// var remCones = (cusAmount.slice(1));
// console.log(`remainder cones ${remCones}`);
// function salesDay(input1, input2) {
//     if (allCones % soldCones !== 0){
//         console.log(`Cannot sell you ${soldCones}, I only have ...`);
//     } else if(allCones % soldCones === 0){
//         console.log(`${soldCones} cones sold..`);
//         console.log(`Yay! I sold them all!`);
//     } else {
//         break;
//     }
// } while (allCones === soldCones);



