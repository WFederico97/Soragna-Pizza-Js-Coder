//Variables declaradas
let productos = []
let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
let bodyCarrito = document.querySelector("#canvaCarritoBody");
let totalCompra = document.querySelector('#totalCompra')

//Fetch
async function obtenerProductos() {
    const response = await fetch("../js/productos.json");
    return await response.json();
}

//Funcion para imprimir los productos del json en mi html
const mostrarProductos = () => {
    let divProductos = document.querySelector('#productosCarta');
    divProductos.addEventListener('click', (e) => {
        añadirCarrito(e);
    });

    obtenerProductos().then((producto) => {
        productos = producto
        producto.forEach((element) => {
            const { imagen, nombre, precio, id } = element;
            divProductos.innerHTML += `
            <div class="col container-fluid">    
                <div class="card cardCarta border-primary mb-3 bg-light bg-opacity-25"> 
                    <div class="card-header">
                        <img src="${imagen}" class="img-fluid">
                    </div>
                    <div class="card-body">
                        <h3>${nombre}</h3>
                        <p>$${precio}</p>
                    </div>
                </div>
                <button type="button" class="btn btn-success btn-outline-dark"  id="${id}" >
                Añadir al carrito
              </button>
            </div>    
            `
        })
    })
    subtotal();

}
//Funcion de añadir cada producto al carrito a traves del btn correspondiente
const añadirCarrito = (e) => {
    let producto = productos.find(producto => producto && producto.id == e.target.id)
    if (carrito.find(producto => producto && producto.id == e.target.id)) {
        for (let index = 0; index < carrito.length; index++) {
            const producto = carrito[index];
            if (producto.id == e.target.id) {
                producto.cantidad++
            }
        }
    } else
        carrito.push({ ...producto, cantidad: 1, })
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Toastify({
        text: "¡Bravo! Producto agregado",
        duration: 2000,
        class: "toastCarrito",
        style: {
            background: "linear-gradient(to right, #0BD605, #FFFFFF, #FF0000)",
            color: "#000000"
        },
        close: true,
    }).showToast();

    subtotal()

}

//Funcion de mostrar los productos que quiero comprar en el canva del carrito de compras
const subtotal = () => {
    bodyCarrito.innerHTML = ``
    carrito.forEach(Carta => {
        bodyCarrito.innerHTML += `
        <div class="card cardCarrito p-3" style="width: 18rem;">
        <img src=${Carta.imagen} class="img-fluid card-img-top" />
        <div class="card-body">
        <h3 class="card-title text-light fs-bold">${Carta.nombre}</h3>
        <h4 class="card-text"> Precio unitario: $${Carta.precio} </h4>
        <h4> Cantidad:  ${Carta.cantidad} </h4>
        </div>
        `
    });
    mostrarTotal()

}

//Monto final de los productos en el carrito de compras
const mostrarTotal = () => {
    let total = carrito.reduce((acc, ite) => acc + ite.precio * ite.cantidad, 0);
    totalCompra.innerHTML = `  
    <div class="card  bg-success  style="width: 18rem;">
        <h2 class="card-header text-light" >El total es : </h2>
        <div class="card-body" style="width: 18rem;">
            <h3 class="card-text text-light">$ ${total} </h3>
        </div>
    </div>    
        `;

};
//Borrar carrito 
const vaciarCarrito = () => {
    carrito = []
    bodyCarrito.innerHTML = ''
    totalCompra.innerHTML = ''

    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//Realizar la compra de mis productos
const finalizarCompra = () => {
    carrito = []
    bodyCarrito.innerHTML = ''
    totalCompra.innerHTML = ''

    localStorage.setItem("carrito", JSON.stringify(carrito))
    Swal.fire({
        title: '¡Bravissimo!',
        text: '¡Tu compra se ha realizado con éxito, espero que la disfrutes!',
        imageUrl: '../assets/images/italianoModal.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        background: "linear-gradient(to right, #0BD605, #FFFFFF, #FF0000)",
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
    })
}

mostrarProductos();