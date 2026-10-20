const prompt = require("prompt-sync")();

const jogadores = [
  { nome: "Fallen", funcao: "AWPer", pontuacao: 2500 },
  { nome: "Coldzera", funcao: "Rifler", pontuacao: 2300 },
];

function cadastrarJogador() {
  const nome = prompt("Nome do jogador: ");
  const funcao = prompt("Função: ");
  const pontuacao = Number(prompt("Pontuação inicial: "));

  jogadores.push({ nome, funcao, pontuacao });
  console.log(`Jogador ${nome} cadastrado!`);
}

function listarJogadores() {
  console.log("\n--- LISTA DE JOGADORES ---");
  for (let i = 0; i < jogadores.length; i++) {
    const j = jogadores[i];
    console.log(`${i + 1}. ${j.nome} | ${j.funcao} | ${j.pontuacao} pts`);
  }
}

function buscarJogador() {
  const busca = prompt("Nome do jogador: ");
  let encontrado = false;

  for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].nome.toLowerCase() === busca.toLowerCase()) {
      const j = jogadores[i];
      console.log(`${j.nome} | ${j.funcao} | ${j.pontuacao} pts`);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    console.log("Jogador não encontrado.");
  }
}

function atualizarPontuacao() {
  console.log("\n--- ATUALIZAÇÃO DE RANKING ---");
  const nomeBusca = prompt("Qual jogador deseja atualizar? ");

  for (let i = 0; i < jogadores.length; i++) {
    const jogadorAtual = jogadores[i];

    if (jogadorAtual.nome.toLowerCase() === nomeBusca.toLowerCase()) {
      const pontosNovos = Number(prompt("Quantos pontos ele ganhou hoje? "));

      if (isNaN(pontosNovos)) {
        console.log("ERRO: digite um número válido.");
        return;
      }

      jogadorAtual.pontuacao += pontosNovos;
      console.log(
        `SUCESSO! A pontuação de ${jogadorAtual.nome} subiu para ${jogadorAtual.pontuacao} pontos!`
      );
      return; // encontrou: encerra a função
    }
  }

  // só chega aqui se o loop terminou sem achar ninguém
  console.log(`ERRO: jogador "${nomeBusca}" não encontrado.`);
}

function menu() {
  let opcao = "";

  while (opcao !== "0") {
    console.log("\n=== GAMERTEAM MANAGER ===");
    console.log("1 - Cadastrar jogador");
    console.log("2 - Listar jogadores");
    console.log("3 - Buscar jogador");
    console.log("5 - Atualizar pontos");
    console.log("0 - Sair");

    opcao = prompt("Escolha uma opção do menu: ");

    switch (opcao) {
      case "1": cadastrarJogador(); break;
      case "2": listarJogadores(); break;
      case "3": buscarJogador(); break;
      case "5": atualizarPontuacao(); break;
      case "0": console.log("Até a próxima!"); break;
      default: console.log("Opção inválida.");
    }
  }
}

menu();