/*Saludo al usuario */
const saludar = () => {
    let titleSaludo = document.querySelector("#titleSaludo");
    let inputNombre = document.querySelector('#inputNombre')
    let formSaludo = document.querySelector('#formSaludo')
    
    formSaludo.addEventListener('submit', (e) =>{
        e.preventDefault();
        titleSaludo.innerHTML = `<h1>¡Benvenuto! ${inputNombre.value.toUpperCase()}, esto es : </h1>`
    });
};
saludar()
//mi base de datos con mis productos
const Carta = [
    {
        id: 1,
        tipo: "Pizza",
        nombre:"Salsiccia",
        precio: 950,

    },
    {
        id: 1,
        tipo: "Pizza",
        nombre:"Margherita",
        precio: 1000,

    },
    {
        id: 1,
        tipo: "Pizza",
        nombre:"Rucula",
        precio: 1200,

    },
    {
        id: 1,
        tipo: "Pizza",
        nombre:"Aglio e Cepolla",
        precio: 1200,

    },
    {
        id: 1,
        tipo: "Pasta",
        nombre:"Spaghetti alla Carbonara",
        precio: 520,

    },
    {
        id: 1,
        tipo: "Pasta",
        nombre:"Penne Rigatti Mediterráneo",
        precio: 750,

    },
    {
        id: 1,
        tipo: "Pasta",
        nombre:"Frutti di Mare",
        precio: 980,

    },
    {
        id: 1,
        tipo: "Pasta",
        nombre:"Pappardelle alla Bolognese",
        precio: 650,

    },
    {
        id: 1,
        tipo: "Vino",
        nombre:"Chateaneuf du Pape",
        precio: 1500,

    },
    {
        id: 1,
        tipo: "Vino",
        nombre:"Campo Viejo Rioja DOM",
        precio: 950,

    },
    {
        id: 1,
        tipo: "Vino",
        nombre:"Burra Brook vino blanco",
        precio: 1100,

    },
    {
        id: 1,
        tipo: "Vino",
        nombre:"Madame Cliquot",
        precio: 15000,

    }
]

let carrito = JSON.parse(localStorage.getItem('carrito')) ?? []
let bodyCarrito = document.querySelector("#canvaCarritoBody")

let seleccionarProducto = () =>{
    let divCards = document.getElementById('divCards')
    divCards.addEventListener('click', (e) =>{
        añadirCarrito(e);
    })
}

let añadirCarrito = (e) =>{
    if(e.target.querySelector('#btnCarrito')){
        setearCarrito(e.target.carrito)
    }
}
//declaro como se cargan los productos a mi carrito
setearCarrito = (Carta) => {
    let producto = {
        id: Carta.querySelector('#btnCarrito').id,
        nombre: Carta.nombre,
        precio: Carta.precio,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id]++
    }

    carrito[producto.id] = {...producto}

    mostrarCarrito();
}
//funcion para imprimir mis productos en el off canva
let mostrarCarrito = () =>{
    bodyCarrito.innerHTML += `
    <div class=" mx-auto bg-info">
    <h3>${Carta.nombre}</h3>
    <h4> Precio unitario: ${Carta.precio} </h4>
    <h4> Cantidad:  ${Carta.cantidad} </h4>
    </div>
    `
    localStorage.setItem("carrito", JSON.stringify(carrito))
}
//funcion de los botones de agregar producto y limpiar el carrito
let botonCarrito = (e) =>{
    //agregar
    if(e.target.e.target.querySelector('#btnCarrito')){
        const product = carrito[e.target.id]
        product.cantidad++;
        carrito[e.target.id] = {...product}
        mostrarCarrito()
    }
    //eliminar
    if(e.target.e.target.querySelector('#btnVaciarCarrito')){
        const product = carrito[e.target.id]
        product.cantidad--;
        if(product === 0){
            delete carrito[e.target.id]
        }
        mostrarCarrito()
    }
    
}
//funcion del total de la compra
let mostrarTotal = () =>{
    
    let total = carrito.reduce((acc, ite)=>acc + ite.precio * ite.cantidad ,0)
    bodyCarrito.innerHTML = `<h6 class="bg-danger">El total es : $${total}</h6>`
    ;
}

//LocalStorage
if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    mostrarCarrito();
  }