/**
 * Funções são métodos para executar uma ação
 * sem a necessidade de repetição de código;
 */
function soma(numero1, numero2) {
    return numero1 + numero2;
}

function divisao(numero1, numero2) {
    return numero1 / numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

var resultado = soma(1, 2);
var resultado2 = soma(2, 2);
console.log(resultado2);
function mostraNumeros() {

    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}

mostraNumeros();
mostraNumeros();

var conta = {
    numero: 123,
    saldo: 10,
    aumentaSaldo: function(valor) {
        this.saldo = this.saldo + valor;
    }
}


referencia = conta;
referencia.saldo = 1000;

referencia.aumentaSaldo(10);

console.log(referencia.saldo);

