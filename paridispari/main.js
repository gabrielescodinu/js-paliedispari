// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var oddEven = prompt("scegli pari o dispari");
var yourNumber = parseInt(prompt("scegli un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function numeroCasuale() {
  var computerNumber = Math.floor(Math.random()*(5 - 1) + 1);
  return computerNumber;
}

// console.log(numeroCasuale(computerNumber));
var x = numeroCasuale();
// Sommiamo i due numeri
var sum = yourNumber + x;
console.log(x);
console.log(sum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function result (sum) {
  var risultato;
  if (sum % 2 == 0) {
    risultato = "pari";
    return risultato;
  } else {
    risultato = "dispari";
    return risultato;
  }
}

// Dichiariamo chi ha vinto.
console.log(result(sum));

if (result == oddEven) {
  console.log("hai vinto");
} else {
  console.log("hai perso");
}
