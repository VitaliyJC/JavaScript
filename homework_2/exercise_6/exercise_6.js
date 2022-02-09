'use strict';

let sum = prompt('Введите сумму в рублях, которую хотите положить на счет');

let end = sum.length - 1; // последний символ, из всей длины вычитаем - 1
let endLetter = sum.charAt(end); // находим этот последний символ
let preEnd = sum.length - 2; // ПРЕДпоследний символ, из всей длины вычитаем - 2
let preLetter = sum.charAt(preEnd); // находим этот ПРЕДпоследний символ
let endWord = preLetter + endLetter; // склеиваются два символа

console.log('Последний символ ' + endLetter);
console.log('ПРЕДпоследний символ равен ' + preLetter);
console.log('Последние два символа конкатенируют ' + endWord);

function rub3() {
   let end1 = 'рубль'
   let end2 = 'рубля'
   let end3 = 'рублей'
   if (endWord > 10 && endWord < 20) {
      return end3;
   } else if (endLetter > 1 && endLetter < 5) {
      return end2;
   } else if (endLetter == 1) {
      return end1;
   } else {
      return end3;
   }
}
alert('Ваша сумма в ' + sum + ' ' + rub3() + ' успешно зачислена.');