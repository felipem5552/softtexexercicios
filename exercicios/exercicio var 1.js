//Exercício 1.4
//Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor 
// na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. 
// Exemplo: 100 Fahrenheit = 37,77 Celsius.

let tempF = parseFloat(prompt(`Calculadora Fahrenheit para Celsius: 

Digite a temperatura em Fahrenheit e irei converter para Celsius!`))
let tempC = ((tempF - 32) * 5) / 9;

alert(`Temperatura Fahrenheit: ${tempF}
Temperatura Celsius: ${tempC}`)



