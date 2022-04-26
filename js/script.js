let pizzas = ["Margherita", "4 stagioni", "Esuberante", "La regina"];
let pastas = ["Quattro Formaggi", "Renato", "Frutti di mare", "Parisienne"];
let vinos = ["Espumantes", "Rosso", "Bianco", "Blends"];
let carta = {
    pizzas: pizzas,
    pastas: pastas,
    vinos: vinos,
}
let carrito = []
const saludar = () => {
    let nombre;

    do {
        nombre = prompt("Indicanos tu nombre :");

    } while (nombre === "" || !isNaN(nombre));
    alert(`¡Ciao ${nombre}!, bienvenido a Soragna`);
};
saludar()

const productos = () => {
    let opcionesProductos = parseInt(prompt(`Elija una de las siguientes opciones del menu:\n 1)Pizzas\n 2)Pastas\n 3)Vinos`));
    let nombre;
    let opcProductosAux;
    switch (opcionesProductos) {
        case 1:
            nombre = "Pizzas"
            opcProductosAux = carta["pizzas"]
            break
        case 2:
            nombre = "Pastas"
            opcProductosAux = carta["pastas"]
            break
        case 3:
            nombre = "Vinos"
            opcProductosAux = carta["vinos"]
            break
    };
 subProducto(nombre, opcProductosAux)
 subProducto(nombre, opcProductosAux)
 subProducto(nombre, opcProductosAux)
 alert("USTED HA ELEGIDO LO SIGUIENTE:\n" + carrito)
};

const subProducto = (nombre, array) => {
    let mensaje = ""
    for (let i = 0; i < array.length; i++) {
        mensaje += `\n ${i+1}) ${array[i]}` 
    }
    let opcionesProductos = parseInt(prompt(`usted eligió ${nombre} las siguientes opciones son: ${mensaje}`));
    carrito.push(array[opcionesProductos - 1]) 
}

productos()
