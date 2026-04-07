const readline = require('readline-sync')
let notaFinal = 7
let nota = readline.questionFloat("Informe sua nota final: ") 
let diferenca = notaFinal - nota
console.log("====RESULTADO====")
if(nota >= notaFinal){
    console.log(`Aprovado`)
    }else{
        console.log (`Reprovado`)
    }