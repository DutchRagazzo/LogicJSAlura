//Criar uma função que exibe "Olá, mundo!" no console.
function oláMundo() {
    console.log('Olá, Mundo!');
}
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function oláNome(nome) {
    console.log(`Olá ${nome}`);
}
oláNome('Gabriel');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNum(numero) {
    return numero*2;  
}
let dobrador = dobrarNum(2);
console.log(dobrador);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function Média(numero1, numero2, numero3) {
    return(numero1+numero2+numero3/3);
}
let media = Média(2,2,2);
console.log(media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function compararDoisNumeros(num1, num2) {
   return num1 < num2 ? num2 : num1;  
}
let maiornumero = compararDoisNumeros(6,2);
console.log(maiornumero);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(num) {
    return num*num;
}
let resultado = quadrado(3);
console.log(resultado);