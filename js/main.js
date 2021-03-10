//Creacion de funcion constructora y objetos
class Cellphones {
    constructor(marca, modelo, so, pantalla, color, camara, precio, stock, fotofront, fotoback) {
        this.marca = marca;
        this.modelo = modelo;
        this.so = so;
        this.pantalla = pantalla;
        this.color = color;
        this.camara = camara;
        this.precio = precio;
        this.stock = stock;
        this.fotofront = fotofront;
        this.fotoback = fotoback;
    }
    sumarPrecio(agregado) {
        this.precio += agregado;
    }

    mayuscula() {
        this.color.charAt(0).toUpperCase() + this.color.slice(1);
    }
}

//Traer Data
let celulares = [];
function traerData() {
    $.getJSON("data/data.json", (respuesta) => {
        celulares = respuesta;
        crearArray(celulares);
        crearFiltroColor(celulares);
        crearFiltroMarca(celulares);
    });
};

//Funcion que pide el nombre si no esta en el Storage, si esta lo usa en el saludo
function nameStorage() {
    let ingreso = "";
    if (!localStorage.getItem("name")) {
        let padreSaludo = document.getElementById("bienvenida");
        let saludo = document.createElement("p");
        saludo.innerHTML = `<h5 class="saludo">Hola Extraño!, vamos a buscar tu celular!, queres <button id="registro" class="btn btn-info">registrarte?</button></h5>`;
        padreSaludo.appendChild(saludo);
    } else if (localStorage.getItem("name")) {
        ingreso = localStorage.getItem("name");
        if (localStorage.getItem("comprado")) {
            let padreSaludo = document.getElementById("bienvenida");
            let saludo = document.createElement("p");
            saludo.innerHTML =
                `<h5 class="saludo">Hola ${ingreso}, tenes un celular en tu carrito de compras</h5>
                <button class="comprar btn btn-info" id="compraRecuperar">Ir carrito de compras</button>`;

            padreSaludo.appendChild(saludo);
        } else {
            let padreSaludo = document.getElementById("bienvenida");
            let saludo = document.createElement("p");
            saludo.innerHTML = `<h5 class="saludo">Hola ${ingreso}, vamos a buscar tu celular</h5>`;
            padreSaludo.appendChild(saludo);
        }
    }


}

//Creo un flag dentro del id tarjetas para ubicar lo que estoy creando
function crearFlagListadoCelulares() {
    ubicacion = document.getElementById("tarjetas");
    let contenedor = document.createElement("div");
    contenedor.id = "unID";
    ubicacion.appendChild(contenedor)
    padre = document.getElementById("unID");
}

//Crear Filtro desde array
function crearFiltroColor(celulares) {
    ubicacion = document.getElementById("filtros");
    FormData = document.createElement("form");
    FormData.id = "formColor"
    FormData.className = "form-check col-4";
    ubicacion.appendChild(FormData);
    let colores = [];
    for (celu in celulares) {
        if ((!colores.includes(celulares[celu].color)) || (colores.length == 0)) {
            ubicacion = document.getElementById("formColor");
            div = document.createElement("div");
            div.className = "form-check filtroBusqueda";
            div.id = celulares[celu].color;
            ubicacion.appendChild(div);
            ubicacion = document.getElementById(celulares[celu].color);
            input = document.createElement("input");
            input.type = "checkbox";
            input.id = celulares[celu].color;
            input.name = celulares[celu].color;
            input.value = celulares[celu].color;
            input.className = "form-check-input";
            label = document.createElement("label");
            label.for = celulares[celu].color;
            label.className = "form-check-label form-label";
            label.innerHTML = `${celulares[celu].color.charAt(0).toUpperCase()}${celulares[celu].color.slice(1)}`;
            ubicacion.appendChild(input);
            ubicacion.appendChild(label);
            colores.push(celulares[celu].color);
        } else {

        }
        sessionStorage.setItem("colores", colores);
    }

}

function crearFiltroMarca(celulares) {
    ubicacion = document.getElementById("filtros");
    FormData = document.createElement("form");
    FormData.id = "formMarca"
    FormData.className = "form-check col-4";
    ubicacion.appendChild(FormData);
    let colores = [];
    for (celu in celulares) {
        if ((!colores.includes(celulares[celu].marca)) || (colores.length == 0)) {
            ubicacion = document.getElementById("formMarca");
            div = document.createElement("div");
            div.className = "filtroBusqueda form-check col-4";
            div.id = celulares[celu].marca;
            ubicacion.appendChild(div);
            ubicacion = document.getElementById(celulares[celu].marca);
            input = document.createElement("input");
            input.type = "checkbox";
            input.id = celulares[celu].marca;
            input.name = celulares[celu].marca;
            input.value = celulares[celu].marca;
            input.className = "form-check-input";
            label = document.createElement("label");
            label.for = celulares[celu].marca;
            label.className = "form-check-label form-label";
            label.innerHTML = `${celulares[celu].marca.charAt(0).toUpperCase()}${celulares[celu].marca.slice(1)}`;
            ubicacion.appendChild(input);
            ubicacion.appendChild(label);
            colores.push(celulares[celu].marca);
        } else {
        }
    }
}

