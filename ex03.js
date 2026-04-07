const readline = require('readline-sync')

let nome = readline.question("Informe seu nome: ")
let jogoFavorito = readline.question("Informe seu jogo favorito: ")
let pontuacao = readline.questionInt("Informe a pontuação atual: ")

console.log("==========PERFIL JOGADOR========")
console.log(`Nome do jogador: ${nome}`)
console.log(`Jogo favorito: ${jogoFavorito}`)
console.log(`Pontuação: ${pontuacao}`)
