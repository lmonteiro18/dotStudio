<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>...Studio</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital@0;1&family=Montserrat:ital,wght@0,400;0,500;1,400;1,500&display=swap" rel="stylesheet">

    <!-- JQuery Script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- Bootstrap Script -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>

    <!-- FontAwesome Script -->
    <script src="https://kit.fontawesome.com/4d4aefe869.js" crossorigin="anonymous"></script>

    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/header.css">
    <link rel="stylesheet" type="text/css" href="assets/css/footer.css">
    <link rel="stylesheet" type="text/css" href="assets/css/index.css">
    <link rel="stylesheet" type="text/css" href="assets/css/main.css">
</head>

<body>
<?php include "header.php" ?>
<?php include "mobile_header.php" ?>

<div class="image-carousel">
    <img class="image-carousel-img" srcset="assets/img/p4_mockup1.PNG 480w,
             assets/img/p4_mockup1.PNG 800w" sizes="(max-width: 600px) 480px,
            800px" src="assets/img/p4_mockup1.PNG" alt="StepUpArt App">
</div>

<div id="Projetos">
    <div class="projetos-titulo">
        <h1>Projetos</h1>
        <img class="seta_irProjetos" src="assets/img/seta_homepage-02.png" width="208" height="208" alt="seta">
    </div>

    <div id="Filtros">
        <ul>
            <li class="filtro">Aplicações</li>
            <li class="filtro">Audiovisual</li>
            <li class="filtro">Design Gráfico</li>
            <li class="filtro">Motion Graphics</li>
            <li class="filtro">Ver Tudo</li>
        </ul>
    </div>

    <div id="FiltrosOrdenacaoMobile">
        <div id="DivBotoesFiltragemMobile">
            <ul>
                <li class="botao-filtrar-mobile">Filtrar</li>
                <li class="botao-filtrar-mobile">Ordenar</li>
            </ul>
        </div>
        <div class="FiltrosMobile">
            <ul>
                <li class="filtro filtro-mobile">Aplicações</li>
                <li class="filtro filtro-mobile">Audiovisual</li>
                <li class="filtro filtro-mobile">Design Gráfico</li>
                <li class="filtro filtro-mobile">Motion Graphics</li>
                <li class="filtro filtro-mobile">Ver Tudo</li>
            </ul>
        </div>
        <div class="OrdenacaoMobile">
            <ul>
                <li class="ordenacao-mobile">De A a Z</li>
                <li class="ordenacao-mobile">De Z a A</li>
                <li class="ordenacao-mobile">De Hoje a 2018</li>
                <li class="ordenacao-mobile">De 2018 a Hoje</li>
            </ul>
        </div>
        <div id="PesquisaMobile">
            <i class="fas fa-search fa-3x"></i>
            <div id="BarraPesquisaMobile">
                <i class="fas fa-search fa-3x"></i>
                <p></p>
            </div>
        </div>
    </div>

    <div id="Ordenacao">
        <div class="ordenacao-alfabetica">
            <p>A</p>
            <div id="animacaoOrdenacaoAlfabetica"></div>
            <p>Z</p>
        </div>
        <div class="ordenacao-temporal">
            <p>Hoje</p>
            <div id="animacaoOrdenacaoTemporal"></div>
            <p>2018</p>
        </div>
        <div id="Pesquisa">
            <div id="contentorAnimacaoLupa"></div>
            <div id="BarraPesquisa">
                <i class="fas fa-search fa-3x"></i>
                <p></p>
            </div>
        </div>
    </div>

    <div id="listaProjetos">

        <div class="row thumbnails">

        </div>

    </div>

</div>

<?php include "footer.php" ?>

<script type="text/javascript" src="assets/js/lottie.js"></script>
<script type="text/javascript" src="assets/js/mobile_header.js"></script>
<script type="text/javascript" src="assets/js/index.js"></script>
<script type="text/javascript" src="assets/js/animations.js"></script>
</body>
</html>
