console.log("sentença de código");

{ //bloco de codigo
    {
        console.log("olá"); 
        console.log("Mundo!");
    }
}

/* comentario de 
multiplas linhas */

/*
* outra maneira de 
* comentar
*/


//variaveis e constantes:

var a = 3 //variavel de identificador 'a' recebe o valor de atribuição '3', --recomendado

const c = 5 //constante +++ recomendado

let b = 4 // +- recomendado

console.log(a, b, c);


let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer) //diz o nome da linguagem

qualquer = 3.545
console.log(qualquer)
console.log(typeof qualquer)

//numeros:

const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.564
const avaliacao2 = 6.544

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //em binario
console.log(typeof media)
console.log(typeof Number) //function

//math

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console. log(area)
console. log(typeof Math) //tipo object

//strings

const escola = "cod3r"
console.log(escola.charAt(2)) //seleciona a letra da posição na string
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // numero 3 na tabela de strings
console.log(escola.substring(1))
console.log(escola.substring(0,3))
console.log('escola'.concat(escola).concat('!')) //concatenação
console.log(escola.replace(3, 'e')) //substituição
console.log(escola.replace(/\w/g, 'e'))

console.log('ana,Maria,pedro'.split(',')) //arrays







