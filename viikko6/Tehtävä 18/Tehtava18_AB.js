// Viikko 6 Tehtävä 18 a ja b

// A
const prompt = require('prompt-sync')();

//functio joka vertaa kahta numeroa ja tulostaa isomman

function compare(number1, number2){
    if(number1 > number2){
        console.log("Bigger number is: ", number1);
    }else console.log("Bigger number is: ", number2);
}


let number1 = parseInt(prompt("Give a number: "));
let number2 = parseInt(prompt("Give a second number: "));

compare(number1,number2);

// B

// Kysytään käyttäjältä sanaa
let word = prompt("Anna sana: ");

//Sanasta tehdään array(split), joiden järjestys käännetään (reverse) ja tehdään takaisin arrayksi (join)
let reverseWord = word.split('').reverse().join('');

//tulosta
console.log("Reversed word: ", reverseWord);

if(reverseWord == word){
    console.log("Your word is a palindrome!");
} else console.log("Your word is not a palindrome.");
