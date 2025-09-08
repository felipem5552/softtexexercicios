//Faça um programa que leia um vetor numérico de 10 posições. Depois, ordene o vetor em ordem crescente e apresente os elementos ordenados.
let vetor = [];
const tamanhodoVetor = 10;
console.log(`Por favor, digite ${tamanhodoVetor } números:`);

for(let i = 0; i < tamanhodoVetor; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1} número `));
    if (!isNaN(numero)) {
        vetor.push(numero)
    } else {
        alert("Digite apenas números por favor.");
        i--;
    }
}
console.log("\n"),
console.log("Vetor antes da ordenação crescente:");
console.log(vetor);

vetor.sort(function(a,b){
    return a-b;
})

console.log("\n"),
console.log("Vetor após a ordenação crescente:");
console.log(vetor);
