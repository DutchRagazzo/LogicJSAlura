function sortear() {
   var quantidadeParaSortear = parseInt(document.getElementById('quantidade').value);
   var de = parseInt(document.getElementById('de').value);
   var ate = parseInt(document.getElementById('ate').value);
   if(de>=ate){
    alert(`O valor inicial de sorteio (${de}) tem que ser maior que o valor limite (${ate}). Verifique e tente novamente!`);
    return;
   }

   let sorteados = [];
   let numero;

   for (var i = 0; i < quantidadeParaSortear; i++) {
    numero = obterNumeroAleatorio(de, ate);

    while (sorteados.includes(numero)){
       numero = obterNumeroAleatorio (de, ate);
    }
    if(quantidadeParaSortear <=de || quantidadeParaSortear <=ate){
        alert(`A quantidade de números a sortear deve ser menor ou igual ao intervalo informado em "Do Número" e "Até o Número". Verifique!`)
        reiniciar();
        return;
    }
    sorteados.push(numero);
   }

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
  changeBotaoReiniciar();
}

function obterNumeroAleatorio(min, max) {
    return(Math.floor(Math.random() * (max - min + 1)) +(min));
    
}
function changeBotaoReiniciar(){
     var botao = document.getElementById('btn-reiniciar');
     if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
     } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
     }

}
function reiniciar() {

document.getElementById('quantidade').value = '';
document.getElementById('de').value = '';
document.getElementById('ate').value = '';
document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
changeBotaoReiniciar();

}