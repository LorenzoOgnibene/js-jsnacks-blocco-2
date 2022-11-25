/**
 *  Crea un array vuoto.
    Chiedi per 6 volte all'utente di inserire un numero,
    se è dispari inseriscilo nell'array.
 */


const array = [];


for(i = 0; i < 6; i++){
    const userNumber = parseInt(prompt('inserisci un numero'));
    console.log(userNumber);
    if(userNumber % 2 === 1){
        array.push(userNumber);
    }
}
console.log(array);