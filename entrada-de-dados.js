const prompt = require('prompt-sync')();

console.log(".... cadastro de novo recruta ....");
let novoNome = prompt("Digite o nome do jogador: ");

let novaPontuação = Number(prompt("Digite a pontuação desde jogador: "));

console.log("Sucesso! jogador " + " cadastrado com " + novaPontuação + " pontos.");