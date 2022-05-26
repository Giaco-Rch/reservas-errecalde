let equipos = [{id:1, nombre: "Proyector", imagen: "./img/proyector.jpg",     stock: "6"},
                    {id:2, nombre: "Pc / Notebook", imagen: "./img/pc.jpg", stock: "2"},
                    {id:3, nombre: "Parlante", imagen: "./img/parlante.jpg", stock: "3"},
                    {id:4, nombre: "Microfono", imagen: "./img/mic.jpg", stock: "6"},
                    {id:5, nombre: "VideoConferencia", imagen: "./img/vdc.jpg", stock: "1"}];


const contenedor = document.getElementById("container");
contenedor.innerHTML="";
equipos.forEach((equipo, indice)=>{
    let card=document.createElement("div")
    card.classList.add("card","col-sm-12", "col-lg-3", "col-md-3" )
    let html= `<img src="${equipo.imagen}" class="card-img-top" alt="${equipo.nombre}">
    <div class="card-body">
      <h5 class="card-title">${equipo.nombre}</h5>
      <p class="card-text">Stock disponible: ${equipo.stock}</p>
      <a href="#cart" class="btn btn-primary" onClick = "agregarReserva(${indice})">Seleccionar</a>
    </div>`;
    card.innerHTML = html;
    contenedor.appendChild(card);
});

let modalCart = document.getElementById("cart");
const agregarReserva = (indiceEquipoarray)=>{
    const indiceEqReserva = cart.findIndex((elemento)=>{
        return elemento.id === equipos[indiceEquipoarray].id;
    });
    if(indiceEqReserva === -1){
        const equipoAgregar = equipos[indiceEquipoarray];
        equipoAgregar.cantidad = 1;
        cart.push(equipoAgregar);
        dibujarCart();
        localStorage.setItem("reserva", JSON.stringify(cart));

    }
    else{
        cart[indiceEqReserva].cantidad += 1;
        dibujarCart()
    }
};



const dibujarCart =()=>{
    modalCart.className = "cart";
    modalCart.innerHTML = "";
    if (cart.length > 0) {
        cart.forEach((equipo, indice)=>{
            const cartContainer = document.createElement("div");
            cartContainer.className = "equipo-cart";
            cartContainer.innerHTML = `<img class="car-img" src="${equipo.imagen}">
                                    <div class="equipo-details">${equipo.nombre}</div>
                                    <div class="equipo-details"> Cantidad: ${equipo.cantidad}</div>
                                    <button class="btn btn-danger"  id="remove-eq" onClick="removeEquipo(${indice})">Eliminar Equipo</button>
                                    `;
        modalCart.appendChild(cartContainer); 
        });
     const totalContainer = document.createElement("div");
    totalContainer.className = "total-cart";
    totalContainer.innerHTML = `<button class= "btn btn-primary finalizar" id="finalizar" onClick="finalizarReserva()"> CONTINUAR </button>`;
    modalCart.appendChild(totalContainer);
    }else{
        modalCart.classList.remove("cart")
    }
};

let cart = [];

const removeEquipo = (indice) => {
    cart.splice(indice, 1);
    dibujarCart();
};
const finalizarReserva = () => {
    modalCart.innerHTML = "";
    const reservaFinalizada = `<div class="datos-cliente">
    <h2 class="datos-parrafo"> Complete el formulario con sus datos realizar la reserva</h2>
    </div>`;
    modalCart.innerHTML = reservaFinalizada;
};