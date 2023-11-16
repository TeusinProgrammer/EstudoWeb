var altura=0;
var largura=0;
var contCriado = 0;
var contPego = 0;
var interval
var timeValue = 10;
var timeCreate = 1500;

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
    
    document.getElementById('tempo').textContent = 'tempo: '+timeValue;
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

contCriado++;
            document.getElementById('qtdFeito').textContent = 'qtdFeito: '+contCriado;
    var botao = document.createElement('button');
    botao.appendChild(imgGerada);
    botao.addEventListener('click', ()=> {
        botao.addEventListener('click', function() {
            document.body.removeChild(botao);
            timeValue+=1;
            contPego++;
            document.getElementById('tempo').textContent = 'tempo: '+timeValue;
            document.getElementById('qtdPego').textContent = 'qtdPego: '+contPego;
            document.getElementById('qtdFeito').textContent = 'qtdFeito: '+contCriado;
            if (contPego===contCriado) {
                document.getElementById('tempo').textContent = 'Voce ganhou!!!';
            stopGerar(interval)
            } 
            if(contPego > 5 && contCriado  > 7) {
                timeCreate=500
            }
        })});

    document.body.appendChild(botao);
}

 function gerarMomentaneo(){

    interval = setInterval(()=>{
        gerarMosquito();        
        
    },timeCreate);
    

   
 }
 function time(){
    contTemp = setInterval(()=>{
        timeValue-=1;
        document.getElementById('tempo').textContent = 'tempo: '+timeValue;
        if (timeValue<1) {
            stopGerar(contTemp)
            stopGerar(interval)
        }
    },1000);

}
 function  stopGerar (valu){
    clearInterval(valu)
    timeValue=10;
    document.getElementById('tempo').textContent = 'tempo: '+timeValue;
 }

function removerTodosMosquitos() {
    var botoes = document.querySelectorAll('button');
    
    for (var i = 0; i < botoes.length; i++) {
        document.body.removeChild(botoes[i]);
    }
}




