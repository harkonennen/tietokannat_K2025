// Viikko 6 Tehtävä 17

// Object person
const person = {

    // Kirja array
    bookArray: [
        {
            // Kirja 1
            id_book: 1,
            name: "Everything You Ever Wanted to Know",
            author: "Upton",
            isbn: "082305649",
        },
        {
            // Kirja 2
            id_book: 2,
            name: "Photography",
            author: "Vilppu",
            isbn: "205711499"
        },
        {
            // Kirja 3
            id_book: 3,
            name: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            isbn: "0596517742"
        }],

    // Tulostaa kaikki kirjat
    getAllBooks: function () {
        console.log("\n All Books:\n", this.bookArray);
    },

    //Hakee tietyn kirjan tiedot
    getOneBook: function (x) {
        console.log("\n Book Info:\n", this.bookArray[x - 1]);
    },

    //Lisää arrayhin kirjan
    addBook: function (id_book, name, author, isbn) {
        // Luo kirja jolla annetut tiedot
        const newBook = { id_book, name, author, isbn };
        // Pushaa kirjan tiedot arrayhyn
        this.bookArray.push(newBook);
        // Tulosta lisätyn kirjna tiedot
        console.log("\nAdded Book: \n", this.bookArray[id_book - 1]);
    }
}

person.getAllBooks();
person.getOneBook(1);
person.addBook(4, "Clean Code", "Robert C. Martin", "0132350882");

