recarregarProjetos(true, true);

//Animações Tooglers Ordenação

let file = 'ordenacao_animation3.json';

let toogler_animation = lottie.loadAnimation({
    container: document.getElementById('animacaoOrdenacaoAlfabetica'), // Required
    path: 'assets/animation/' + file, // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "toogler_ordenacao_alfabetica", // Name for future reference. Optional.
});

let toogler_animation2 = lottie.loadAnimation({
    container: document.getElementById('animacaoOrdenacaoTemporal'), // Required
    path: 'assets/animation/' + file, // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "toogler_ordenacao_temporal", // Name for future reference. Optional.
});

let click_counters = [0, 0];

let alfabetica = true;
let alfabetica_crescente = true;
let temporal_crescente = false;

document.getElementById('animacaoOrdenacaoAlfabetica').addEventListener("click", function (evt) {
    alfabetica = true;
    // evt = Mouse click event.
    let rect = evt.target.getBoundingClientRect();
    let y = evt.clientY - rect.top;  //y position within the element.
    if (y >= 67 && click_counters[0] % 2 === 0) {
        toogler_animation.stop();
        toogler_animation.play();
        setTimeout(() => toogler_animation.pause(), 1000);
        alfabetica_crescente = false;
        click_counters[0]++;
    } else if (y <= 67 && click_counters[0] % 2 === 1) {
        toogler_animation.play();
        setTimeout(() => toogler_animation.pause(), 1000);
        alfabetica_crescente = true;
        click_counters[0]++;
    }
    recarregarProjetos(alfabetica, alfabetica_crescente);
    restaurarFiltros();
});

document.getElementById('animacaoOrdenacaoTemporal').addEventListener("click", function (evt) {
    alfabetica = false;
    // evt = Mouse click event.
    let rect = evt.target.getBoundingClientRect();
    let y = evt.clientY - rect.top;  //y position within the element.
    if (y >= 67 && click_counters[1] % 2 === 0) {
        toogler_animation2.stop();
        toogler_animation2.play();
        setTimeout(() => toogler_animation2.pause(), 1000);
        temporal_crescente = true;
        click_counters[1]++;
    } else if (y <= 67 && click_counters[1] % 2 === 1) {
        toogler_animation2.play();
        setTimeout(() => toogler_animation2.pause(), 1000);
        temporal_crescente = false;
        click_counters[1]++;
    }
    recarregarProjetos(alfabetica, temporal_crescente);
    restaurarFiltros();
});


//Animação Lupa

let file2 = 'animacao_lupa.json';

let animacao_lupa = lottie.loadAnimation({
    container: document.getElementById('contentorAnimacaoLupa'), // Required
    path: 'assets/animation/' + file2, // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "animacao_lupa", // Name for future reference. Optional.
});

let counter2 = 0;

document.getElementById('Pesquisa').addEventListener("mouseover", function () {
    if (counter2 % 2 === 0) {
        animacao_lupa.stop();
    }
    animacao_lupa.play();
    setTimeout(() => animacao_lupa.pause(), 1500);
    if (counter2 % 2 === 0) {
        counter2++;
    }
});

document.getElementById('Pesquisa').addEventListener("mouseleave", function () {
    setTimeout(() => animacao_lupa.play(), 1500);
    setTimeout(() => animacao_lupa.pause(), 3000);
    setTimeout(() => counter2++, 3001);
});


//BARRA DE PESQUISA

