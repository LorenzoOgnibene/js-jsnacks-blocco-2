/**
 *
 * Generatore di persone fittizie casuali:
 * Il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
 * da queste vuole generare una falsa lista di invitati con nome e cognome.
 *
 */

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];
const fakePeople = [];


let randomName;

for ( i = 0; i < names.length; i++){
    randomName = names[Math.floor(Math.random() * names.length)] + " " + lastnames[Math.floor(Math.random() * names.length)] 
    fakePeople.push(randomName);
}

console.log(fakePeople);

