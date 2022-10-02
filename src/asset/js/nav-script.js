const menuBtn = document.querySelector('#hamburger');
const menu = document.querySelector('.menu');
console.log(menuBtn)
menuBtn.addEventListener('click', () => {
    console.log('hej')
menu.classList.toggle('menu-open');

});

  