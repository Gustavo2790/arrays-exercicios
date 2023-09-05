let numerosAleatorios = [4, 10, 79, 85, 99, 45, 8, 6]
//console.log(numerosAleatorios)

let palavrasAleatorias = ["camelo", "batata", "cenoura", "repolho", "alho"]
//console.log(palavrasAleatorias)

let arrayMisturado = [4, "tatu", 57, "true", 89, "false", "abobrinha"]
//console.log(arrayMisturado)

let numerosAleatoriosCopia = numerosAleatorios.slice()
console.log(numerosAleatoriosCopia)

let palavrasAleatoriasCopia = palavrasAleatorias.slice()
console.log(palavrasAleatoriasCopia)

let arrayMisturadoCopia = arrayMisturado.slice()
console.log(arrayMisturadoCopia)

const adicionarItemArray = (numerosAleatoriosCopia)=>{
    console.log(numerosAleatoriosCopia.unshift(1))
    console.log(numerosAleatorios)
    console.log(numerosAleatoriosCopia)
}

adicionarItemArray(numerosAleatoriosCopia)

const removerItemArray = (palavrasAleatoriasCopia)=>{
    console.log(palavrasAleatoriasCopia.pop())
    console.log(palavrasAleatorias)
    console.log(palavrasAleatoriasCopia)
}

removerItemArray(palavrasAleatoriasCopia)

const removerSegundoItemArray = (arrayMisturadoCopia)=>{
    console.log(arrayMisturadoCopia.splice(1, 1))
    console.log(arrayMisturado)
    console.log(arrayMisturadoCopia)
}

removerSegundoItemArray(arrayMisturadoCopia)