/**
 * O array é um objeto javascript que permite 
 * o armazenamento de varios dados
 * de um conjunto de dados
 * 
 * O array nada mais é do que um conjunto de dados
 */

var alunos = [
    "Emerson",
    "Leonardo",
    "Gustavo",
    "Filipe",
    "Marcelo",
    "Claudimir",
    "Allan",
    "Giovani"
];

/**
 * Acessando as informações de um array
 * 
 * O array trabalha com indices que começam com Zero
 */

console.log(alunos[1]);
console.log(alunos[0]);

/**
 * Array de objetos
 */

aluno = {
    nome: "Emerson",
    idade: 25
};

var giovani = aluno;
giovani.nome = "Giovani";
giovani.idade = 15;

var arrayDeAlunos = [
    aluno, giovani
];

console.log(arrayDeAlunos[0].nome);

/**
 * Mostrando o tamanho do array
 */

console.log(alunos.length);