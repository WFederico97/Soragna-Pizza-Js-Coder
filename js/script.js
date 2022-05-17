
//mi base de datos con mis productos
const Carta = [
    {
        id: 0,
        tipo: "Pizza",
        nombre: "Salsiccia",
        precio: 950,
        cantidad: 1,
        imagen: "../assets/images/pizzaCard1.jpg"
    },
    {
        id: 1,
        tipo: "Pizza",
        nombre: "Margherita",
        precio: 1000,
        cantidad: 1
    },
    {
        id: 2,
        tipo: "Pizza",
        nombre: "Rucula",
        precio: 1200,
        cantidad: 1
    },
    {
        id: 3,
        tipo: "Pizza",
        nombre: "Aglio e Cepolla",
        precio: 1200,
        cantidad: 1
    },
    {
        id: 4,
        tipo: "Pasta",
        nombre: "Spaghetti alla Carbonara",
        precio: 520,
        cantidad: 1
    },
    {
        id: 5,
        tipo: "Pasta",
        nombre: "Penne Rigatti Mediterráneo",
        precio: 750,
        cantidad: 1
    },
    {
        id: 6,
        tipo: "Pasta",
        nombre: "Frutti di Mare",
        precio: 980,
        cantidad: 1
    },
    {
        id: 7,
        tipo: "Pasta",
        nombre: "Pappardelle alla Bolognese",
        precio: 650,
        cantidad: 1
    },
    {
        id: 8,
        tipo: "Vino",
        nombre: "Chateaneuf du Pape",
        precio: 1500,
        cantidad: 1
    },
    {
        id: 9,
        tipo: "Vino",
        nombre: "Campo Viejo Rioja DOM",
        precio: 950,
        cantidad: 1
    },
    {
        id: 10,
        tipo: "Vino",
        nombre: "Burra Brook vino blanco",
        precio: 1100,
        cantidad: 1
    },
    {
        id: 11,
        tipo: "Vino",
        nombre: "Madame Cliquot",
        precio: 15000,
        cantidad: 1
    },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
let bodyCarrito = document.querySelector("#canvaCarritoBody");
let totalCompra = document.querySelector('#totalCompra')


let añadirCarrito = (e) => {
    if (carrito.find(producto => producto.id == e.target.id)) {
        for (let index = 0; index < carrito.length; index++) {
            const producto = carrito[index];
            if (producto.id == e.target.id) {
                producto.cantidad++
            }
        }
          
      
    } else
        carrito.push(Carta[e.target.id])
    console.log(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito));

    subtotal()
}

let subtotal = () =>{
    bodyCarrito.innerHTML = ``
    carrito.forEach(Carta => {
        bodyCarrito.innerHTML += `
        <div class=" mx-auto bg-info">
        <img src=${Carta.imagen} class="img-fluid" />
        <h3>${Carta.nombre}</h3>
        <h4> Precio unitario: ${Carta.precio} </h4>
        <h4> Cantidad:  ${Carta.cantidad} </h4>
        </div>
        `
    });
    mostrarTotal()

}

let mostrarTotal = () => {
    console.log("hola")
    let total = carrito.reduce((acc, ite) => acc + ite.precio * ite.cantidad, 0);
    totalCompra.innerHTML = `<h6 class="bg-danger">El total es : $ ${total} </h6>`;
  };

let vaciarCarrito = () => {
    carrito = []
    bodyCarrito.innerHTML = ''
    totalCompra.innerHTML = ''

    localStorage.setItem("carrito",JSON.stringify(carrito))
}
