alert ('Boas vindas ao nosso site!');
let nome = prompt('Qual é o seu nome?');
let idade = prompt('Olá, ' + nome + ' Qual é sua idade? '); //tive que pesquisar como insiro uma variavel na string
if(idade >= 18){ //se a idade for maior ou igual a 18, a pessoa pode tirar a habilitação. Caso contrário, não.
    alert('Pode tirar a Habilitação');
} else {
    alert('Você não está apto a tirar a habilitação');
}