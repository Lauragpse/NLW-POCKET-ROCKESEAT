let estudantes = [];
let nome = '';

while (nome !== 'PARE') {
    nome = prompt('Digite o nome do estudante ou "PARE" para finalizar:');
    if (nome !== 'PARE') {
        estudantes.push(nome);
    }
}

console.log(`Quantidade de estudantes cadastrados: ${estudantes.length}`);
console.log(`Lista de estudantes: ${estudantes.join(', ')}`);
