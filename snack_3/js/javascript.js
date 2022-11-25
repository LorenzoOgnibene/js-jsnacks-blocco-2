//Calcola la somma dei primi 10 numeri di un array.
//Calcola la somma e la media dei primi 10 numeri di un array.


const numbers = [2, 3, 55, 564, 642, 264, 64, 4, 24, 78, 43, 34, 21, 23, 56, 78, 90];
let sum = 0;
let media = 0;
for(i = 0; i < 10; i++){
    sum += numbers[i];
}
media = sum / 10;

console.log(sum);
console.log(media);
