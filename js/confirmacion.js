const reserva = JSON.parse(localStorage.getItem("reserva"))
const datos_formulario = JSON.parse (localStorage.getItem("datos_formulario"));
const resumen_reserva = document.getElementById ("resumen_reserva");


//Destructuracion de la LS
const{titulo, nombre, organizador, email, fecha, lugar} = datos_formulario;


let contenido = `<div class="col-md-5">
<h3>Equipos Reservados</h3>
<ul class="list-group list-group-flush">`;

for (let equipo of reserva) {
    contenido +=`<li class="list-group-item"><img src="${equipo.imagen}" width="50">${equipo.nombre} - Cantidad: ${equipo.cantidad}</li>`
}
contenido +=`</ul>
</div>`;
contenido += `<div class="col-md-5">
<h3>Datos del Evento</h3>
<ul class="list-group list-group-flush">
<li class="list-group-item"> Titulo del Evento: <b>${titulo}</b></li>
<li class="list-group-item"> Nombre del Responsable: <b>${nombre}</b></li>
<li class="list-group-item"> Organiza: <b>${organizador}</b></li>
<li class="list-group-item"> email: <b>${email}</b></li>
<li class="list-group-item"> El día: <b>${fecha}</b></li>
<li class="list-group-item"> En: <b>${lugar}</b></li>
</ul>
</div>`;

resumen_reserva.innerHTML = contenido;