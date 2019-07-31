let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("p");
let naoSou = document.querySelector("a");


function acessar(){
    localStorage.removeItem('nome', caixaTexto.value);
    h3.innerHTML =`seja bem vindo ${localStorage.nome}`;
    naoSou.innerHTML = `nao é ${localStorage}`;
    caixaTexto.style.display = "none"
    botao.style.display = "none"       
}

function limpa(){
    localStorage.removeItem('none');  
}

botao.onclick = acessar;

if(localStorage.nome){
    caixaTexto.style.display = "none"
    botao.style.display = "none"
    h3.innerHTML = `seja bem vinda ${localStorage}`;
    naoSou.innerHTML = `ǹao é ${localStorage}`;
}

else{
    localStorage.setItem(`none`,caixaTexto);
    texto.style.display = "none"
}

naoSou.onclick = limpar;



