//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulodesafio = document.querySelector('h1');
titulodesafio.innerHTML = 'Hora do Desafio';
//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function VerificarBotaoConsole (){
    console.log('O botão console foi clicado!');
}
//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function ExibirAlerta(){
    alert('Eu amo JS');
}
//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function MostrarPrompt(){
let cidade = prompt('Digite o nome de uma cidade no Brasil');
alert(`Estive em ${cidade} e lembrei de você`);
}
//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function Somar(){
let num1 = parseInt(prompt('Digite um número: '));
let num2 = parseInt(prompt('Digite outro número: '));
let soma = num1 + num2; 
alert (`A soma de ${num1} e ${num2} é igual a: ${soma} `);
}