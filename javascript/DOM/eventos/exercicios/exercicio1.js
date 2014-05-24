var paragrafo = document.getElementById('paragrafo');

paragrafo.onclick = function() {

    var paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerHTML = 'Esse é o paragrafo novo';

    var lista = document.getElementById('lista');
    lista.appendChild(paragrafoNovo);

};

