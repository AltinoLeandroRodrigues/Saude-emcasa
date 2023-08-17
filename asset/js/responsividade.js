function  clicar(){
    let botao = document.getElementById('btn');
    let Menu = document.getElementById('Menu');
    let btn = document.getElementById('fechar')

    if (Menu.classList.contains('active')) {
        Menu.classList.remove('active')
    } else {
        Menu.classList.add('active')
    }
}

