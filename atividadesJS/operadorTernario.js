const idade = 17
const pais = 'EUA'

// OPERADOR TERNARIO SIMPLES
const resultado = idade >= 18 ? 'aprovado' : 'reprovado'
console.log(resultado)

// OPERADOR TERNARIO COMLEXO
const resultado1 = (idade >= 18) || (idade >= 16 && pais === 'EUA') ? 'aprovado' : 'reprovado'
console.log(resultado1)

// FORMA IF E ELSE 
/*if ((idade >= 18) || (idade >= 16 && pais === 'EUA')) {
    console.log('aprovado')
}  else {
    console.log('reprovado')
}
*/

const idade1 = 61
const resultado2 = idade1 >= 60 ? 'Fila Preferencial' : 'Fila comum'
console.log(resultado2)
