const notas = [3, 6, 7, 9, 8, 10]

notas.forEach(function (notas) {
    console.log(notas)
})

const notascomponto = notas.map(nota => nota + 1)
console.log(notascomponto)


//////////////

const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map(function (temp) {
    return (temp - 32) * 5 / 9;
});

console.log(celsius);

////////////

const array = [12, '123', 'laura', [22, 45]]

const arrayNumeros = array.filter(selecionaNumeros)

console.log(arrayNumeros)
function selecionaNumeros(elementos) {
    return typeof elementos === 'number'
}

////////////

const numeros = [1, 54, 147, 13, 254, 60, 77, 86, 19, 10]

let par = numeros.filter(numeroPar)
console.log('OS NUMEROS PARES SÃO: ' + par)

let impar = numeros.filter(numeroImpar)
console.log('OS NUMEROS IMPARES SÃO: ' + impar)

function numeroPar(elemento) {
    return elemento % 2 === 0;
}

function numeroImpar(elemento) {
    return elemento % 2 !== 0;
}

////////////