/*
let filtrosOrdenacaoMobile = document.querySelector("#FiltrosOrdenacaoMobile");

if (filtrosOrdenacaoMobile.style.display === "none") {

    document.addEventListener("keydown", function (evt) {
        let key = evt.key;
        let barraPesquisa = document.querySelector("#BarraPesquisa");
        let textoPesquisa = document.querySelector("#BarraPesquisa p");
        let lupa = document.querySelector("#BarraPesquisa i");
        let body = document.querySelector("body");

        if (key !== "Enter") {
            body.style.overflowY = "hidden";
            barraPesquisa.style.display = "flex";
            setTimeout(function () {
                barraPesquisa.style.opacity = "100%";
            }, 1);
            if (key === " ") {
                if (textoPesquisa.innerText !== "") {
                    textoPesquisa.innerText = textoPesquisa.innerText + "_";
                }
            } else if (key === "Backspace") {
                let copiaTexto;
                copiaTexto = (textoPesquisa.innerText).slice(0, textoPesquisa.innerText.length - 1);
                textoPesquisa.innerText = copiaTexto;
            } else if (key !== "Shift" && key !== "CapsLock") {
                textoPesquisa.innerText = textoPesquisa.innerText + key;
            }
        } else {
            console.log(textoPesquisa.style.width);
            lupa.style.left = "70%";
            setTimeout(function () {
                barraPesquisa.style.opacity = "0";
            }, 4000);
            setTimeout(function () {
                barraPesquisa.style.display = "none";
                body.style.overflowY = "scroll";
                lupa.style.left = "0";
                if (textoPesquisa.innerText !== "") {
                    pesquisar(textoPesquisa.innerText);
                    restaurarFiltros();
                }
            }, 4500);
        }
        console.log(key);
    });

} else {
    let divLupa = document.querySelector("#PesquisaMobile");
    divLupa.addEventListener("click", function () {
        let key = evt.key;
        let barraPesquisa = document.querySelector("#BarraPesquisa");
        let textoPesquisa = document.querySelector("#BarraPesquisa p");
        let lupa = document.querySelector("#BarraPesquisa i");
        let body = document.querySelector("body");

        if (key !== "Enter") {
            body.style.overflowY = "hidden";
            barraPesquisa.style.display = "flex";
            setTimeout(function () {
                barraPesquisa.style.opacity = "100%";
            }, 1);
            if (key === " ") {
                if (textoPesquisa.innerText !== "") {
                    textoPesquisa.innerText = textoPesquisa.innerText + "_";
                }
            } else if (key === "Backspace") {
                let copiaTexto;
                copiaTexto = (textoPesquisa.innerText).slice(0, textoPesquisa.innerText.length - 1);
                textoPesquisa.innerText = copiaTexto;
            } else if (key !== "Shift" && key !== "CapsLock") {
                textoPesquisa.innerText = textoPesquisa.innerText + key;
            }
        } else {
            console.log(textoPesquisa.style.width);
            lupa.style.left = "70%";
            setTimeout(function () {
                barraPesquisa.style.opacity = "0";
            }, 4000);
            setTimeout(function () {
                barraPesquisa.style.display = "none";
                body.style.overflowY = "scroll";
                lupa.style.left = "0";
                if (textoPesquisa.innerText !== "") {
                    pesquisar(textoPesquisa.innerText);
                    restaurarFiltros();
                }
            }, 4500);
        }
        console.log(key);
    });

}
*/

document.addEventListener("keydown", function (evt) {
    let key = evt.key;
    let barraPesquisa = document.querySelector("#BarraPesquisa");
    let textoPesquisa = document.querySelector("#BarraPesquisa p");
    let lupa = document.querySelector("#BarraPesquisa i");
    let body = document.querySelector("body");

    if (key !== "Enter") {
        body.style.overflowY = "hidden";
        barraPesquisa.style.display = "flex";
        setTimeout(function () {
            barraPesquisa.style.opacity = "100%";
        }, 1);
        if (key === " ") {
            if (textoPesquisa.innerText !== "") {
                textoPesquisa.innerText = textoPesquisa.innerText + "_";
            }
        } else if (key === "Backspace") {
            let copiaTexto;
            copiaTexto = (textoPesquisa.innerText).slice(0, textoPesquisa.innerText.length - 1);
            textoPesquisa.innerText = copiaTexto;
        } else if (key !== "Shift" && key !== "CapsLock") {
            textoPesquisa.innerText = textoPesquisa.innerText + key;
        }
    } else {
        console.log(textoPesquisa.style.width);
        lupa.style.left = "70%";
        setTimeout(function () {
            barraPesquisa.style.opacity = "0";
        }, 4000);
        setTimeout(function () {
            barraPesquisa.style.display = "none";
            body.style.overflowY = "scroll";
            lupa.style.left = "0";
            if (textoPesquisa.innerText !== "") {
                pesquisar(textoPesquisa.innerText);
                restaurarFiltros();
            }
        }, 4500);
    }
    console.log(key);
});


//ORDENAÇÃO MOBILE

let opcoesOrdenacao = document.getElementsByClassName('ordenacao-mobile');

for (let i = 0; i < opcoesOrdenacao.length; i++) {
    opcoesOrdenacao[i].addEventListener("click", function () {
        switch (i) {
            case 0:
                alfabetica = true;
                alfabetica_crescente = true;
                recarregarProjetos(alfabetica, alfabetica_crescente);
                break;
            case 1:
                alfabetica = true;
                alfabetica_crescente = false;
                recarregarProjetos(alfabetica, alfabetica_crescente);
                break;
            case 2:
                alfabetica = false;
                temporal_crescente = false;
                recarregarProjetos(alfabetica, temporal_crescente);
                break;
            case 3:
                alfabetica = false;
                temporal_crescente = true;
                recarregarProjetos(alfabetica, temporal_crescente);
                break;
            default:
                break;
        }
        restaurarFiltros();
    });
}

