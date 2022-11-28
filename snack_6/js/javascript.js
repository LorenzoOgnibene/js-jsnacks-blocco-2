// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sum = 0;

for (let i = 0; i < numbers.length; i++){
    if( numbers.indexOf(i) % 2 === 1){
        sum += numbers[i];
    }
}

console.log(sum);