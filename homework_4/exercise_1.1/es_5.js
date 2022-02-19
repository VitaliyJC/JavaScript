'use strict';

function Product(price, name) {
   this.price = price;
   this.name = name;
}

Product.prototype.make25PercentDiscount = function () {
   this.price = this.price * 0.85;
};

const discount = new Product('product1', 100);
discount.make25PercentDiscount();

console.log(discount)