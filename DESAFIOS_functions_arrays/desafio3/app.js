//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoDeIMC(height, wheight) {
let IMC = wheight/height*height;       
}
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarEmReal(dolar) {
    let convertion = dolar/4.80;
    return(convertion);
}
//exemplo de uso
let dolar = 4.8;
let result = (converterDolarEmReal(dolar));
console.log(`O valor de ${dolar}$ é R$${result}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaRectangularCalc(altura, largura) {
    let area = altura*largura
    let perimetro = 2 * (altura+largura);
    console.log(`Área da Sala = ${area} metros quadrados`);
    console.log(`Perímetro da Sala = ${perimetro} metros`)    
}
//exemplo
let largura = 2
let altura = 4
areaRectangularCalc(altura, largura);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function areaCircularCalc(radius) {
let areaCircular = Math.PI*radius*radius;
let perimetro = 2*Math.PI*radius;
console.log(`Área da sala circular: ${areaCircular.toFixed(2)} metros quadrados`);
console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);    
}
//exemplo
let radius = 3
areaCircularCalc(3);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(number) {
    for (let i = 1; i <= 10; i++) {
      let resultado = number * i;
      console.log(`${number} x ${i} = ${resultado}`);
    }
  }
  
  // Exemplo de uso
  let number = 7;
  mostrarTabuada(number);