let setaProjetos = document.querySelector(".seta_irProjetos");
let filtros = document.querySelector("#Filtros");

setaProjetos.addEventListener("click", function () {
    filtros.scrollIntoView({
        block: "start",
        inline: "center",
        behavior: "smooth"
    });
    $("body").css({"overflow-y": "scroll", "width": "calc(100vw - 17px)"});
});

let Projeto = function (nome, pesquisa, tipo, realizadoEm, url, texto) {
    this.titulo = nome;
    this.nomePesquisa = pesquisa;
    this.area = tipo;
    this.data = realizadoEm;
    this.ficheiro = url;
    this.descricao = texto;
}

let projetos = [];

projetos.push(new Projeto("Mario's Cubway", "Marios-Cubway", "Aplicações", new Date(), "p4_mockup1.png", "Algum texto só para encher"));
projetos.push(new Projeto("Visualizadores de Música", "Visualizadores-Musica", "Aplicações", new Date(), "p4_mockup1.png", "Outra vez a escrever texto ao calhas"));
projetos.push(new Projeto("E-120", "E120", "Audiovisual", new Date(), "p4_mockup1.png", "Algum texto só para encher"));
projetos.push(new Projeto("All Summer In a Day", "All-Summer-In-a-Day", "Aplicações", new Date(), "p4_mockup1.png", "Outra vez a escrever texto ao calhas"));
projetos.push(new Projeto("5Sense", "5Sense", "Aplicações", new Date(), "p4_mockup1.png", "Algum texto só para encher"));
projetos.push(new Projeto("StepUpArt", "StepUpArt", "Aplicações", new Date(2021, 7, 22), "p4_mockup1.png", "Outra vez a escrever texto ao calhas"));
projetos.push(new Projeto("Padrões", "Padroes", "Design Gráfico", new Date(), "p4_mockup1.png", "Algum texto só para encher"));
projetos.push(new Projeto("CCDM", "CCDM", "Design Gráfico", new Date(), "p4_mockup1.png", "Outra vez a escrever texto ao calhas"));
projetos.push(new Projeto("Poema Dinâmico", "Poema-Dinamico", "Audiovisual", new Date(), "p4_mockup1.png", "Algum texto só para encher"));
projetos.push(new Projeto("Moving Poster 1", "Moving-Poster-1", "Motion Graphics", new Date(), "p4_mockup1.png", "Outra vez a escrever texto ao calhas"));
projetos.push(new Projeto("Moving Poster 2", "Moving-Poster-2", "Motion Graphics", new Date(), "p4_mockup1.png", "Algum texto só para encher"));
projetos.push(new Projeto("Moving Poster 3", "Moving-Poster-3", "Motion Graphics", new Date(), "p4_mockup1.png", "Outra vez a escrever texto ao calhas"));


let infoColunas = [{
    desktop: "col-lg-5",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-4",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-4",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-3",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-4",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-5",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-5",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-3",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-5",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-4",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-4",
    mobile: "col-sm-12"
}, {
    desktop: "col-lg-5",
    mobile: "col-sm-12"
}];

let listaProjetos = document.querySelector("#listaProjetos>.row");

for (let i = 0; i < projetos.length; i++) {
    let divProjeto = document.createElement("div");
    divProjeto.classList.add("projeto");
    divProjeto.classList.add(infoColunas[i % 12].desktop);
    divProjeto.classList.add(infoColunas[i % 12].mobile);

    let link = document.createElement("a");
    link.setAttribute("href", "/projetos/" + projetos[i].nomePesquisa);

    let divThumbnail = document.createElement("div");
    divThumbnail.classList.add("thumbnail");

    let divThumbnailImage = document.createElement("div");
    divThumbnailImage.classList.add("thumbnail__img");

    let thumbnail_Img_Overlay = document.createElement("div");
    thumbnail_Img_Overlay.classList.add("thumbnailImgOverlay");
    switch (projetos[i].area) {
        case "Aplicações":
            thumbnail_Img_Overlay.style.backgroundColor = "rgba(225, 17, 167, 0.75)";
            break;
        case "Audiovisual":
            thumbnail_Img_Overlay.style.backgroundColor = "rgba(0, 255, 255, 0.75)";
            break;
        case "Design Gráfico":
            thumbnail_Img_Overlay.style.backgroundColor = "rgba(180, 255, 0, 0.75)";
            break;
        case "Motion Graphics":
            thumbnail_Img_Overlay.style.backgroundColor = "rgba(0, 0, 255, 0.75)";
            break;
        default:
            thumbnail_Img_Overlay.style.backgroundColor = "black";
            break;
    }

    let date_options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    };
    let data_formatada = (projetos[i].data).toLocaleDateString('pt-PT', date_options);

    thumbnail_Img_Overlay.innerHTML = "<p><b>" + projetos[i].area + "</b><br>" + data_formatada + "</p>";

    let divThumbnailTitle = document.createElement("div");
    divThumbnailTitle.classList.add("thumbnail_title");

    let text = document.createElement("p");

    text.innerHTML = "<b>" + projetos[i].titulo + "</b><br>" + projetos[i].descricao;
    divThumbnailImage.innerHTML = `<img src='assets/img/${projetos[i].ficheiro}' width='' height'' alt=''>`;
    divThumbnailImage.appendChild(thumbnail_Img_Overlay);
    divThumbnailTitle.appendChild(text);
    divThumbnail.appendChild(divThumbnailImage);
    divThumbnail.appendChild(divThumbnailTitle);
    link.appendChild(divThumbnail);
    divProjeto.appendChild(link);

    listaProjetos.appendChild(divProjeto);
}


let filtro = document.querySelectorAll(".filtro");
let todosProjetos = document.querySelectorAll(".projeto");
let todasThumbnails = document.querySelectorAll(".thumbnail");
let linksToRemove = document.querySelectorAll(".projeto a");


for (let i = 0; filtro.length; i++) {
    filtro[i].addEventListener("click", function () {
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


