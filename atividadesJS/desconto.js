let sapato = 70
let blusa = 29
let calca = 59

sapato = aplicarDesconto(sapato)
blusa = aplicarDesconto(blusa)
calca = aplicarDesconto(calca)

console.log(sapato)
console.log(blusa)
console.log(calca)

function aplicarDesconto(precoOriginal) {
    const precoComDesconto = precoOriginal > 50 ? precoOriginal * 0.5 : precoOriginal * 0.7
    return precoComDesconto
}

