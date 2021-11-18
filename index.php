<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <title>...Studio</title>

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

<div class="image-carousel">
    <img class="image-carousel-img" srcset="assets/img/p4_mockup1.png 480w,
             assets/img/p4_mockup1.png 800w" sizes="(max-width: 600px) 480px,
            800px" src="assets/img/p4_mockup1.png" alt="StepUpArt App">
</div>

<div id="Projetos">
    <div class="projetos-titulo">
        <h1>Projetos</h1>
        <img class="seta_irProjetos" src="/assets/img/seta_homepage-02.png" width="208" height="208">
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

    <div id="Ordenacao">
        <div class="ordenacao-temporal">
            <p>A</p>

            <p>Z</p>
        </div>
        <div class="ordenacao-alfabetica">
            <p>Hoje</p>
            <div class="animacao_ordenacao"></div>
            <p>2018</p>
        </div>
        <div id="Pesquisa">
            <svg>
                <line x1="34" y1="66" x2="59" y2="89" style="stroke:white;stroke-width:4"/>
                <circle cx="24" cy="56" r="15" style="stroke: white; stroke-width: 4"></circle>
            </svg>
        </div>
    </div>

    <div id="listaProjetos">

        <div class="row thumbnails">

        </div>

    </div>

</div>

<?php include "footer.php" ?>

<script type="text/javascript" src="assets/js/index.js"></script>
<script type="text/javascript" src="assets/js/animations.js"></script>
</body>
</html>
