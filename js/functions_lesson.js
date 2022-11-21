(function () {

    // let message = myFunction("Aharown");
    // console.log(message);

    let person1 = "Billy Bob Thorton Joe Bob Junior Twice Removed",
        person2 = "Bob";
    fight(person1, person2);

    // let x = isEven(5447373784849);
    // console.log(x);
    // let y = isEven(38387282352);
    // console.log(y);
    // let z = isEven("Hi");
    // console.log(z);
    // let iBreakThings = isEven(true);
    // console.log(iBreakThings);
    //
    // function myFunction(name){
    //     return "Thank you, " + name + ". You have ran my function!";
    //
    // }

    function fight(person1, person2){
        console.log(person1 + " punched " + person2 + " right in the kisser.");

    }

    function isEven(num){
        // GET THE PIECES OF THE PUZZLE!!!!!
        // put the pieces of the puzzle into variables.
        let number = num
        let answer = (number % 2 == 0)

        // Final, return the answer.
        return answer;

    }

})();
