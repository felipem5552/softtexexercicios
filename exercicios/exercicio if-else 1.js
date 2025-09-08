//2. Condicionais (if, else)
//Exercício 2.1
//Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.

alert("Farei a soma de dois números que você me der, porém irei mostrá-lo somente se a soma for maior que 100, ok?")

let num1 = parseFloat(prompt("Digite o primeiro número que você está pensando:")) || 0
let num2 = parseFloat(prompt(`O primeiro número é ${num1} qual o segundo?`)) || 0
soma = num1 + num2

if (soma<100){
alert("O número somado foi menor que 100.")

}

else {
    alert(`A soma dos números ${num1} e ${num2}
        
        É: ${soma}`)
}