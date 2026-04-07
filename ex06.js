const readline = require('readline-sync')
let meta = 40 
let horasEstudadas = readline.questionFloat("Informe quantas horas voce estudou: ")

let diferenca = meta - horasEstudadas
console.log("====RESULTADO====")
if(horasEstudadas >= meta)
    {console.log("Parabéns!! Voce atingiu a carga horaria de estudos")
}else
    {console.log(`Faltam ${diferenca} horas para atingir a meta`)
}