//MOSTRAR FILTROS/ORDENACAO MOBILE

let botaoFiltrar1 = document.querySelector(".botao-filtrar-mobile:first-of-type");
let botaoFiltrar2 = document.querySelector(".botao-filtrar-mobile:last-of-type");
let divFiltrosMobile = document.querySelector(".FiltrosMobile");
let divOrdenacaoMobile = document.querySelector(".OrdenacaoMobile");
let body2 = document.querySelector("body");

botaoFiltrar1.addEventListener("click", function () {
    botaoFiltrar2.classList.toggle("esconder-botao-filtrar-mobile");
    if (!divFiltrosMobile.classList.contains("changeOpacity")) {
        divFiltrosMobile.classList.toggle("showFiltros");
        console.log("show filtros 1");
        setTimeout(function () {
            divFiltrosMobile.classList.toggle("changeOpacity");
        }, 1);
    } else {
        divFiltrosMobile.classList.toggle("changeOpacity");
        setTimeout(function () {
            divFiltrosMobile.classList.toggle("showFiltros");
            console.log("hid filtros 1");
        }, 500);
    }
    if (body2.style.overflowY === "hidden") {
        body2.style.overflowY = "scroll";
    } else {
        body2.style.overflowY = "hidden";
    }
});

botaoFiltrar2.addEventListener("click", function () {
    botaoFiltrar1.classList.toggle("esconder-botao-filtrar-mobile");
    if (!divOrdenacaoMobile.classList.contains("changeOpacity")) {
        divOrdenacaoMobile.classList.toggle("showFiltros");
        console.log("show filtros 2");
        setTimeout(function () {
            divOrdenacaoMobile.classList.toggle("changeOpacity");
        }, 1);
    } else {
        divOrdenacaoMobile.classList.toggle("changeOpacity");
        setTimeout(function () {
            divOrdenacaoMobile.classList.toggle("showFiltros");
            console.log("hid filtros 2");
        }, 500);
    }
    if (body2.style.overflowY === "hidden") {
        body2.style.overflowY = "scroll";
    } else {
        body2.style.overflowY = "hidden";
    }
});


//FILTROS

function restaurarFiltros() {
    let filtro = document.querySelectorAll(".filtro");
    let todosProjetos = document.querySelectorAll(".projeto");
    let linksToRemove = document.querySelectorAll(".projeto a");

    for (let i = 0; filtro.length; i++) {
        filtro[i].addEventListener("click", function () {
            for (let j = 0; todosProjetos.length; j++) {
                todosProjetos[j].style.display = "block";
                if (projetos[j].area !== filtro[i].innerText && filtro[i].innerText !== "Ver Tudo") {
                    todosProjetos[j].style.opacity = "40%";
                    linksToRemove[j].removeAttribute("href");
                    linksToRemove[j].style.cursor = "default";
                } else if ((projetos[j].area === filtro[i].innerText && filtro[i].innerText !== "Ver Tudo") || filtro[i].innerText === "Ver Tudo") {
                    todosProjetos[j].style.opacity = "100%";
                    linksToRemove[j].setAttribute("href", "/projetos/" + projetos[j].nomePesquisa);
                    linksToRemove[j].style.cursor = "pointer";
                }
            }
        });
    }
}

function pesquisar(texto) {
    let todosProjetos = document.querySelectorAll(".projeto");
    let linksToRemove = document.querySelectorAll(".projeto a");

    let textoSemUnderscores = texto.replace(/_/i, " ").toLowerCase();
    console.log(textoSemUnderscores);

    for (let j = 0; todosProjetos.length; j++) {
        console.log((projetos[j].titulo).toLowerCase().includes(textoSemUnderscores));
        if ((projetos[j].titulo).toLowerCase().includes(textoSemUnderscores) === false || projetos[j].titulo[0].toLowerCase() !== textoSemUnderscores[0]) {
            todosProjetos[j].style.display = "none";
            /*todosProjetos[j].style.opacity = "40%";
            linksToRemove[j].removeAttribute("href");
            linksToRemove[j].style.cursor = "default";*/
        } else if ((projetos[j].titulo).toLowerCase().includes(textoSemUnderscores) === true && projetos[j].titulo[0].toLowerCase() === textoSemUnderscores[0]) {
            todosProjetos[j].style.opacity = "100%";
            linksToRemove[j].setAttribute("href", "/projetos/" + projetos[j].nomePesquisa);
            linksToRemove[j].style.cursor = "pointer";
        }
    }
}


restaurarFiltros();