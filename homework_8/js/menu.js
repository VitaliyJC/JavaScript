let buttonOpen = document.getElementById('header__menu-btn');
let buttonClose = document.getElementById('header__exit-btn');
let navigation = document.getElementById('menu');

// function button 'burger' click
buttonOpen.addEventListener('click', function () {
  navigation.classList.toggle('menu--hidden');
});

// function button 'close' click
buttonClose.addEventListener('click', function () {
  navigation.classList.toggle('menu--hidden');
});