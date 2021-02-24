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
    saludo.innerHTML = `<h1 class="saludo">Hola ${ingreso}, vamos a buscar tu celular</h1>`;
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

//Crear divs desde array celulares
function cards(celular) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML =
        `<div class="row mb - 5">
                    <div class="col-xl-12" >
                        <div class="media-boxes">
                            <div class="media">
                                <img src=${celular.fotofront} alt="Image" class="mr-3 container__image ">
                                    <div class="media-body tm-bg-gray">
                                        <div class="tm-description-box">
                                            <h5 class="tm-text-blue"> ${celular.marca} ${celular.modelo} ${celular.color.charAt(0).toUpperCase()}${celular.color.slice(1)}</h5>
                                            <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam similique vitae
                                            molestias voluptatum maiores in numquam aut eum soluta voluptas, quaerat voluptates officiis
                                            possimus fugiat odit temporibus. Error, quis!<a href="https://plus.google.com/+tooplate"
                                           target="_parent"></a></p>
                                        </div>
                                    </div>
                            </div>    
                        </div>
                    </div>
                </div>`;
    padre.appendChild(contenedor);
}
function crearArray() {
    for (celu in celulares) {
        celular = celulares[celu];
        cards(celular);
    }
}

//Funcion borrar los div creados desde el array
function eliminarElemento() {
    borrar = document.getElementById("unID");
    if (!borrar) {
        alert("El elemento selecionado no existe");
    } else {
        padre = document.getElementById("tarjetas");
        padre.removeChild(borrar);
    }
    ubicacion = document.getElementById("tarjetas");
    let contenedor = document.createElement("div");
    contenedor.id = "unID";
    ubicacion.appendChild(contenedor)
    padre = document.getElementById("unID");
}

//Funcion buscar x Marca
function buscar(marcaBuscada) {
    let marca = false;
    eliminarElemento();
    for (celu in celulares) {
        if (celulares[celu].marca.toLowerCase() == marcaBuscada.toLowerCase()) {
            let contenedor = document.createElement("div");
            contenedor.innerHTML = `<div class="row mb - 5">
                                    <div class="col-xl-12" >
                                        <div class="media-boxes">
                                            <div class="media">
                                                <img src=${celulares[celu].fotofront} alt="Image" class="mr-3 container__image ">
                                                    <div class="media-body tm-bg-gray">
                                                    <div class="tm-description-box">
                                                        <h5 class="tm-text-blue"> ${celulares[celu].marca} ${celulares[celu].modelo} ${celulares[celu].color.charAt(0).toUpperCase() + celulares[celu].color.slice(1)}</h5>
                                                        <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam similique vitae
                                                        molestias voluptatum maiores in numquam aut eum soluta voluptas, quaerat voluptates officiis
                                                        possimus fugiat odit temporibus. Error, quis!<a href="https://plus.google.com/+tooplate"
                                                            target="_parent"></a></p>
                                                    </div>
                                                    <div class="tm-buy-box">
                                                        <a href="#" class="tm-bg-blue tm-text-white tm-buy">Comprar</a>
                                                        <span class="tm-text-blue tm-price-tag">$ ${celulares[celu].precio}</span>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>`;

            padre.appendChild(contenedor);
            marca = true
        }
    }
    if (marca == false) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h4>No hemos encontrado celulares ${marcaBuscada}`;   
        padre.appendChild(contenedor);
    }
}


//Flujo de la web
nameStorage();
crearFlagListadoCelulares();
crearArray();

let marcarIngresada = document.getElementById("marcaIngresada");
    marcarIngresada.onchange = () => { buscar(marcarIngresada.value); };

let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.onclick = () => {
    
};

