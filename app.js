let listadenumeroSorteado =[]
let numeroLimite = 10;
let numero =  gerarnumeroaleatorio()
let tentativa = 1
function exibirtextonaTela(tag, Texto){
    let tags = document.querySelector(tag);
    tags.innerHTML = Texto;
    responsiveVoice.speak(Texto,'Brazilian Portuguese Female', {rate: 1.2});
}
function telainicial(){
 exibirtextonaTela('h1', 'Jogo do numero secreto:')
 exibirtextonaTela('p', 'Escolha um numero de 1 a 10')
}
telainicial();
 function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute==numero){
       let tentativas = tentativa > 1 ? 'tentativas' : 'tentativa';

        exibirtextonaTela('h1', 'parabens voce acertou');
        exibirtextonaTela('p', 'voce descobriu o numero');
        let mensagem =`Voce descrobriu com ${tentativa} ${tentativas}!`;
        exibirtextonaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numero){
            exibirtextonaTela('p', 'o numero Secreto e menor');
           }
        else{
            if(chute < numero){
            exibirtextonaTela('p', 'o numero Secreto e maior');
            
            }
        }
    limparcampo()
    } tentativa++
    }
  
 function gerarnumeroaleatorio(){
   let numeroEscolhido = parseInt(Math.random()*numeroLimite +1 );
   let quantidadeNumerosNalista = listadenumeroSorteado.length;
   if(quantidadeNumerosNalista==numeroLimite){
    listadenumeroSorteado = []
   }
   if (listadenumeroSorteado.includes(numeroEscolhido)){
    return gerarnumeroaleatorio();
    }else{
    listadenumeroSorteado.push(numeroEscolhido)
    return numeroEscolhido;
}
}
 
 function limparcampo(){
    chute = document.querySelector('input');
    chute.value = ' ';}
function reiniciarJogo(){
    numero =  gerarnumeroaleatorio();
    limparcampo();
    tentativa = 1
    telainicial();
    getElementById('reiniciar').setAttribute('disabled', true)
}