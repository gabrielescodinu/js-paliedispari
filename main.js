// Palidroma
// Chiedere all’utente di inserire una parola
var userWord = prompt("inserisci una parola")
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
function isEven () {
  if (userWord % 2 == 0) {
    return true;
  }
}

if (isEven(userWord)){
  console.log("pari");
} else {
  console.log("dispari");
}
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var oddEven = prompt("scegli pari o dispari");
var unoCinque = number(prompt("scegli un numero da uno a cinque"));

// Sommiamo i due numeri
var sum = oddEven + unoCinque;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function result () {
  if (sum % 2 == 0) {
    return true;
  }
}
// Dichiariamo chi ha vinto.
