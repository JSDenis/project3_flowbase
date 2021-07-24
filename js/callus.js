var modalForm = document.querySelector('.house__gallery-right');
var btnCallBack = document.querySelector('.callback');
var close = document.querySelector('#close_form');

function openModal(){
    close.style.display = 'block';
    modalForm.classList.add('show__form');
}

function closeModal(){
    close.style.display = 'none';
    modalForm.classList.remove('show__form');
}


btnCallBack.onclick =  openModal;
close.onclick = closeModal;