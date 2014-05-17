/*
 * Objetos são conjuntos de dados
 * eles conter varias propriedades com diversos valores
 */
var endereco = {
    rua: "travessa itaipu",
    numero: 72,
    bairro: "jardim planalto"
};

var pessoa = {
    idade: 10,
    nome: "Emerson",
    sexo: "m",
    endereco: endereco
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.sexo);
console.log(pessoa.endereco.rua);

var referencia = pessoa;

console.log(referencia.nome);