//Crear divs desde array celulares
function cards(celular) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML =
        `<div class="row mb-5">
                    <div class="col-xl-12" >
                        <div class="media-boxes">
                            <div class="media">
                                <div class="media__price">
                                    <img src=${celular.fotofront} alt="Image" class="mr-3 container__image">
                                    <div class="media__btn">
                                        <h5>$${celular.precio}</h5>
                                        <button class="btn btn-info" id="btnModal__${celular.marca}__${celular.modelo}__${celular.color}">Detalles</button>
                                        <div id="modal" class="modalContainer">
                                            <div id="modal-content" class="modal-content">
                                            </div>
                                        </div>
                                        <button class="btn btn-info" id="comprar__${celular.marca}__${celular.modelo}__${celular.color}">Comprar</button>
                                    </div>
                                </div>
                                <div class="media-body tm-bg-gray">
                                    <div class="tm-description-box">
                                        <h5 class="tm-text-blue card__description"> ${celular.marca} ${celular.modelo} ${celular.color}
                                        </h5>
                                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam similique vitae
                                        molestias voluptatum maiores in numquam aut eum soluta voluptas, quaerat voluptates officiis
                                        possimus fugiat odit temporibus. Error, quis!<a href="https:plus.google.com/+tooplate"
                                        target="_parent"></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> `;
    padre.appendChild(contenedor);
}

function crearArray(array) {
    for (celu in array) {
        celular = array[celu];
        cards(celular);
    }
}

//Funcion borrar los div creados desde el array
function eliminarCards() {
    let nodo = document.getElementById("unID");
    nodo.remove();
}

//Chequea que Checkbox esta checked
function filtros() {
    let filtroMarca = [];
    let filtroColor = [];
    let inputs = document.querySelectorAll("#formMarca input[type=checkbox]");
    let checkboxsChecked = [];
    for (input of inputs) {
        if (input.checked) {
            checkboxsChecked.push(input.id);
        }
    }
    for (check in checkboxsChecked) {
        for (celu in celulares) {
            if (checkboxsChecked[check] == celulares[celu].marca) {
                filtroMarca.push(celulares[celu])
            }
        }
    }
    if (filtroMarca.length == 0) {
        flag = true;
        filtroMarca = celulares;
    }
    inputs = document.querySelectorAll("#formColor input[type=checkbox]");
    checkboxsChecked = [];
    for (input of inputs) {
        if (input.checked) {
            checkboxsChecked.push(input.id);
        }
    }
    if ((checkboxsChecked.length == 0) && (filtroMarca != 0)) {
        filtroColor = filtroMarca;
    } else {
        for (check in checkboxsChecked) {
            for (filtro in filtroMarca) {
                if (checkboxsChecked[check] == filtroMarca[filtro].color) {
                    filtroColor.push(filtroMarca[filtro])
                }
            }
        }
    }
    crearFlagListadoCelulares();
    crearArray(filtroColor.sort());
}

