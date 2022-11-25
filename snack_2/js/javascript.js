/**
 * Inserisci un numero, 
 * se è pari stampa il numero, 
 * se è dispari stampa il numero successivo.
 */

const userNumer = parseInt(prompt('dammi un numero'));

if(userNumer % 2 === 0){
    console.log(userNumer);
}else {
    console.log(userNumer + 1)
}