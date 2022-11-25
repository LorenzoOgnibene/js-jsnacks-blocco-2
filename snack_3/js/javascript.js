//Calcola la somma dei primi 10 numeri di un array.


const numbers = [2, 3, 55, 564, 642, 264, 64, 4, 24, 78];
let sum = 0;

for(i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);
