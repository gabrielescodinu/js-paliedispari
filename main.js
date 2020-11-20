// Palidroma
// Chiedere all’utente di inserire una parola
var userWord = prompt("inserisci una parola")
// Creare una funzione per capire se la parola inserita è palindroma
function palindrome(userWord) {
  var reversed = userWord.split("").reverse().join("");
  console.log(reversed);
  if (reversed == userWord) {
    return true;
  } else {
    return false;
  }
}
console.log();
