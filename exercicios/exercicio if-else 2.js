//Exercício 2.2
//Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 
//2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem 
//(ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.
//Dica - utilize a seguinte função:
// Function personagem Morreu (dano, saude) {
// }
function personagemMorreu(dano, saude) {
  let saudeRestante = saude - dano;
  let morreu;

  if (saudeRestante <= 0) {
    morreu = 1;
  } else {
    morreu = 0;
  }

  return { morreu, saudeRestante };
}

alert(`Teste de Código: 
  
Supondo que você seja um personagem de videogame, veja se o dano aplicado a um inimigo mataria ele de forma imediata.`);

let dano = parseFloat(prompt("Quanto dano você quer dar ao personagem?")) || 0;
let vidaDoInimigo = 150; 

const resultado = personagemMorreu(dano, vidaDoInimigo);

if (resultado.morreu === 1) {
  alert(`Você deu ${dano} de dano. O inimigo morreu! Saúde restante: ${resultado.saudeRestante}`);
} else {
  alert(`Você deu ${dano} de dano. O inimigo sobreviveu! Saúde restante: ${resultado.saudeRestante}`);
}
