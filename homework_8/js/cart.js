'use strict';
//Появление информации по клику корзины
let btnBasket = document.getElementById('basket');
let basketList = document.querySelector('.header__basket');
btnBasket.addEventListener('click', function () {
  basketList.classList.toggle('visually-hidden')
});

let basketTotalEl = document.querySelector('.header__basket__total')
let productData = [];
let productCards = document.querySelectorAll('.products__item');
let basketTotalValueEl = document.querySelector('.header__basket-value')
productCards.forEach(function (productCard) {
  let name = productCard.querySelector('.products__item-title').innerText;
  let text = productCard.querySelector('.products__item-text').innerText;
  let price = productCard.querySelector('.products__item-value').innerText;
  productData.push({
    name,
    text,
    price
  });
});


/**
 * Вспомогательный обьект в короторм будет храниться id товара и количество

  id : кол-во

  1 : 5
  2 : 4
*/
let cart = {};

function addProductToObjCart(productId) {
  if (!(productId in cart)) {
    cart[productId] = 1;
  } else {
    cart[productId]++;
  }
}

//Добавление готовыъ товаров из вспомогательного товара уже на страницу
function renderProductToCart(productId) {
  let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
  if (productExist) {
    increaseProductCount(productId);
    recalculateSumForProduct(productId);
  } else {
    renderNewProductInCart(productId);
  }
}

//Отрисовка нового товара в корзине
function renderNewProductInCart(productId) {
  let newProduct = `
      <div class="header__basket__row">
          <div>${productData[productId].name}</div>
          <div>
              <span class="productCount" data-productId="${productId}">1</span> шт.
          </div>
          <div>$${productData[productId].price}</div>
          <div>
              $<span class="productTotalRow" data-productId="${productId}">${productData[productId].price}</span>
          </div>
      </div>
  `;
  basketTotalEl.insertAdjacentHTML("beforebegin", newProduct);
}

//Если один товар выбрали несколько раз идет перерасчет кол-ва
function increaseProductCount(productId) {
  let productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
  productCountEl.textContent++;
}

//Если один товар выбрали несколько раз идет перерасчет суммы
function recalculateSumForProduct(productId) {
  let productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
  let totalPriceForRow = (cart[productId] * productData[productId].price).toFixed(2);
  productTotalRowEl.textContent = totalPriceForRow;
}

//Перерасчет общей суммы товаров в корзине
function TotalBasketSum() {
  let totalSum = 0;
  for (let productId in cart) {
    totalSum += cart[productId] * productData[productId].price;
  }
  basketTotalValueEl.textContent = totalSum.toFixed(2);
}

//Ищем и слушаем события по кнопке конкретного тоавара
function addEventListenersCart() {
  let addToCart = document.querySelectorAll('button[data-productId]');
  addToCart.forEach(function (btn) {
    btn.addEventListener('click', addProduct);
  });
}

//Перехват события на конкретной кнопки
function addProduct(event) {
  let productItem = event.currentTarget.getAttribute('data-productId');
  addProductCart(productItem);
}

//Увеличиваем счетчик над картинкой корзины
let cartCount = document.querySelector('.header__link-value');
function productCountInCart() {
  cartCount.textContent++; //моментальная замена числа
}

//После перехвата события на кнопке используем эти атрибуты
function addProductCart(productId) {
  productCountInCart(); //увеличиваем счетчик над картинкой корзины
  addProductToObjCart(productId);
  renderProductToCart(productId);
  TotalBasketSum();
}

addEventListenersCart();