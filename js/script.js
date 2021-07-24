/* document.querySelector('#item1').onclick = function(){
    document.querySelector('#text1').classList.toggle('hide');
} */

var burger = document.querySelector('#burger');
var menuList = document.querySelector('.menu');
var btnClose = document.querySelector('#close');

function openBurger(){
    burger.style.display = 'none';
    menuList.classList.add('show');
    btnClose.style.display = 'block';
}

function closeBurger(){
    burger.style.display = 'block';
    menuList.classList.remove('show');
    btnClose.style.display = 'none';
}

burger.onclick = openBurger;
btnClose.onclick = closeBurger;