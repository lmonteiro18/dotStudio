function showDetalhes() {
    var x = document.getElementById("div_detalhes");
    var y = document.getElementById("subtitle_detalhes");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

/*function showDetalhes() {
    var x = document.getElementById("div_detalhes");
    var y = document.getElementById("subtitle_detalhes");
    if (x.style.height === "auto") {
        x.style.height = "0";
        y.style.display = "block";
    } else {
        x.style.height = "0";
        setTimeout(function () {
            x.style.height = "auto";
        },1);
        y.style.display = "none";
    }
}*/

function showConceito() {
    var x = document.getElementById("div_conceito");
    var y = document.getElementById("subtitle_conceito");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

function showReferencias() {
    var x = document.getElementById("div_referencias");
    var y = document.getElementById("subtitle_referencias");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

function showWebsite() {
    var x = document.getElementById("div_website");
    var y = document.getElementById("subtitle_website");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
    }
}

