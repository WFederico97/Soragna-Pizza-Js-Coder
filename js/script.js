/*Saludo al usuario */
const divSaludo = document.querySelector("#SaludoUsuario");
const containerJs = document.querySelector("#CarritoDeCompras")
const saludar = () => {
    alert("¡Bienvenido a Soragna Pizza e Pasta!");
    let nombre = prompt("Ingrese su nombre: ");
    while(nombre === "" || !isNaN(parseInt(nombre))){
        nombre = prompt("Ingrese solo valores alfabéticos por favor : ")
    }
    divSaludo.innerHTML = `<h2>!Ciao, ${nombre.toUpperCase()}!</h2>`
};

saludar();


//Constructor de carta 
class Productos {
    constructor(id, tipo, nombre, precio) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.precio = precio;
    }
}
//Pizzas
const Margherita = new Productos(1,"Pizza","Margherita",950);
const cuatroStagioni = new Productos(2,"Pizza","4 Stagioni",1000);
const Esuberante = new Productos(3,"Pizza","Esuberante",1200);
const LaRegina  = new Productos(4,"Pizza","La Regina",1200);
//Pastas
const QuattroFormaggi = new Productos(5,"Pasta","Quattro Formaggi",520);
const Renato = new Productos(6,"Pasta","Renato",750);
const FruttiDiMare = new Productos(7,"Pasta","Frutti di Mare",980);
const Parisienne = new Productos(8,"Pasta","Parissienne",650);
//Vinos
const Espumantes = new Productos(9,"Vino","Espumante",1500);
const Rosso = new Productos(10,"Vino","Rosso",2000);
const Bianco = new Productos(11,"Vino","Bianco",950);
const Blends = new Productos(12,"Vino","Blends",1100);

//Arrays a utilizar
let Carta = [Margherita,cuatroStagioni,Esuberante,LaRegina,
    QuattroFormaggi,Renato,FruttiDiMare,Parisienne,Espumantes,Rosso,Bianco,Blends]
const carrito = []

const consultarCarta = () =>{
    let texto = "";
    for(const a of Carta){
        texto += `${a.id}) ${a.tipo} ${a.nombre} ${a.precio}\n`
    }
    let prod = parseInt(prompt(`Que producto desea llevar?:\n${texto} `))

    if(prod >12 || prod < 1 || isNaN(prod)){
        prod = parseInt(prompt(`Por favor, ingrese una valor admitido: \n${texto}`));
    }
    return prod;
};

let productosSeleccionados;

// funcion donde elegís lo que queres comprar

const llevarProducto = () =>{
    let buscarProducto = Carta.find(
        (element) => element.id === productosSeleccionados 
    );
    

    
    let existencias = carrito.some((element) => element.id === productosSeleccionados)
    console.log(existencias);

    if(existencias){
        buscarProducto.cantidad++
    }else{
        buscarProducto.cantidad = 1
        carrito.push(buscarProducto);
    };



    const continuar = confirm("Desea seguir comprando?");
    
    if(continuar){
        productosSeleccionados = consultarCarta();
        llevarProducto()
    }
}

//funcion donde te muestra lo que elegiste y subtotal

const mostrarProductos = () =>{
    const divPedidos = document.createElement("div");
    divPedidos.className = "pedido fw-bold text-white border border-3 border-success mt-3";
    containerJs.appendChild(divPedidos);

    carrito.forEach((element) => {
        divPedidos.innerHTML += `<div class="ordenes mx-auto bg-info">
        <h3>${element.nombre.toUpperCase()}</h3>
        <h4> Precio unitario: ${element.precio} </h4>
        <h4> Cantidad:  ${element.cantidad} </h4>
        <p> Subtotal: ${element.precio * element.cantidad} </p>

        </div>`
    });
};

//funcion donde te muestra cuanto pagas por todos los productos elegidos

const calcularTotal = () =>{
    let montofinal = document.createElement("div")
    montofinal.className = "ordenes mx-auto bg-success text-white"

    let total = carrito.reduce((acc, ite)=>acc + ite.precio * ite.cantidad ,0)

    montofinal.innerHTML = `<h2>El total es : $${total}</h2>`

    containerJs.appendChild(montofinal);
}

 productosSeleccionados = consultarCarta();
 llevarProducto();
mostrarProductos();
calcularTotal();
