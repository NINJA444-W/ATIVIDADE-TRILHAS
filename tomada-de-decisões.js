const prompt = require('prompt-sync')();

let nome = prompt("Nome do jogador: ");
let pontuação = Number(prompt("Pontuação: "));
let pontuaçãominima = 1000;

console.log("Analisando perfil...");

if(pontuação >= pontuaçãominima) 
    console.log("APROVADO!!! " + nome + " TEM NIVEL PARA A EQUIPE PRICIPAL.");
else[]
 let pontosfaltantes = pontuaçãominima - pontuação;
console.log("REPROVADO!!! Faltam " + pontosfaltantes + " pontos para entrar no time.");
