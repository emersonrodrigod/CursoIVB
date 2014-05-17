var senha = document.getElementById('senha');
/*
 * Podemos alterar as propriedades do elementos selecionados
 * atraves do metodo setAttribute
 */
senha.setAttribute('type', 'text');

/*
 * Podemos alterar o estilo do elemento
 * atraves da propriedade style
 */
var nome = document.getElementById('nome');
nome.style.color = 'red';
nome.style.fontSize = '50px';
nome.style.marginLeft = '40px';

/*
 * Podemos pegar o texto do elemento atraves
 * da propriedade innerHtml
 * 
 * Isso tbm é um função que pode alterar o texto
 */

var texto = document.getElementsByClassName('texto');
for (var i = 0; i < texto.length; i++) {
    var elemento = texto[1];
    elemento.innerHTML = 'Emerson';
}


