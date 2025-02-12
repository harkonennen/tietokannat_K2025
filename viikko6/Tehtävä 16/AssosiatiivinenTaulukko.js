// Viikko 6 Tehtävä 16

// 1.Array
const bookArray = [
    {
        id_book: 1,
        name: "Everything You Ever Wanted to Know",
        author: "Upton",
        isbn: "082305649",
    },
    {
        id_book: 2,
        name: "Photography",
        author: "Vilppu",
        isbn: "205711499"
    }
    ,
    {
        id_book: 3,
        name: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        isbn: "0596517742"
    }
];

// 2.Tietotyypin tulostus
console.log("Tietotyyppi: \n ", typeof bookArray);

// 3. bookArrayn sisältö
console.log("\n Sisältö: \n", bookArray);

// 4. Ensimmäinen rivi
console.log("\n Ensimmäinen rivi:\n", bookArray[0]);

// 5.Ensimmäisen kirjan nimi
console.log("\n Ensimmäisen kirjan nimi: \n", bookArray[0].name);

// 6. Rivien määrä
console.log("\n Rivien määrä: ", bookArray.length)

// 7. Kirjojen nimet
console.log("\n Kirjojen nimet: \n");
bookArray.forEach(function(kirja) {
    console.log(kirja.name);
});

// Selkeämpi vaihtoehto:  bookArray.forEach(kirja => console.log(kirja.name));

