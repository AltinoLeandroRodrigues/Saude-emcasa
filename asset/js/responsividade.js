function  clicar(){
    let Menu = document.getElementById('Menu');
    let btn = document.getElementById('button');
    let botao = document.getElementById('botao');
    let none = document.getElementById('none');

   
    if (Menu.classList.contains('active')) {
        Menu.classList.remove('active')
          
        none.style.opacity="100%";
     
        btn.style.transform="none";
        btn.style.background="white";
        botao.style.transform="none";
        botao.style.background="white";
        botao.style.position="";
        botao.style.margin="5px 0px 0px 0px";
    } else {
        Menu.classList.add('active')
        none.style.opacity="0";
     
        btn.style.transform="rotate(-140deg)";
        btn.style.background="red";
        botao.style.transform="rotate(140deg)";
        botao.style.background="red";
        botao.style.margin="-5px -5px -125px -1px";
        
    }
}

