 //Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas se o resultado for maior que 100.
 
let num1 = parseInt(prompt("Infomr o primeiro numero: "))
  let num2 = parseInt(prompt("Informar o segundo numero: "))
  
  const resultado = num1 + num2;

 
  if (resultado > 100) {
    console.log("O resultado da soma é: " + resultado + " e é maior que 100.");
  }else{
      console.log("Não foi possivel somar")
  }
