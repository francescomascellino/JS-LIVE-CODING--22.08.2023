
/* ALT + SHIFT + A = MULTI LINE COMENT */

/* ---------- */

// Anni: chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

/* 
STRUMENTI
prompt
let
console.console.log();
document.getElementById
 */

// chiedere età

// let userAge = prompt("Inseriaci la tua età");

// recupera arnno corrente come const sottraggo userAge ad anno corrente

// const currentYear = 2023;

// const birthyear = currentYear - userAge

// stampo in console il risultato

// console.log(`ciao, sei nato il ${birthyear}`);

/* ---------- */

/* Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>" */

/* 
STRUMENTI
prompt
document.getElementById
console.log();
*/

// Chiedo il nome utente

const userName = prompt("Inserisci il tuo nome");

// seleziono il tag tramite id in cui inserire il risultato

const greetingsElement = document.getElementById("greetings");

// stampo in console log il risultato

console.log(greetingsElement);

console.log(`Ciao ${userName}`);

// stampo in pagina il risultato

greetingsElement.innerHTML = `Ciao ${userName}`;
