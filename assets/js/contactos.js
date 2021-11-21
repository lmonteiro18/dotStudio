var quadradoiriscontactos = document.querySelector('.infopessoaliriscontactos');
var quadradoiris = document.querySelector('.infopessoaliris');

var quadradoisacontactos = document.querySelector('.infopessoalisacontactos');
var quadradoisa = document.querySelector('.infopessoalisa');

var quadradoluiscontactos = document.querySelector('.infopessoalluiscontactos');
var quadradoluis = document.querySelector('.infopessoalluis');

let isMobile1 = window.innerWidth;
console.log(isMobile1);
/*var isMobile = !window.matchMedia('only screen and (min-width: 1199px)').matches; /*isto funciona mas não está sempre a
atualizar consoante nós mudamos a largura da janela, logo se nós começámos com a largura grande e depois a diminuirmos isto
funciona na mesma, tentar encontrar uma função que esteja sempre a atualizar*/

if (isMobile1 !== 1199) {

//INFORMAÇÃO PESSOAL ÍRIS

    quadradoiris.addEventListener('click', function (event) {
        if (quadradoiris.style.display === "none") {
            quadradoiris.style.display = "block";
            quadradoiriscontactos.style.display = "none";

            console.log(quadradoiriscontactos.style.display);
            console.log(quadradoiris.style.display);
        } else {
            quadradoiriscontactos.style.display = "block";
            quadradoiris.style.display = "none";
        }
    });

    quadradoiriscontactos.addEventListener('click', function (event) {
        if (quadradoiriscontactos.style.display === "none") {
            quadradoiriscontactos.style.display = "block";
            quadradoiris.style.display = "none";

        } else {
            quadradoiris.style.display = "block";
            quadradoiriscontactos.style.display = "none";
        }
    });

//INFORMAÇÃO PESSOAL ISA

    quadradoisa.addEventListener('click', function (event) {
        if (quadradoisa.style.display === "none") {
            quadradoisa.style.display = "block";
            quadradoisacontactos.style.display = "none";

            console.log(quadradoisacontactos.style.display);
            console.log(quadradoisa.style.display);
        } else {
            quadradoisacontactos.style.display = "block";
            quadradoisa.style.display = "none";
        }
    });

    quadradoisacontactos.addEventListener('click', function (event) {
        if (quadradoisacontactos.style.display === "none") {
            quadradoisacontactos.style.display = "block";
            quadradoisa.style.display = "none";

        } else {
            quadradoisa.style.display = "block";
            quadradoisacontactos.style.display = "none";
        }
    });

//INFORMAÇÃO PESSOAL LUÍS

    quadradoluis.addEventListener('click', function (event) {
        if (quadradoluis.style.display === "none") {
            quadradoluis.style.display = "block";
            quadradoluiscontactos.style.display = "none";

            console.log(quadradoluiscontactos.style.display);
            console.log(quadradoluis.style.display);
        } else {
            quadradoluiscontactos.style.display = "block";
            quadradoluis.style.display = "none";
        }
    });

    quadradoluiscontactos.addEventListener('click', function (event) {
        if (quadradoluiscontactos.style.display === "none") {
            quadradoluiscontactos.style.display = "block";
            quadradoluis.style.display = "none";

        } else {
            quadradoluis.style.display = "block";
            quadradoluiscontactos.style.display = "none";
        }
    });
} else {
    quadradoluis.style.display = "none";
    quadradoisa.style.display = "none";
    quadradoiris.style.display = "none";
}





