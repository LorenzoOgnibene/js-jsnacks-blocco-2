/**
 * Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
 *  gli elementi della lista individualmente con un ciclo while.
 */


const itemList = [
    'banane',
    'cetrioli',
    'zucchine',
    'insalata',
    'biscotti',
    'pasta',
    'latte',
    'pane',
    'panna'
]

const ulElement = document.querySelector('ul');
let i = 0;

while(i < itemList.length){
    ulElement.innerHTML += `<li>${itemList[i]}</li>`
    i++;
}