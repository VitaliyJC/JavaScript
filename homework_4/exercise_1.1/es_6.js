'use strict';

class Product {
   constructor(price, name) {
      this.price = price;
      this.name = name;
   }

   make25PercentDiscount() {
      this.price = this.price * 0.85;
   }
}

const discount = new Product('product1', 100);
discount.make25PercentDiscount();

console.log(discount)