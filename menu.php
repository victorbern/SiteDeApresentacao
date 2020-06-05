<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="css/menu.css">
<nav id="menu-dropdown">
  <ul>
    <li class="menu-item-dropdown"><a href="#" class="">Página Inicial</a></li>
    <li class="menu-item-dropdown"><a href="#" class=""><span class="menu-item-link">Pagina 01</span></a></li>
    <li class="menu-item-dropdown"><a href="#" class=""><span class="menu-item-link">Página 02</span></a></li>
    <li class="menu-item-dropdown"><a href="#" class=""><span class="menu-item-link">Página 03</span></a></li>
  </ul>
</nav>
<nav id="menu">
  <ul>
    <div class="div-itens">
      <li class="menu-item"><a href="#" class="menu-link"><span class="menu-item-link">Página Inicial<span></a></li>
      <li class="menu-item"><a href="#" class="menu-link"><span class="menu-item-link">Pagina 01</span></a></li>
      <li class="menu-item"><a href="#" class="menu-link"><span class="menu-item-link">Página 02</span></a></li>
      <li class="menu-item"><a href="#" class="menu-link"><span class="menu-item-link">Página 03</span></a></li>
    </div>
    <a href="#" class="a-drop">Menu</a>
    <div class="div-form">
      <li class="menu-icone" id="icone-search"><a class="menu-link-img"><img src="img/icon_search.png" alt="" onclick="abrirPesquisa()"></a></li>
      <li class="menu-icone icon-close" id="icone-close"><a href="" class="menu-link-img"><img src="img/close_icon" alt="" onclick="fecharPesquisa()"></a></li>
      <form class="form-menu" action="" method="post" id="form-menu">
        <input type="text" name="buscar" value="" class="input-buscar" id="input-buscar">
      </form>
    </div>
    <span></span>
  </ul>

</nav>

<script src="js/menu.js"></script>
<script>
  var formPesquisa = document.getElementById('form-menu');
  var iconeSearch = document.getElementById('icone-search');
  var iconeClose = document.getElementById('icone-close');
  iconeSearch.style.display = "block";
  function abrirPesquisa(){
    formPesquisa.style.display = "block";
    iconeSearch.style.display = "none";
    iconeClose.style.display = "block";
  }
  function fecharPesquisa(){
    iconeClose.style.display = "none";
    formPesquisa.style.display = "none";
    iconeClose.style.display = "block";
  }
</script>