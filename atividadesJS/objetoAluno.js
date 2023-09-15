let aluno = {
    nome: "Laura",
    sobreNome: "Camila",
    idade: 20,
    notas: [8.0, 9.0, 10.0]
};

function dadosAluno(){
    console.log(`nome completo: ${aluno.nome} ${aluno.sobreNome}, idade: ${aluno.idade}`);
}

dadosAluno()

function CalcularMedia(notas){
    let soma = 0;
    for (let nota of notas){
        soma += nota;
    }
    return soma / notas.length;
}
let media = CalcularMedia(aluno.notas);
console.log(`A média do aluno(a) é ${media}`);