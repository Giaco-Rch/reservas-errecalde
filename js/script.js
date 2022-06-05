const contenedor = document.getElementById("container");
contenedor.innerHTML="";
fetch('js/equipos.json')
.then((response)=>response.json())
.then((data)=>{
    data.forEach((data, indice)=>{
    let card=document.createElement("div")
    card.classList.add("card","col-sm-12", "col-lg-3", "col-md-3" )
    let html= `<img src="${data.imagen}" class="card-img-top" alt="${data.nombre}">
    <div class="card-body">
      <h5 class="card-title">${data.nombre}</h5>
      <p class="card-text">Stock disponible: ${data.stock}</p>
      <a href="#cart" class="btn btn-primary" onClick = "agregarReserva(${indice})">Seleccionar</a>
    </div>`;
    card.innerHTML = html;
    contenedor.appendChild(card);
})});

let modalCart = document.getElementById("cart");
const agregarReserva = (indiceEquipoarray)=>{

    fetch('js/equipos.json')
    .then((response)=>response.json())
    .then((data)=>{
    const indiceEqReserva = cart.findIndex((elemento)=>{
        return elemento.id === data[indiceEquipoarray].id;
    });

    if(indiceEqReserva === -1){
        const equipoAgregar = data[indiceEquipoarray];
        equipoAgregar.cantidad = 1;
        cart.push(equipoAgregar);
        dibujarCart();
        localStorage.setItem("reserva", JSON.stringify(cart));

    }
    else{
        cart[indiceEqReserva].cantidad += 1;
        dibujarCart()
    }
})};

const dibujarCart =()=>{
    modalCart.className = "cart";
    modalCart.innerHTML = "";

    fetch('js/equipos.json')
    .then((response)=>response.json())
    .then((data)=>{
    
    if (cart.length > 0) {
        cart.forEach((data, indice)=>{
            const cartContainer = document.createElement("div");
            cartContainer.className = "equipo-cart";
            cartContainer.innerHTML = `<img class="car-img" src="${data.imagen}">
                                    <div class="equipo-details">${data.nombre}</div>
                                    <div class="equipo-details"> Cantidad: ${data.cantidad}</div>
                                    <button class="btn btn-danger"  id="remove-eq" onClick="removeEquipo(${indice})">Eliminar Equipo</button>
                                    `;
        modalCart.appendChild(cartContainer); 
        });
     const totalContainer = document.createElement("div");
    totalContainer.className = "total-cart";
    totalContainer.innerHTML = `<button class= "btn btn-primary finalizar" id="finalizar" onClick="finalizarReserva()" "mostrarFormularioReserva()"> CONTINUAR </button>`;
    modalCart.appendChild(totalContainer);
    }else{
        modalCart.classList.remove("cart")
    }
})};

let cart = [];

const removeEquipo = (indice) => {
    cart.splice(indice, 1);
    dibujarCart();
};
const finalizarReserva = () => {
    modalCart.innerHTML = "";
    const reservaFinalizada = `<div class="datos-cliente">
    <h2 class="datos-parrafo"> Complete el formulario con sus datos realizar la reserva</h2>
    </div>`
    document.getElementById('formularioReserva').style.display = "block";
    modalCart.innerHTML = reservaFinalizada;
};
