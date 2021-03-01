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

//Funcion que pide el nombre si no esta en el Storage, si esta lo usa en el saludo
function nameStorage() {
    let ingreso = "";
    if (!localStorage.getItem("name")) {
        ingreso = prompt("Hola, cual es tu nombre?")
        localStorage.setItem("name", ingreso);
    } else {
        ingreso = localStorage.getItem("name");
    }
    let padreSaludo = document.getElementById("bienvenida");
    let saludo = document.createElement("p");
    saludo.innerHTML = `<h5 class="saludo">Hola ${ingreso}, vamos a buscar tu celular</h5>`;
    padreSaludo.appendChild(saludo);
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
function crearFiltroColor() {
    ubicacion = document.getElementById("filtros");
    FormData = document.createElement("form");
    FormData.id = "formColor"
    FormData.className = "form-check";
    ubicacion.appendChild(FormData);
    let colores = [];
    for (celu in celulares) {
        if ((!colores.includes(celulares[celu].color)) || (colores.length == 0)) {
            ubicacion = document.getElementById("formColor");
            div = document.createElement("div");
            div.className = "col-4 form-check filtroBusqueda";
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
            label.className = "form-check-label";
            label.innerHTML = `${celulares[celu].color.charAt(0).toUpperCase()}${celulares[celu].color.slice(1)}`;
            ubicacion.appendChild(input);
            ubicacion.appendChild(label);
            colores.push(celulares[celu].color);
        } else {

        }
        sessionStorage.setItem("colores", colores);
    }

}

function crearFiltroMarca() {
    ubicacion = document.getElementById("filtros");
    FormData = document.createElement("form");
    FormData.id = "formMarca"
    FormData.className = "form-check";
    ubicacion.appendChild(FormData);
    let colores = [];
    for (celu in celulares) {
        if ((!colores.includes(celulares[celu].marca)) || (colores.length == 0)) {
            ubicacion = document.getElementById("formMarca");
            div = document.createElement("div");
            div.className = "form-check filtroBusqueda";
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
            label.className = "form-check-label";
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
                                        <button class="btn" id="detalles__${celular.marca}__${celular.modelo}__${celular.color}">Detalles</button>
                                        <button class="btn" id="comprar__${celular.marca}__${celular.modelo}__${celular.color}">Comprar</button>
                                    </div>
                                </div>
                                <div class="media-body tm-bg-gray">
                                    <div class="tm-description-box">
                                        <h5 class="tm-text-blue card__description"> ${celular.marca} ${celular.modelo} ${celular.color.charAt(0).toUpperCase()}${celular.color.slice(1)}</h5>
                                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam similique vitae
                                        molestias voluptatum maiores in numquam aut eum soluta voluptas, quaerat voluptates officiis
                                        possimus fugiat odit temporibus. Error, quis!<a href="https:plus.google.com/+tooplate"
                                        target="_parent"></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
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

//Flujo de la web
nameStorage();
crearFlagListadoCelulares();
crearArray(celulares);
crearFiltroMarca();
crearFiltroColor();

let btnFiltro = document.getElementById("btnFiltro");
btnFiltro.onclick = () => {
    eliminarCards();
    filtros();
}



// let marcarIngresada = document.getElementById("marcaIngresada");
// marcarIngresada.onchange = () => { buscar(marcarIngresada.value); };

// let btnBuscar = document.getElementById("btnBuscar");
// btnBuscar.onclick = () => {};

// let checkColor = document.getElementsByClassName("form-check");
// for (color in checkColor){
//     console.dir(checkColor[color].id);
// }