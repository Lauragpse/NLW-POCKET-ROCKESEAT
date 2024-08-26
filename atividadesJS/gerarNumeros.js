function gerarSenha() {
    const senha = Math.round(Math.random() * (999999 - 100000) + 100000)
    //console.log(senha)
    return senha
}

const senha = gerarSenha()
console.log(senha)
//gerarSenha()