var altura=0;
var largura=0;
var contCriado = 0;
var contPego = 0;
var interval
var time = 10;

function ajustarTamaho(){
    altura = window.innerHeight;
    largura=window.innerWidth;

}   
function gerarCemMosquitos() {
    for (let index = 0; index < 100; index++) {
        gerarMosquito();
    }
}
function gerarMosquito(){
    contCriado++;
    document.getElementById('mos').textContent = 'Value: '+time;
    ajustarTamaho()
    // define tamanho de 50 a 100
    var tamanho = Math.random()*50+50;
    //para posicionar o elementos criados sera preciso pegar o tamaho da janela menos o tamanho do elemento
    var alturaAle = (altura-tamanho)*Math.random();
    var larguraAle = (largura-tamanho)*Math.random();

    
    var imgGerada = document.createElement('img');
    imgGerada.src = "imagens/mosca.png";
    imgGerada.width =  tamanho;
    imgGerada.height =  tamanho;

    imgGerada.style.position = 'absolute';
    imgGerada.style.top = alturaAle+'px';
    imgGerada.style.left = larguraAle+'px';
    
var positionX = Math.random() > 0.5 ? 1 : -1;


imgGerada.style.transform =  'scaleX('+positionX+')';

    var botao = document.createElement('button');
    botao.appendChild(imgGerada);
    botao.addEventListener('click', ()=> {
        botao.addEventListener('click', function() {
            document.body.removeChild(botao);
            time+=2;
            contPego++;
            document.getElementById('mos').textContent = 'Value: '+time;
            document.getElementById('qtdPego').textContent = 'qtdPego: '+contPego;
            document.getElementById('qtdFeito').textContent = 'qtdFeito: '+contCriado;
            if (contPego===contCriado) {
                document.getElementById('mos').textContent = 'Voce ganhou!!!';
            stopGerar()
            } 
        })});

    document.body.appendChild(botao);
}

 function gerarMomentaneo(){
    interval = setInterval(()=>{
        gerarMosquito();
        
    },1500)

    function time(){
        contTemp = setInterval()
        
    }
 }
 function  stopGerar (){
    clearInterval(interval)
    time=10;
    document.getElementById('mos').textContent = 'Value: '+time;
 }
 stopGerar

function removerTodosMosquitos() {
    var botoes = document.querySelectorAll('button');
    
    for (var i = 0; i < botoes.length; i++) {
        document.body.removeChild(botoes[i]);
    }
}




