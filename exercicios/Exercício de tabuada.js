//Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.
let numero = parseInt(prompt("Digite um número para ver a tabuada: "));

for(let i = 1; i <= 10; i ++){
let resultado = numero * i;
console.log(numero + " x " + i + " = " + resultado);
}
