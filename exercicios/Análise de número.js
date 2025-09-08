//Faça um programa que leia um número e determine se ele é positivo, negativo ou zero.
let numero = parseFloat(prompt("Digite um número."))
if (isNaN(numero)) {
    alert("Digite apenas números por favor.")
} else if (numero === 0) {
    alert("O Número é zero.")
} else if (numero > 0) {
    alert("O número é positivo.")
} else {
     alert( "O número é negativo.")
}
