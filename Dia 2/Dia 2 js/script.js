// Solicita dois números ao usuário
let usuario1 = prompt("Por favor, digite o primeiro numero de usuario:");
let usuario2 = prompt("Por favor, digite o segundo numero de usuario:");

//Transforma os valores adicionados em variáveis numéricas
usuario1 = parseFloat (usuario1);
usuario2 = parseFloat (usuario2);

// Calcula a soma dos dois valores adicionados pelo usuário
let soma = usuario1 + usuario2;

// Exibe o resultado da soma dos dois valores adicionados pelo usuário na tela
alert("O resultado da soma é: " + soma);
