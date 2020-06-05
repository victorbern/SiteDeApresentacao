var formBusca = document.getElementById('form');
var navMenu = document.getElementById('menu');
var dropMenu = document.getElementById('menu-dropdown');
var menuDropLink = document.querySelector('.a-drop');
var menuItens = document.querySelector('.div-itens');

function myFunction(x) {
    if(x.matches) {
        menuItens.style.display = "none";
        dropMenu.style.display = "block";
        menuDropLink.style.display = "block";
    } else {
        dropMenu.style.display = "none";
        menuDropLink.style.display = "none";
        menuItens.style.display = "inline";
    }
}


var x = window.matchMedia("(max-width: 820px)")
myFunction(x)
x.addListener(myFunction)

function abrirPesquisa(){
    console.log("Ola");
}


function abrirDropdown (){
    var div = document.querySelector('.dropdown-content');
    div.style.display = "block";
}

function fecharDropdown (){
    var div = document.querySelector('.dropdown-content');
    div.style.display = "none";
}

