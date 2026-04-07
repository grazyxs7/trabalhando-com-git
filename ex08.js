const readline = require('readline-sync')
let idadePermitida = 18
let idade = readline.questionInt("Informe sua idade: ")
let diferenca = idadePermitida - idade
console.log("====RESULTADO====")
if(idade >= idadePermitida){
    console.log(`Permitido a entrada`)
}else{
    console.log(`Idade não permitida`)
}