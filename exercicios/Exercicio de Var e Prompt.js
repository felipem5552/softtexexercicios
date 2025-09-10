//Vendedor de Laranjas/ um vendedor de laranjar quer saber quantas laranjas vai vender e quanto ira receber faça o calculo

let precoLaranja = 0.50
let laranjaPorCaixas = 50;

let quantidadeCaixas = parseInt(prompt("Informe a quantidade de caixas vendidads: "));

let totalDeLaranjas = quantidadeCaixas * laranjaPorCaixas;
let totalPagar = totalDeLaranjas * precoLaranja;


console.log("Total de laranjas é:"+ totalDeLaranjas);
console.log("Total a pagar é de: "+ totalPagar);

