let nome = 'Laura';

function darUmAlo1() {
    console.log(`Eai ${''}, tudo bem?`)
}
darUmAlo1()

function darUmAlo(nome) {
    console.log(`Eai ${nome}, tudo bem?`)
}
darUmAlo('Laura')

function darUmTchau(nome) {
    nome = 'lala';
    console.log(`Tcahu ${nome || 'eai'}, ate a proxima!`)
}
darUmTchau(nome)
