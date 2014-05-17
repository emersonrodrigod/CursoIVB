var elementos = document.getElementsByClassName('texto');

for (var i = 0; i < elementos.length; i++) {
    var paragrafo = elementos[i];

    if ((i % 2) == 0) {
        paragrafo.style.color = 'red';
    } else {
        paragrafo.style.color = 'blue';
    }
}

