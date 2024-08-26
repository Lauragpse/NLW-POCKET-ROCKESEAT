let nome = 'Laura Leite';
const idade = 21;
const cidade = 'Recife';

let apresentacao = `Olá, me chamo ${nome}, tenho ${idade} anos e sou de ${cidade}.`
console.log(apresentacao)

console.log(`Meu nome é ${nome} e ele contem ${nome.length} letras`)

const quantidadeLetras = nome.replace(" ", "").length;
console.log(`Meu nome é ${nome} e ele contem ${quantidadeLetras} letras`)

console.log(nome.toUpperCase()) // Maisculo
console.log(nome.toLowerCase()) // Menusculo
console.log(nome.replace('L', 'C')) //apenas a primeira
console.log(nome.replaceAll('L', 'C')) // todas

const precoAtual = 49.90
const desconto = 0.05
const novoPreco = precoAtual * (1 - desconto)
console.log(`DEU A LOUCA NO GERENTE! COMPRE AGORA POR APENAS R$${novoPreco}`)
console.log(`DEU A LOUCA NO GERENTE! COMPRE AGORA POR APENAS R$${novoPreco.toFixed(3)}`) // define quantidade de casas
