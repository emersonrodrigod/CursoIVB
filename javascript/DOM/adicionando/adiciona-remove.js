/*
 * Podemos remover elementos html usando javascript
 * atraves do metodo remove
 */
var elementos = document.getElementsByClassName('texto');

/*for (var i = 0; i < elementos.length; i++) {
    var paragrafo = elementos[i];
    if ((i % 2) != 0) {
        paragrafo.remove();
    }
}*/
var paragrafo = elementos[3];
paragrafo.remove();

/*
 * podemos criar elementos html atraves do metodo createElement
 * e adiciona no documento atraves do metodo appendChild
 */

//Criando o elemento
var h1 = document.createElement('h1');
h1.innerHTML = 'Curso IVB';

var corpo = document.getElementById('container');
//Adicionando elemento
corpo.appendChild(h1);

