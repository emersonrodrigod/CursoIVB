
/*
 * Jogo do PIM usando while
 */

var contador = 0;

while (contador <= 100) {
    var resto = contador % 4;

    if (resto == 0) {
        console.log("PIM");
    }
    else {
        console.log(contador);
    }
    contador++;
}

/*
 * Jogo do pim com FOR
 */
for (var i = 0; i <= 100; i++) {
    var resto = i % 4;
    if (resto == 0) {
        console.log("PIM");
    } else {
        console.log(i);
    }
}

