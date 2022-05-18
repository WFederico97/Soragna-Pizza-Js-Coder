
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
        cantidad: 1,
        imagen:"../assets/images/pizzaCard2.jpg"
    },
    {
        id: 2,
        tipo: "Pizza",
        nombre: "Rucula",
        precio: 1200,
        cantidad: 1,
        imagen:"../assets/images/pizzaCard3.jpg"
    },
    {
        id: 3,
        tipo: "Pizza",
        nombre: "Aglio e Cepolla",
        precio: 1200,
        cantidad: 1,
        imagen:"../assets/images/pizzaCard4.jpg"
    },
    {
        id: 4,
        tipo: "Pasta",
        nombre: "Spaghetti alla Carbonara",
        precio: 520,
        cantidad: 1,
        imagen:"../assets/images/pastaCard1.jpg"
    },
    {
        id: 5,
        tipo: "Pasta",
        nombre: "Penne Rigatti Mediterráneo",
        precio: 750,
        cantidad: 1,
        imagen:"../assets/images/pastaCard2.jpg"
    },
    {
        id: 6,
        tipo: "Pasta",
        nombre: "Frutti di Mare",
        precio: 980,
        cantidad: 1,
        imagen: "../assets/images/pastaCard3.jpg"
    },
    {
        id: 7,
        tipo: "Pasta",
        nombre: "Pappardelle alla Bolognese",
        precio: 650,
        cantidad: 1,
        imagen: "../assets/images/pastaCard4.jpg"
    },
    {
        id: 8,
        tipo: "Vino",
        nombre: "Chateaneuf du Pape",
        precio: 1500,
        cantidad: 1,
        imagen:"../assets/images/vinoCard1.jpg"
    },
    {
        id: 9,
        tipo: "Vino",
        nombre: "Campo Viejo Rioja DOM",
        precio: 950,
        cantidad: 1,
        imagen: "../assets/images/vinoCard2.jpg"
    },
    {
        id: 10,
        tipo: "Vino",
        nombre: "Burra Brook vino blanco",
        precio: 1100,
        cantidad: 1,
        imagen: "../assets/images/vinoCard3.jpg"
    },
    {
        id: 11,
        tipo: "Vino",
        nombre: "Madame Cliquot",
        precio: 15000,
        cantidad: 1,
        imagen: "../assets/images/vinoCard4.jpg"
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
    localStorage.setItem("carrito", JSON.stringify(carrito));

    subtotal()
}

let subtotal = () =>{
    bodyCarrito.innerHTML = ``
    carrito.forEach(Carta => {
        bodyCarrito.innerHTML += `
        <div class="card cardCarrito p-3" style="width: 18rem;">
        <img src=${Carta.imagen} class="img-fluid card-img-top" />
        <div class="card-body">
        <h3 class="card-title text-light fs-bold">${Carta.nombre}</h3>
        <h4 class="card-text"> Precio unitario: ${Carta.precio} </h4>
        <h4> Cantidad:  ${Carta.cantidad} </h4>
        </div>
        `
    });
    mostrarTotal()

}

let mostrarTotal = () => {
    let total = carrito.reduce((acc, ite) => acc + ite.precio * ite.cantidad, 0);
    totalCompra.innerHTML = `  
    <div class="card  bg-success style="width: 18rem;">
        <h2 class="card-header text-light" >El total es : </h2>
        <div class="card-body" style="width: 18rem;">
            <h3 class="card-text text-light">$ ${total} </h3>
        </div>
    </div>    
        `;
  };

let vaciarCarrito = () => {
    carrito = []
    bodyCarrito.innerHTML = ''
    totalCompra.innerHTML = ''

    localStorage.setItem("carrito",JSON.stringify(carrito))
}
