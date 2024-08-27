const notas = [8, 7.2, 3, 9, 10, 2, 6];
let somadasnotas = 0

for (let i = 0; i < notas.length; i++) {
    somadasnotas += notas[i]
}

const mediadasnotas = somadasnotas / notas.length
console.log(`a media das notas é ${mediadasnotas.toFixed(2)}`)

////////////////////// exercicio

const alunoA = [10, 6.5, 8, 7.5];
const alunoB = [9, 6, 6];
const alunoC = [8.5, 9.5];

let notasGeral = [alunoA, alunoB, alunoC];

let somaTotal = 0;
let quantidadeNotas = 0;

for (let i = 0; i < notasGeral.length; i++) {
    for (let j = 0; j < notasGeral[i].length; j++) {
        somaTotal += notasGeral[i][j];
        quantidadeNotas++;
    }
}

let mediaGeral = somaTotal / quantidadeNotas;
console.log("A média geral das notas é: " + mediaGeral.toFixed(3));


/////// metodos arrays

let frutas = ['banana', 'morango', 'uva', 'abacaxi']
console.log(frutas)

frutas.push('melão') //adiciona
console.log(frutas)

frutas.shift()      // remove o primeiro elemento
console.log(frutas)

frutas.unshift('banana') // adiciona um elemento na primeira posição
console.log(frutas)

frutas.pop()         // remove o ultimo elemento
console.log(frutas)

const frutasSelecionadas = frutas.slice(1, 3)
console.log(frutasSelecionadas) // seleciona apenas o elemento pedido

frutas.splice(2, 3) // remove os elementos pedidos
console.log(frutas)

frutas.splice(2, 3, 'laranja', 'melancia')
// remove os elementos pedidos / adicona novos elementos no lugar dos antigos
console.log(frutas)

const numeros = [1, 56, -198, 0, 234]
console.log(numeros.includes(234))  // verifica se o elemento esta na array
console.log(numeros.indexOf(0))    // verifica qual a posicao do elemento no array

////////////////////

const animais1 = ['gato', 'cachorro', 'passarinho']
const animais2 = ['leão', 'girafa', 'hipopotamo']

const animais = animais1.concat(animais2) // juntar arrays
console.log(animais)

/////////////////// exercicio


const lista1 = ['morango', 'uva', 'maçã']
const lista2 = ['amora', 'pêra', 'laranja']
const frutass = lista1.concat(lista2)
frutass.splice(1, 3)
frutass.splice(2, 0, 'melancia', 'acerola')

const novasFrutas = frutass.slice(2)

console.log(novasFrutas)


//////////////////


