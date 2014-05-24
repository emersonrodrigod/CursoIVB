
var paragrafo = document.getElementById('paragrafo');

paragrafo.onclick = function() {
    var paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerHTML = 'Esse é o paragrafo novo';
    paragrafoNovo.setAttribute('class', 'paragrafo');

    var conta = document.getElementsByClassName('paragrafo').length;

    if (conta % 2 == 0) {
        paragrafoNovo.style.color = 'red';
    }

    var lista = document.getElementById('lista');
    lista.appendChild(paragrafoNovo);
};

paragrafo.onmouseover = function() {
    paragrafo.style.color = 'green';
};

paragrafo.onmouseout = function() {
    paragrafo.style.color = 'black';
};


