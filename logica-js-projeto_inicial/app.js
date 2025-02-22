alert('Seja bem-vindo ao jogo do número secreto!');
let numMax = 9000;
let numSecreto = parseInt(Math.random ()*numMax+1);//Parte inteira do num entre um e 100 gerado pela função Math multiplicado por 10 (pq a função só gera num entre 0 e 1)
console.log (numSecreto); //armazenar o numero no console pra eu saber qual é
let numEscolhido; //armazenar o chute no console
let tentativas = 1; 
//enquanto o numescolhido for igual ao num secreto
while (numEscolhido != numSecreto){
{{    numEscolhido = prompt(`Digite um número entre 0 e ${numMax}`);//repetir esse prompt

    if (numEscolhido == numSecreto) { //se o numero escolhido for igual ao num secreto
    break; //quebra o ciclo de instruções

    } else { 
        if (numEscolhido > numSecreto) {
            alert(`O número secreto é menor que ${numEscolhido}`);
        } else {
            alert(`O número secreto é maior que ${numEscolhido}`);
            //tentativas = tentativas + 1
        tentativas++;//atribuir um valor a mais na variavel
        }
    }
}}}
let Palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //operador ternário, outro jeito de trabalhar condições '? - equivalente ao if e : - equivalente ao else'
alert(`Você acertou o número secreto: ${numSecreto} com ${tentativas} ${Palavratentativa}`);