function modal(id) {
    var modal = document.getElementById("modal");
    var body = document.getElementsByTagName("body")[0];
    const borrar = document.getElementById("modal-content");
    while (borrar.firstChild) {
        borrar.removeChild(borrar.lastChild);
    }
    let identificador = id.split("__");
    let celularElegido = "";
    for (celu in celulares) {
        if (celulares[celu].marca == identificador[1]) {
            if (celulares[celu].modelo == identificador[2]) {
                if (celulares[celu].color == identificador[3]) {
                    celularElegido = "";
                    celularElegido = celulares[celu];
                }
            }
        }
    }
    if (id.slice(0, 8) === "btnModal") {
        $("#modal").fadeIn();
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        padre = document.getElementById("modal-content");
        let contenedor = document.createElement("div");
        var name = "";
        contenedor.innerHTML = `
            <span class="close">×</span>
            <div class="modalSpecs"> 
                <div>
                    <img src="${celularElegido.fotofront}" alt="Image" class="mr-3 container__image">
                    <img src="${celularElegido.fotoback}" alt="Image" class="mr-3 container__image">
                </div>
                <div>
                    <h2>${celularElegido.marca} ${celularElegido.modelo}</h2>
                    <p class="tituloSpecs">Color: <span>${celularElegido.color}</span></p>
                    <p class="tituloSpecs">Sistema Operativo: <span>${celularElegido.so}</span></p>
                    <p class="tituloSpecs">Pantalla: <span>${celularElegido.pantalla}</span></p>
                    <p class="tituloSpecs">Camara: <span>${celularElegido.camara}</span></p>
                    <p class="tituloSpecs">Precio: <span class="precioModal">$${celularElegido.precio}</span></p>
                </div>
            </div>
            `;
        padre.appendChild(contenedor);

    } else if (id.slice(0, 7) === "comprar") {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        padre = document.getElementById("modal-content");
        let ingreso = "";
        if (!localStorage.getItem("name")) {
            ingreso = prompt("Hola, cual es tu nombre?")
            localStorage.setItem("name", ingreso);
        } else {
            ingreso = localStorage.getItem("name");
        }
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `
            <span class="close">×</span>
            <div class="modalCompra"> 
                <p>${ingreso}, vas a comprar un ${celularElegido.marca} ${celularElegido.modelo} ${celularElegido.color}</p>
                <p>Vas a pagar $${celularElegido.precio}</p>
                <button id="formasdePago" class="btn btn-info">Formas de Pago</button>
            </div>
            `;
        padre.appendChild(contenedor);
        localStorage.removeItem("comprado");
        localStorage.setItem("comprado", JSON.stringify(celularElegido));
    } else if (id == "formasdePago") {
        modal.style.display = "none";
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        padre = document.getElementById("modal-content");
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `
            <span class="close">×</span>
            <div class="comprado"> 
                Gracias por tu comprar!
            </div>
            `;
        padre.appendChild(contenedor);
        localStorage.removeItem("comprado");
    } else if (id.slice(0, 7) === "compraR") {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        padre = document.getElementById("modal-content");
        let ingreso = "";
        if (!localStorage.getItem("name")) {
            ingreso = prompt("Hola, cual es tu nombre?")
            localStorage.setItem("name", ingreso);
        } else {
            ingreso = localStorage.getItem("name");
        }

        celularElegido = localStorage.getItem("comprado");
        console.log(celularElegido);
        celularElegido = JSON.parse(celularElegido);
        console.log(celularElegido);

        let contenedor = document.createElement("div");
        contenedor.innerHTML = `
            <span class="close">×</span>
            <div class="modalCompra"> 
                <p>${ingreso}, vas a comprar un ${celularElegido.marca} ${celularElegido.modelo} ${celularElegido.color}</p>
                <p>Vas a pagar $${celularElegido.precio}</p>
                <button id="formasdePago" class=""btn btn-info>Formas de Pago</button>
            </div>
            `;
        padre.appendChild(contenedor);

    } else if (id == "registro") {
        $("#modal").fadeIn();
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
        padre = document.getElementById("modal-content");
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `
            <span class="close">×</span>
            <div class="modalRegistro"> 
                <div>
                    <h2>Registro</h2>
                    <form id="formularioRegistro" class"formularioRegistro">
                        <label class="registro form-label">Nombre</label>
                        <input type="text" name="nombre" id="nombre" class="registro" value="">
                        <label class="registro form-label">Email</label>
                        <input type="mail" name="mail" id="mail" class="registro" value="">
                        <input type="button" class="btn btn-info" name="botonReg" id="botonReg" value="Aceptar">
                    </form>
                </div>                
            </div>
            `;
        padre.appendChild(contenedor);
        $("#botonReg").click(function () {
            name = $("#nombre").val();
            localStorage.setItem("name", name);
            modal.style.display = "none";
            body.style.position = "static";
            body.style.height = "100%";
            body.style.overflow = "visible";
            location.reload();
        }
        )
    } else if (id == "enviarMail") {
        name = $("#mailSuscribir").val();
        var texto = name;
        var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (regex.test(texto)) {
            if (name != "") {
                $.post("https://jsonplaceholder.typicode.com/posts", name, function (data, status) {
                    console.log(data);
                    console.log(status);
                    if (status == "success") {
                        $("#modal").fadeIn();
                        modal.style.display = "block";
                        body.style.position = "static";
                        body.style.height = "100%";
                        body.style.overflow = "hidden";
                        padre = document.getElementById("modal-content");
                        let contenedor = document.createElement("div");
                        contenedor.innerHTML = `
                        <span class="close">×</span>
                            <div class="modalRegistro">
                            <div>
                                <h2>Registrado con exito</h2>
                            </div>                
                        </div>
                        `;
                        padre.appendChild(contenedor);
                    }
                }
                );
            }
        }else{
            $("#modal").fadeIn();
                        modal.style.display = "block";
                        body.style.position = "static";
                        body.style.height = "100%";
                        body.style.overflow = "hidden";
                        padre = document.getElementById("modal-content");
                        let contenedor = document.createElement("div");
                        contenedor.innerHTML = `
                        <span class="close">×</span>
                            <div class="modalRegistro">
                            <div>
                                <h2>Ingrese un mail valido</h2>
                            </div>                
                        </div>
                        `;
                        padre.appendChild(contenedor);
        }
    }

    $(".modalContainer").on("click", "span", function () {
        modal.style.display = "none";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "visible";
        location.reload();
    });
}


//Flujo de la web


nameStorage();
crearFlagListadoCelulares();
traerData();
crearFiltroMarca();
crearFiltroColor();

$(document).on('click', 'button', function () {
    let id = this.id;
    if (id === "btnFiltro") {
        eliminarCards();
        filtros();
    } else {
        modal(id);
    }
});