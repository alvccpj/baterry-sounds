function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (contador = 0; contador < listaDeTeclas.length; contador++) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    console.log(contador);
}




