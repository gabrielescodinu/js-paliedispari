// Palidroma
// Chiedere all’utente di inserire una parola
var userWord = prompt("inserisci una parola")

// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(userWord) {
  var reversed = userWord.split("").reverse().join("");
  if (reversed == userWord) {
    return true;
  } else {
    return false;
  }
}
var verifica = palindrome(userWord);
console.log(verifica);
