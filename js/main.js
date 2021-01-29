//Declarar variables
let celulares = ["Motorola E7", "Samsung A20", "Xiaomi 9"];
let precios = [20000, 30000, 35000];
let eleccion = "";

//Funciones

function mostrarProductos() {
    for (i = 0; i < celulares.length; i++) {
        alert("Si queres un " + celulares[i] + ". Elegi " + [i + 1]);
    }
}

function elegir() {
    return prompt("Elegi que celular queres comprar? 0 si no queres ninguno")
}

function comprar(producto) {
    if (producto < 0) {
        alert("Gracias por tu consulta")
    } else {
        let compra = prompt("Elegiste un " + celulares[producto] + " su valor es de $" + precios[producto] + ". Estas seguro? (S/N)")
        if ((compra == "S") || (compra == "s")) {
            alert("Felicitaciones, el " + celulares[producto] + " ya es tuyo!!!!!")
        } else {
            alert("No conseguiste comprarlo!")
        }
    }
}

function volver(respuesta) {
    if ((respuesta == "S") || (respuesta == "s")) {
        mostrarProductos();
        eleccion = elegir();
        comprar(eleccion - 1);
        volver(prompt("Queres volver a comprar? S/N"));
    } else {
        alert("Nos vemos pronto!")
    }
}

//Flujo del programa

mostrarProductos();
eleccion = elegir();
comprar(eleccion - 1);
volver(prompt("Queres volver a comprar? S/N"));