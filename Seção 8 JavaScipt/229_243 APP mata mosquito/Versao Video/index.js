var altura=0;
var largura=0;
var contCriado = 0;
var contPego = 0;


function ajustarTamaho(){
    altura = window.innerHeight;
    largura=window.innerWidth;

}   
function gerarCemMosquitos() {
    for (let index = 0; index < 10; index++) {
        gerarMosquito();
    }
}

function gerarMosquito(){
    ajustarTamaho()
    // define tamanho de 50 a 100
    var tamanho = Math.ceil(Math.random()*50)+50;
    //para posicionar o elementos criados sera preciso pegar o tamaho da janela menos o tamanho do elemento
    var alturaAle = (altura-tamanho)*Math.random();
    var larguraAle = (largura-tamanho)*Math.random();

    
    var imgGerada = document.createElement('img');
    imgGerada.src = "imagens/mosca.png";
    imgGerada.width , imgGerada.height =  tamanho;
    imgGerada.style.position = 'absolute';
    imgGerada.style.top = alturaAle+'px';
    imgGerada.style.left = larguraAle+'px';
    
    var botao = document.createElement('button');
    botao.appendChild(imgGerada);
    botao.addEventListener('click', ()=> {
        botao.addEventListener('click', function() {
            document.body.removeChild(botao);
        })});

    document.body.appendChild(botao);
}

function removerTodosMosquitos() {
    var botoes = document.querySelectorAll('button');
    
    for (var i = 0; i < botoes.length; i++) {
        document.body.removeChild(botoes[i]);
    }
}




