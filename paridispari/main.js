// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var oddEven = prompt("scegli pari o dispari");

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var unoCinque = [1, 2, 3, 4, 5]

function numeroCasuale (unoCinque) {
  return unoCinque[Math.floor(Math.random()*unoCinque.length)];
}
console.log(numeroCasuale(unoCinque));
// Sommiamo i due numeri
var sum = oddEven + unoCinque;
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function result () {
  if (sum % 2 == 0) {
    return true;
  }
}
// Dichiariamo chi ha vinto.
