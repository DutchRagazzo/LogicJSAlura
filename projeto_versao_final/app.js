let listaNumerosSorteados = []; // para ter noção de quais numeros entre 1 e 10 foram sorteados e garantir que nenhum se repita.
let numeroLimite = 20; //define o fim do intervalo de numeros que podem ser sorteados
let numeroSecreto = gerarNumeroAleatorio();//função que gera numeros random entre 1 e 10
let tentativas = 1;//o contador de tentativas já inicia com 1 pq pra jogar precisa chutar pelo menos uma vez

//funcao criada pra exibir texto na tela, recebe parametro da tag do texto desejado e o que se quer dizer
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; //altera o valor da tag para o texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} ); //script para ter leitor de tela
}
//funcao para exibir a mensagem de quando se inicia o jogo
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto'); // o título da página
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 20');
    
}

exibirMensagemInicial();//exibe o feito na exibirMensagemInicial
//funcao para verificar se o chute é igual ao numeroSecreto
function verificarChute() {
    let chute = document.querySelector('input').value; //a var chute recebe o valor do metodo 'input' do HTML
    // verifica se o chute é igual ao numeroSecreto e usa a função de texto na tela para exibir uma msg
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // operador ternário para checar se na msg a palavra tentativa vai estar no plural ou não. (se for a var tentativas maior que 1, escreva tentativas, caso contrário, escreva tentativa)
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas); // edita o paragrafo inicial para a mensagem feita acima
        document.getElementById('reiniciar').removeAttribute('disabled'); //ativa o atributo de reinicio do botão novo jogo la do HTML
    } else { // caso o chute for maior ou menor que o numSecreto, exiba isso na tela, aumente as tentativas e limpe o campo de texto 
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();//chama a função da linha 55
    }
}
//funcao para criar o num random entre 1 e 10
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);// a Math random gera num entre 0 e 1, entao para gerar numeros entre 1 e 10, declaramos que queremos a parte inteira dela, multiplicamos por 10 (numeroLimite), o que torna a função gerar numeros entre 1 e 9, e então somamos mais 1 para gerar num entre 1 e 10
    var quantidadeDeElementosNaLista = listaNumerosSorteados.length;//atribui a quantidade de elementos sorteados a essa variavel e depois verifica se já se sorteou todos os numeros entre 1 e 10 e zera a qtd de elementos na lista, para não repetir numeros já sorteados. 
    if (quantidadeDeElementosNaLista == numeroLimite) { // se a lista tiver 10 elementos, zere-a 
    listaNumerosSorteados = [];}        
    if (listaNumerosSorteados.includes(numeroEscolhido)) { // se o num escolhido já foi sorteado, gere outro numero.
        return gerarNumeroAleatorio();
    } else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}
//funcao limpar campo de input
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // nao deixa o botão ativo até que a condicao da linha 61 seja satisfeita
}






