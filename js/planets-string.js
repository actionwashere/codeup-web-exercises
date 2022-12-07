(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log(planetsString);
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    let planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let planetsBrString = planetsArray.join('<br>');
    console.log(planetsBrString);
    //
    // its useful when added to an html document and you want the items of the string to run horizontally down the page like:
    //     Mercury
    //     Venus
    //     Earth
    //     Mars
    //     Jupiter
    //     Saturn
    //     Uranus
    //     Neptune
    //

    let planetsUlString = `<ul><li>${planetsArray[0]}</li><li>${planetsArray[1]}</li><li>${planetsArray[2]}</li><li>${planetsArray[3]}</li>
    <li>${planetsArray[4]}</li><li>${planetsArray[5]}</li><li>${planetsArray[6]}</li><li>${planetsArray[7]}</li></ul>`


    console.log(planetsUlString);
    document.write(planetsUlString);

})();