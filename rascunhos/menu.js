function myFunction(x) {
    if (x.matches) { // If media query matches
        // let formBusca = document.getElementById('form-menu');
        while (formBusca.firstChild){
            formBusca.removeChild(formBusca.firstChild);
        }
        
        // Nas próximas linhas, criei os elementos comentados dos codigos


        var divPrincipal = document.createElement("div");
        divPrincipal.className = "dropdown";

        var aDrop = document.createElement("a");
        aDrop.href = "#";
        aDrop.className = "a-drop";
        aDrop.textContent = "Buscar no site";
        aDrop.onclick = abrirDropdown;
        

        var div = document.createElement("div");
        div.className = "dropdown-content";

        var p = document.createElement("p");

        var form = document.createElement("form");
        form.className = "dropdown-form-menu";
        form.method = "post";

        var input = document.createElement("input");
        input.type = "text";
        input.name = "buscar";
        input.className = "dropdown-input-buscar";
        
        var button = document.createElement("button");
        button.type = "button";
        button.textContent = "Busca";
        button.className = "dropdown-btnBuscar";


        form.appendChild(input);
        form.appendChild(button);

        p.appendChild(form);

        div.appendChild(p);

        divPrincipal.appendChild(aDrop);
        divPrincipal.appendChild(div);

        divPrincipal.onmouseleave = fecharDropdown;

        formBusca.appendChild(divPrincipal);

        
        
        /*

        Eu criei acima o mesmo que está comentado aqui embaixo

        <div class="dropdown"> -- divPrincipal
            <button class="button-drop"> Buscar no site </button
            <div class="dropdown-content"> -- div
                <p>
                    <form class="dropdown-form-menu" action="" method="post">
                        <input type="text" name="buscar" value="" class="dropdown-input-buscar">
                        <button type="button" name="button" class="dropdown-btnBuscar">Buscar</button>
                    </form>
                </p>
            </div>
        </div>

        */
        

    } else {
        while (formBusca.firstChild){
            formBusca.removeChild(formBusca.firstChild);
        }

        // Nas próximas linhas criei a mesma coisa comentada em baixo do codigo

        var form = document.createElement("form");
        form.className = "form-menu";
        form.method = "post";
        form.id = "form-menu";

        var input = document.createElement("input");
        input.type = "text";
        input.className = "input-buscar";
        input.name = "buscar";

        var button = document.createElement("button");
        button.type = "button";
        button.className = "btnBuscar";
        button.textContent = "Buscar";
        
        form.appendChild(input);
        form.appendChild(button);

        formBusca.appendChild(form);

        /*
        Criei acima a mesma coisa que foi comentada aí embaixo

        <form class="form-menu" action="" method="post" id="form-menu">
            <input type="text" name="buscar" value="" class="input-buscar" id="input-buscar">
            <button type="button" name="button" class="btnBuscar">Buscar</button>
        </form>

        */
        
    }
}
  
var x = window.matchMedia("(max-width: 1040px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)