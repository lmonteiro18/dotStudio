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
    //console.log(`Alfabetica Y:${y}`);
    recarregarProjetos(alfabetica, alfabetica_crescente);
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
    //console.log(`Temporal Y:${y}`);
    recarregarProjetos(alfabetica, temporal_crescente);
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


//FILTROS

let filtro = document.querySelectorAll(".filtro");
let todosProjetos = document.querySelectorAll(".projeto");
let linksToRemove = document.querySelectorAll(".projeto a");

for (let i = 0; filtro.length; i++) {
    filtro[i].addEventListener("click", function () {
        console.log(projetos);
        console.log(todosProjetos.length);
        for (let j = 0; todosProjetos.length; j++) {
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