'use strict';

//пример 1
//Обьявив переменные мы после присваиваем значение для "с" равное "а+1" (использовади префикс) а=2
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

//пример 2
//Используя постпрефикс получаем значение 1, но в дальнейшем в переменную записывается значение "b+1"
d = b++;
alert(d); //ответ: 1

//пример 3
//к двум прибавляем три, т.к. в первом примере а=2, то здесь еще раз "а" увеличиваем на 1 итого 2 + 3
c = 2 + ++a;
alert(c); //ответ: 5

//пример 4
//к двум прибавляем 2, т.к. во втором примере b=2, то здесь еще раз "b" увеличиваем на 1 итого 2 + 2
d = 2 + b++;
alert(d); //ответ: 4

//переменную "a" дважды увеличивали на 1 использую префикс
alert(a); //3

//переменную "b" дважды увеличивали на 1 использую префикс
alert(b); //3