let btnMenu = document.querySelector('#btn-exp')
let btnRetrair = document.querySelector('#btn-retrair')
let menuLateral = document.querySelector('.menu-lateral')

btnMenu.addEventListener('click', ()=>{
    menuLateral.classList.toggle('expandir')
})

btnRetrair.addEventListener('click', ()=>{
    menuLateral.classList.toggle('expandir')
})