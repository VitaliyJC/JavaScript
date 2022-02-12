'use strict';

const products = [
   {
      id: 3,
      price: 200,
   },
   {
      id: 4,
      price: 900,
   },
   {
      id: 1,
      price: 1000,
   },
];

const sale = 15
const coef = 1 - 0.15

products.forEach(array => console.log('Стоимость товара ' + array.id + ' с учетом скидки ' + sale + '% ' + ' - ' + array.price * coef));