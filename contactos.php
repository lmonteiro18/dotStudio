<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contactos</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <!--https://www.w3schools.com/bootstrap/bootstrap_get_started.asp e
    https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_default&stacked=h
    sites sobre bootstrap-->

    <!-- FontAwesome Script -->
    <script src="https://kit.fontawesome.com/4d4aefe869.js" crossorigin="anonymous"></script>

    <link href="assets/css/header.css" rel="stylesheet" type="text/css">
    <link href="assets/css/footer.css" rel="stylesheet" type="text/css">
    <link href="assets/css/contactos.css" rel="stylesheet" type="text/css">

</head>
<body>

<?php include "header.php" ?>

<main>
    <!------------------------------------------------------------------------------Contactos------------------------------------------------------------------------------>
    <div class="containercontactos">
        <div class="containerstudio">
            <div class="rowcontactos">
                <div class="col-sm-12">
                    <h1 class="titulocontactos">Contactos</h1>
                </div>
            </div>
            <div class="rownomestudio">
                <div class="col-lg-12">
                    <h2 class="titulostudio">... Studio</h2>
                </div>
            </div>
            <div class="rowstudio">
                <div class="col-lg-12 textostudio">
                    <div class="col-lg-5 col-sm-12 morada">
                        <p class="titulocontactosstudio">Morada</p>
                        <p class="textocontactosstudio">Rua Sem Saída, Nº100<br>
                            4000 - 800<br>
                            Coimbra, Portugal</p>
                    </div>
                    <div class="col-lg-4 col-sm-12 emailstudio">
                        <p class="titulocontactosstudio">Email</p>
                        <p class="textocontactosstudio">...studio@gmail.com</p>
                    </div>
                    <div class="col-lg-4 col-sm-12 telefone">
                        <p class="titulocontactosstudio">Contacto Telefónico</p>
                        <p class="textocontactosstudio">910 000 000</p>
                    </div>
                    <div class="col-lg-3 col-sm-12 redessociais">
                        <p class="titulocontactosstudio">Redes Sociais</p>
                        <p class="textocontactosstudio"><a href="https://www.behance.net/">Behance</a><br>
                            <a href="https://www.instagram.com/">Instagram</a><br>
                            <a href="https://pt.linkedin.com/">Linkedin</a></p>
                    </div>
                </div>
            </div>
            <div class="rowinfopessoal">
                <div class="col-lg-12 col-sm-12 infopessoal">
                    <div class="col-lg-4 col-sm-12 infopessoaliris" >
                        <h3>ÍRIS PEREIRA</h3>
                    </div>
                    <div class="col-lg-4 col-sm-12 infopessoaliriscontactos">
                        <h3>ÍRIS PEREIRA</h3>
                        <p><a href="https://www.behance.net/">Behance</a><br><br>
                            <a href="https://pt.linkedin.com/">Linkedin</a></p>
                    </div>
                    <div class="col-lg-4 col-sm-12 infopessoalisa" >
                        <h3>ISA ROXO</h3>
                    </div>
                    <div class="col-lg-4 col-sm-12 infopessoalisacontactos">
                        <h3>ISA ROXO</h3>
                        <p><a href="https://www.behance.net/">Behance</a><br><br>
                            <a href="https://pt.linkedin.com/">Linkedin</a></p>
                    </div>
                    <div class="col-lg-4 col-sm-12 infopessoalluis" >
                        <h3>LUÍS MONTEIRO</h3>
                    </div>
                    <div class="col-lg-4 col-sm-12 infopessoalluiscontactos">
                        <h3>LUÍS MONTEIRO</h3>
                        <p><a href="https://www.behance.net/">Behance</a><br><br>
                            <a href="https://pt.linkedin.com/">Linkedin</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="containerfalaconnoscofundo">
        <div class="containerfalaconnosco">
            <div class="rowfalaconnosco">
                <div class="col-lg-12">
                    <h2 class="titulofalaconnosco">Fala Connosco</h2>
                </div>
            </div>
            <form action="/action_page.php">
                <div class="rownome">
                    <div class="col-lg-4 col-sm-12 rowinputnome">
                        <label class="nome" for="inputnome">Nome</label><br>
                        <input type="text" id="inputnome" name="inputnome" placeholder="Ex: João Antunes">
                    </div>
                    <div class="col-lg-8 col-sm-12 rowinputmensagem">
                        <label class="mensagem" for="inputmensagem">Mensagem</label><br>
                        <textarea id="inputmensagem" name="inputmensagem" placeholder="Escreve aqui a tua mensagem..."></textarea>
                    </div>
                </div>
                <div class="rowemail">
                    <div class="col-lg-4 col-sm-12 rowinputemail">
                        <label class="email" for="inputemail">Email</label><br>
                        <input type="email" id="inputemail" name="inputemail" placeholder="Ex: joaoantunes@gmail.com">
                    </div>
                </div>
                <div class="col-lg-12 rowsubmit">
                    <input class="submit" type="submit" value="Submit">
                </div>
        </div>
    </div>
</main>

    <?php include "footer.php" ?>

<script src="assets/js/contactos.js"></script>
</body>

