let frutas = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
let nomeFruta;

while (frutas.length > 0) {
    console.log(`Lista de frutas: ${frutas.join(', ')}`);
    nomeFruta = prompt('Digite o nome de uma fruta para ser removida:');

    if (frutas.includes(nomeFruta)) {
        frutas.splice(frutas.indexOf(nomeFruta), 1);
        alert(`A fruta ${nomeFruta} foi retirada da lista.`);
    } else {
        alert(`A fruta ${nomeFruta} não está disponível no nosso mercado.`);
    }
}

console.log("Lista de compras finalizada.");
