var texto = document.getElementsByClassName("textosobreanimacao");
var textoiris = document.getElementsByClassName("textosobreanimacaoiris");

function move() {
    for (let i = 0; i < texto.length; i++) {
        texto[i].style.position = "relative";
        texto[i].style.left = "0px";
    }
    for (let l = 0; l < textoiris.length; l++) {
        textoiris[l].style.position = "relative";
        textoiris[l].style.right = "0px";
    }
}

window.onload = move();


var isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var rowisa = document.querySelector('.rownomeisa');
var rowluis = document.querySelector('.rownomeluis');

window.addEventListener('scroll', function (event) {
    if (isInViewport(rowisa)) {
        var textoisa = document.getElementsByClassName("textosobreanimacaoisa");
        for (let i = 0; i < textoisa.length; i++) {
            textoisa[i].style.position = "relative"
            textoisa[i].style.left = "0px";
        }
        console.log('In viewport!');
    }
    if(isInViewport(rowluis)){
        var textoluis = document.getElementsByClassName("textosobreanimacaoluis");
        for (let i = 0; i < textoluis.length; i++) {
            textoluis[i].style.position = "relative"
            textoluis[i].style.right = "0px";
        }
        console.log('In viewport!1');
    }
    else {
        console.log('Nope...');
    }
}, false);