// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var oddEven = prompt("scegli pari o dispari");
var yourNumber = number(prompt("scegli un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var computerNumber = [1, 2, 3, 4, 5]

function numeroCasuale (computerNumber) {
  return computerNumber[Math.floor(Math.random()*computerNumber.length)];
}

console.log(numeroCasuale(computerNumber));

// Sommiamo i due numeri
var sum = yourNumber + computerNumber;

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function result () {
  if (sum % 2 == 0) {
    return true;
  }
}

// Dichiariamo chi ha vinto.
