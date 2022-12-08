(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName: 'Aharown',
        lastName: 'Jackson'
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function(){
        return `Hello from ${person.firstName} ${person.lastName}!`;
    }


    // function sayHello(name){
    //     return `Hello from ${name}!`;
    // }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        if(shopper.amount > 200){
            console.log(`${shopper.name} spent $${shopper.amount}, they get the discount of 12%, so they pay $${(shopper.amount * .88).toFixed(2)}.`);
        } else {
            console.log(`${shopper.name} spent $${shopper.amount}, they didn't spent enough to receive a discount.`);
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    const books = [
        {
            title: `North and South: Trilogy`,
            author: {
                firstName: `John`,
                lastName: `Jakes`
            },
            amountOfBooks: 3
        },
        {
            title: `Harry Potter Series`,
            author: {
                firstName: `J.K.`,
                lastName: `Rowling`
            },
            amountOfBooks: 7
        },
        {
            title: `California Gold`,
            author: {
                firstName: `John`,
                lastName: `Jakes`
            },
            amountOfBooks: 1
        },
        {
            title: `Sackett Family Chronicles`,
            author: {
                firstName: `Louis`,
                lastName: `L'Amour`
            },
            amountOfBooks: 19
        },
        {
            title: `Isaac Bell Adventures`,
            author: {
                firstName: `Clive`,
                lastName: `Custer`
            },
            amountOfBooks: 13
        },
        {
            title: `Warriors`,
            author: {
                firstName: `Erin`,
                lastName: `Hunter`
            },
            amountOfBooks: 14
        }

    ]




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    let bookNum = 0;
    books.forEach(function (book){
        console.log(`Book # ${bookNum += 1}
        Title: ${book.title}
        Author: ${book.author.firstName} ${book.author.lastName}
        Amount of books in series: ${book.amountOfBooks}`)
    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author, amount){
        let authorArr = author.split(" ");
        let bookObject = {
            title: title,
            author: {
                firstName: authorArr[0],
                lastName: authorArr[1]
            },
            amountOfBooks: amount
        };
        return bookObject
    }



    console.log(createBook(`Narnia Series`, `C.S. Lewis`, 8));

    let booksNew = [
        createBook(`North and South: Trilogy`, `John Jakes`, 3),
        createBook(`Harry Potter Series`, `J.K. Rowling`, 7),
        createBook(`Sackett Family Chronicles`, `Louis L'Amour`, 19),
    ];

    console.log(booksNew);


    function showBookInfo(book){
        return `Title: ${book.title}
        Author: ${book.author.firstName} ${book.author.lastName}
        Amount of books in series: ${book.amountOfBooks}`;
    }

    console.log("");

    console.log(showBookInfo(books[2]));

})();