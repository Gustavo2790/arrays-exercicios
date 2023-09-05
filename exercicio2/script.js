
let numerosAleatorios = [4, 10, 79, 85, 99, 45, 8, 6]
//console.log(numerosAleatorios)

let palavrasAleatorias = ["camelo", "batata", "cenoura", "repolho", "alho"]
//console.log(palavrasAleatorias)

let arrayMisturado = [4, "tatu", 57, true, 89, false, "abobrinha"]
//console.log(arrayMisturado)

/*
const quantidadeArrays = (numerosAleatorios, palavrasAleatorias, arrayMisturado)=>{
    console.log(numerosAleatorios.length)
    console.log(palavrasAleatorias.length)
    console.log(arrayMisturado.length)
}

quantidadeArrays(numerosAleatorios, palavrasAleatorias, arrayMisturado)
*/

const quantidadeArrays = (numerosAleatorios, palavrasAleatorias, arrayMisturado)=>{
    console.log(numerosAleatorios[0])
    console.log(palavrasAleatorias[1])
    console.log(arrayMisturado[2])
    console.log(numerosAleatorios.includes(79))
    console.log(arrayMisturado.includes("veneno"))
}

quantidadeArrays(numerosAleatorios, palavrasAleatorias, arrayMisturado)

