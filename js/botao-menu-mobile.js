
const botaoFechar = document.querySelector('.botao-menu-fechar')

const menu = document.querySelector('.cabecalho')

const botaoMenu = document.querySelector('.botao-menu-hamburguer')

botaoMenu.addEventListener('click', function() {
    menu.classList.add('menu-open')
})

botaoFechar.addEventListener('click', function(){
    menu.classList.remove('menu-open')
})