var paragrafo = document.getElementById('paragrafo');

paragrafo.onclick = function() {

    var paragrafoNovo = document.createElement('p');
    paragrafoNovo.innerHTML = 'Esse é o paragrafo novo';
    paragrafoNovo.setAttribute('class', 'p');

    var conta = document.getElementsByClassName('p').length;

    if (conta % 2 == 0) {
        paragrafoNovo.style.color = 'red';
    }

    var lista = document.getElementById('lista');
    lista.appendChild(paragrafoNovo);

};

