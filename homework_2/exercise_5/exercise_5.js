'use strict';

let a = +prompt('Введите первое целое число');
let b = +prompt('Введите второе целое число');

function addition(a, b) {
   return a + b;
}

function subtraction(a, b) {
   return a - b;
}

function multiplication(a, b) {
   return a * b;
}

function division(a, b) {
   return a / b;
}

/**
 * Запрашиваем два числа потом функция осуществляет арифметическую операцию
 * @param {number} arg1 первое число
 * @param {number} arg2 второе
 * @param {string} operation арифметическая операция
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
   switch (operation) {
      case '+':
         return addition(arg1, arg2);
      case '-':
         return subtraction(arg1, arg2);
      case '*':
         return multiplication(arg1, arg2);
      case '/':
         return division(arg1, arg2);
   }
}

console.log(mathOperation(a, b, '+'));
console.log(mathOperation(a, b, '-'));
console.log(mathOperation(a, b, '*'));
console.log(mathOperation(a, b, '/'));