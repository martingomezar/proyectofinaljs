//Ingreso de informacion por prompt, crea un saludo
let ingreso=prompt("Hola, cual es tu nombre?")

let padreSaludo=document.getElementById("bienvenida");
let saludo=document.createElement("p");
saludo.innerHTML=`<h1>Hola ${ingreso}, vamos a buscar tu celular</h1>`;
padreSaludo.appendChild(saludo);

//Creacion de funcion constructora y objetos

class Cellphones {
    constructor(marca, modelo, precio, stock,picture) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.stock = stock;
        this.picture=picture
    }
    celular() {
        return (this.marca + " " + this.modelo + " $" + this.precio);
    }
}

// Creacion de Array con el constructor
const celulares = [];
celulares.push(new Cellphones("Motorola", "E7", 20000, 3,"assets/g9play.jpg"));
celulares.push(new Cellphones("Samsung", "A20", 30000, 4,"assets/samsungA20.jpg"));
celulares.push(new Cellphones("Xiaomi", "9", 35000, 2,"assets/xiaomi.jpg"));

//Crear Tarjetas con el array de telefonos
padre = document.getElementById("tarjetas");

for (celu in celulares) {
console.log(celulares[celu].marca);
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="row mb - 5">
                            <div class="col-xl-12" >
                                <div class="media-boxes">
                                    <div class="media">
                                        <img src=${celulares[celu].picture} alt="Image" class="mr-3 container__image ">
                                            <div class="media-body tm-bg-gray">
                                            <div class="tm-description-box">
                                                <h5 class="tm-text-blue"> ${celulares[celu].marca} ${celulares[celu].modelo}</h5>
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
}