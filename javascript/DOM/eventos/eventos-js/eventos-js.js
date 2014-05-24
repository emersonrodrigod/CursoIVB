
var paragrafo = document.getElementById('paragrafo');

paragrafo.onclick = function() {
    alert('Funcionou!!');
    console.log('Emerson');
    paragrafo.style.color = 'red';
};

paragrafo.onmouseover = function() {
    paragrafo.style.color = 'green';
};

paragrafo.onmouseout = function() {
    paragrafo.style.color = 'black';
};


