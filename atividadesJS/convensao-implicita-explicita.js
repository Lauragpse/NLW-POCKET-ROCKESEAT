const numero1 = 8;
const numero2 = '9';

let soma = numero1 + numero2;
console.log(typeof soma)
console.log(soma)

soma = numero1 + Number(numero2);
console.log(typeof soma)
console.log(soma)

const string = 'abc';
console.log(typeof Number(string))
console.log(Number(string))
