/*Exercício 1.1
Faça um programa que exiba 3 números na tela.

Dica - exibindo (ou "imprimindo") números na tela:*/
var a = [22, 23, 24];

for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

//Vendedor de Laranjas/ um vendedor de laranjar quer saber quantas laranjas vai vender e quanto ira receber faça o calculo

let precoLaranja = 0.50
let laranjaPorCaixas = 50;

let quantidadeCaixas = parseInt(prompt("Informe a quantidade de caixas vendidads: "));

let totalDeLaranjas = quantidadeCaixas * laranjaPorCaixas;
let totalPagar = totalDeLaranjas * precoLaranja;


console.log("Total de laranjas é:"+ totalDeLaranjas);
console.log("Total a pagar é de: "+ totalPagar);



//Faça um programa que leia 3 números e exiba-os na tela.



let num0 = parseInt(prompt("Informe o numero 1:"))
let num1 = parseInt(prompt("Informe o numero 1:"))
let num2 = parseInt(prompt("Informe o numero 1:"))

console.log("Os numeros informados foram:" +num0+","+num1+","+num2)

var v1,v2,v3;
v1 =  parseInt(prompt("Informe o primeiro numero: "))
console.log(v1)
v2 =  parseInt(prompt("Informe o segundo numero : "))
console.log(v2)
v3 =  parseInt(prompt("Informe o terceiro numero: "))
console.log(v3)

 
//Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.
 
let num1 = parseInt(prompt("Infomr o primeiro numero: "))
  let num2 = parseInt(prompt("Informar o segundo numero: "))
  
  const resultado = num1 + num2;

 
  if (resultado > 100) {
    console.log("O resultado da soma é: " + resultado + " e é maior que 100.");
  }else{
      console.log("Não foi possivel somar")
  }