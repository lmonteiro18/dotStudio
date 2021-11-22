<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>StepUpArt</title> <!--//mudar dependendo onde clicou-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" type="text/css" href="projetoX.css" media="screen">
</head>
<body>
<header>

</header>
<div class="row" style="margin-left: 4vw">
    <div class="col-lg-12">
        <h1 class="title">StepUpArt</h1><br> <!--mudar dependendo onde clicou-->
    </div>
</div>
<div class="row" style="margin-left: 4vw">
    <div class="col-lg-12">
        <p class="corpo">Aplicações | 30 de maio de 2021</p><br> <!--mudar dependendo onde clicou-->
    </div>
</div>

<main>
    <!--carroussel style="transform: translate3d(0px, 646.51px, 0px);"-->
        <div class="margin row" id="carroussel">
            <div class="col-lg-12">
                <img class="image_carroussel show-on-scroll" src="assets/img/Exemplo1.png" alt="ola" width="1400" height="932">
                <img class="image_carroussel show-on-scroll" src="assets/img/Exemplo2.png" alt="ola" width="1400" height="932">
                <img class="image_carroussel show-on-scroll" src="assets/img/Exemplo3.png" alt="ola" width="1400" height="932">
                <img class="image_carroussel show-on-scroll" src="assets/img/Exemplo4.png" alt="ola" width="1400" height="932">
                <img class="image_carroussel show-on-scroll" src="assets/img/Exemplo5.png" alt="ola" width="1400" height="932">
                <img class="image_carroussel show-on-scroll" src="assets/img/Exemplo6.png" alt="ola" width="1400" height="932">
            </div>
        </div>
    <!--mudar dependendo onde clicou-->
    <div class="row">
        <div class="col-lg-12">
            <button class="subtitle" id="subtitle_detalhes" onclick="showDetalhes()">Detalhes</button>
        </div>
    </div>
    <div class="div" id="div_detalhes">
        <div class="title_bloco row slide-left">
            <div class="col-lg-12">
                <button class="subtitle_cinza" id="subtitle_detalhesCinza" onclick="showDetalhes()">Detalhes</button>
                <h2 class="subtitle_branco">Detalhes</h2>
                <h2 class="subtitle_cinza">Detalhes</h2>
                <h2 class="subtitle_branco">Detalhes</h2><br>
            </div>
        </div>
        <div class="margin">
            <!--<https://www.html.am/html-codes/marquees/css-slide-in-text.cfm-->
            <p class="corpo textoPreto negrito row">Nome do projeto:</p>
            <p class="corpo textoPreto"> StepUpArt</p><br><br>
            <p class="corpo textoPreto negrito row">Área: </p>
            <p class="corpo textoPreto">Aplicações</p><br><br>
            <p class="corpo textoPreto negrito row">Data de conclusão:</p>
            <p class="corpo textoPreto">30 de maio de 2021</p><br><br>
            <p class="corpo textoPreto negrito row">Contexto do projeto:</p>
            <p class="corpo textoPreto">Académico</p><br><br>
            <p class="corpo textoPreto negrito row">Cadeira:</p>
            <p class="corpo textoPreto">Projeto 4 - Multimédia Interativo</p><br><br>
            <p class="corpo textoPreto negrito row">Duração:</p>
            <p class="corpo textoPreto">1 semestre</p><br><br>
            <p class="corpo textoPreto negrito row">Ferramentas utilizadas:</p>
            <p class="corpo textoPreto">Figma, PHPStorm, HTML, CSS, Javascript, PHP</p><br><br>
            <p class="corpo textoPreto negrito row">Técnicas utilizadas:</p>
            <p class="corpo textoPreto">Programação Web</p>
        </div>
        <div class="title_bloco row slide-left">
            <div class="col-lg-12">
                <h2 class="subtitle_cinza">Detalhes</h2>
                <h2 class="subtitle_branco">Detalhes</h2>
                <h2 class="subtitle_cinza">Detalhes</h2>
                <h2 class="subtitle_branco">Detalhes</h2><br>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <button class="subtitle" id="subtitle_conceito" onclick="showConceito()">Conceito</button>
        </div>
    </div>
    <div class="div" id="div_conceito">
        <div class="title_bloco row slide-left">
            <div class="col-lg-12">
                <button class="subtitle_cinza" id="subtitle_conceitoCinza" onclick="showConceito()">Conceito</button>
                <h2 class="subtitle_branco" id="conceito2">Conceito</h2>
                <h2 class="subtitle_cinza" id="conceito3">Conceito</h2>
                <h2 class="subtitle_branco" id="conceito4">Conceito</h2><br>
            </div>
        </div>
        <div class="margin row">
            <div class="col-lg-8" style="margin-bottom: 5vh; padding-left: 0">
                <p class="corpo textoPreto">StepUpArt consiste numa plataforma para a web que, através da recolha e
                    análise dos percursos dos utilizadores, gera uma representação gráfica dos mesmos e produz uma
                    composição
                    musical.
                    De modo a melhorar a experiência social do utilizador e criar uma comunidade, os resultados podem
                    ainda ser partilhados em diversas redes sociais usando o #StepUpArt.</p>
            </div>
        </div>
        <div class="row margin">
            <div class="col-lg-4 col-md-12 col-sm-12">
                <p class="corpo textoPreto centro mediaLargura" style="margin-bottom: 10px">Percurso Diário</p>
                <img class="imagem mediaLargura" src="assets/img/Exemplo1.png" alt="ola" width="1400" height="932">
                <audio controls class="centro mediaLargura" style="margin-top: 10px">
                    <source src="assets/audio/Exemplo1.wav" type="audio/wav">
                </audio>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
                <p class="corpo textoPreto centro mediaLargura" style="margin-bottom: 10px">Percurso Colaborativo</p>
                <img class="imagem mediaLargura" src="assets/img/Exemplo2.png" alt="ola" width="1400" height="932">
                <audio controls class="centro mediaLargura" style="margin-top: 10px">
                    <source src="assets/audio/Exemplo2.wav" type="audio/wav">
                </audio>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12">
                <p class="corpo textoPreto centro mediaLargura" style="margin-bottom: 10px">Percurso Semanal</p>
                <img class="imagem mediaLargura" src="assets/img/Exemplo3.png" alt="ola" width="1400" height="932">
                <audio controls class="centro mediaLargura" id="lastChildAudio" style="margin-top: 10px">
                    <source src="assets/audio/Exemplo3.wav" type="audio/wav">
                </audio>
            </div>
        </div>
        <div class="row margin">
            <div class="col-lg-8" style="margin-top: 5vh; float: right">
                <p class="corpo textoPreto">O utilizador poderá gerar três tipos de percursos: percurso diário, percurso
                    colaborativo e percurso semanal. Além disso, o utilizador poderá escolher qual o tipo de
                    representação do ambiente,
                    ou seja, escolher se quer visualizar informação relativa à elevação e hora do dia ou informação
                    relativa às
                    calorias perdidas e à distância percorrida.</p><br>
            </div>
        </div>
        <div class="title_bloco row slide-left">
            <div class="col-lg-12">
                <h2 class="subtitle_cinza">Conceito</h2>
                <h2 class="subtitle_branco">Conceito</h2>
                <h2 class="subtitle_cinza">Conceito</h2>
                <h2 class="subtitle_branco">Conceito</h2><br>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <button class="subtitle" id="subtitle_referencias" onclick="showReferencias()">Referências</button>
        </div>
    </div>
    <div class="div" id="div_referencias">
        <div class="title_bloco row slide-left">
            <div class="col-lg-12">
                <button class="subtitle_cinza" id="subtitle_referenciasCinza" onclick="showReferencias()">Referências
                </button>
                <h2 class="subtitle_branco">Referências</h2>
                <h2 class="subtitle_cinza">Referências</h2>
                <h2 class="subtitle_branco">Referências</h2><br>
            </div>
        </div>
        <div class="row margin">
            <div class="col-lg-6" style="margin-bottom: 5vh; padding-left: 0">
                <p class="corpo textoPreto">Este projeto académico tinha como requisito a inspiração numa ou mais obras
                    apresentadas na
                    exposição Cibernetic Serendipity. Assim, o projeto da exposição que mais esteve na base da nossa
                    ideia,
                    tanto a nível visual como a nível conceptual, foi o “Fontana Mix” de John Cage.</p><br><br><br>

                <p class="corpo textoPreto">O trabalho de John Cage consiste na composição de uma música através da
                    utilização
                    de 10
                    folhas de papel e 12 folhas transparentes, sendo que as folhas de papel contêm linhas curvas com
                    espessuras e texturas diferentes. Relativamente às folhas transparentes, 10 contêm pontos
                    distribuídos
                    aleatoriamente, uma tem uma grelha e a outra tem uma linha reta.
                    Da sobreposição destas folhas transparentes, resulta uma pauta performativa. Uma das folhas com
                    pontos é
                    colocada por cima de umas das folhas com as linhas curvas, por cima destas é colocada a grelha.
                    Depois é
                    escolhido um dos pontos abaixo da grelha e outro que esteja fora dela, utilizando a folha que tem a
                    linha reta, criando, assim, uma composição musical.</p><br>
            </div>
            <div class="col-lg-6 center">
                <img class="imagem" src="assets/img/Referencias1.png" alt="ola" width="438" height="734">
            </div>
        </div>
        <div class="row margin">
            <div class="col-lg-12">
                <img class="imagem" id="imagemReferencia" src="assets/img/Referencias2.png" alt="ola" width="666" height="356">
            </div>
        </div>
        <div class="title_bloco row slide-left">
            <div class="col-lg-12">
                <h2 class="subtitle_cinza">Referências</h2>
                <h2 class="subtitle_branco">Referências</h2>
                <h2 class="subtitle_cinza">Referências</h2>
                <h2 class="subtitle_branco">Referências</h2><br>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
            <button class="subtitle" id="subtitle_website" onclick="showWebsite()">Website</button>
        </div>
    </div>
    <div class="div" id="div_website">
        <div class="title_bloco row slide-left">
            <div class="col-lg-12">
                <button class="subtitle_cinza" id="subtitle_websiteCinza" onclick="showWebsite()">Website</button>
                <h2 class="subtitle_branco">Website</h2>
                <h2 class="subtitle_cinza">Website</h2>
                <h2 class="subtitle_branco">Website</h2><br>
            </div>
        </div>
        <div class="margin">
            <div class="row" style="margin-bottom: 5vw">
                <div class="col-lg-6">
                    <img class="imagem imagem_website mediaLargura" src="assets/img/Website1.png" alt="ola" width="2880" height="1581"><br>
                </div>
                <div class="col-lg-6">
                    <img class="imagem imagem_website mediaLargura" src="assets/img/Website2.png" alt="ola" width="2880" height="1580"><br>
                </div>
            </div>
            <div class="row" style="margin-bottom: 5vw">
                <div class="col-lg-6">
                    <img class="imagem imagem_website mediaLargura" src="assets/img/Website3.png" alt="ola" width="2880" height="1579"><br>
                </div>
                <div class="col-lg-6">
                    <img class="imagem imagem_website mediaLargura" src="assets/img/Website4.png" alt="ola" width="2880" height="1581"><br>
                </div>
            </div>
            <div class="row center">
                <div class="col-lg-12">
                    <p class="corpo textoPreto" style="margin-top: 5vh"><b>Aceda ao site através deste link:</b></p>
                </div>
            </div>
            <div class="row center">
                <div class="col-lg-12">
                    <a class="corpo textoPreto" href="https://student.dei.uc.pt/~impereira/ProjetoP4Meta4Grupo15/index.php">https://student.dei.uc.pt/~impereira/ProjetoP4Meta4Grupo15/index.php</a>
                </div>
            </div>
        </div>
        <div class="title_bloco row slide-left">
            <div class="col-lg-12">
                <h2 class="subtitle_cinza">Website</h2>
                <h2 class="subtitle_branco">Website</h2>
                <h2 class="subtitle_cinza">Website</h2>
                <h2 class="subtitle_branco">Website</h2><br>
            </div>
        </div>
    </div>
</main>
<footer>

</footer>
<script src="projetoX.js"></script>
</body>
</html>

