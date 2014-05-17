
/*
 * Método getElementById 
 * Retorna um único elemento
 * */
var elemento = document.getElementById('titulo');
console.log(elemento);

/*
 * getElementsByClassName
 * retorna um array de objetos que satisfaçam a condição
 */
var arrayClasses = document.getElementsByClassName('texto');
console.log(arrayClasses);

/*
 * Selecionar pelo elemento html
 * getElementByTagName
 * Retorna um array de objetos que satisfaçam a condição
 */
var h1 = document.getElementsByTagName('h1');
console.log(h1);

/**
 * selecionar por critério
 * querySelector
 * Retorna um elemento que satisfaça a condição
 */
var textoSelecionado = document.querySelector('#conteudo .texto');
console.log(textoSelecionado);






