const readline = require (`readline-sync`)
let freteGratis = 100
let acessoNegado =  readline.questionFloat ("Valor da compra: ")
let diferenca = freteGratis - acessoNegado
console.log("====RESULTADOS====")
if(acessoNegado > freteGratis){
    console.log("Voce tera direito ao beneficio")
}else {console.log(`Faltam ${diferenca} ,00 para ter direito ao cupom`)
}