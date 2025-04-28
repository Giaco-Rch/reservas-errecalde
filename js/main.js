const datos=[prompt("Titulo del evento: "), prompt("Que cátedra/oficina organiza el evento: "), prompt("Nombre del Responsable: "), prompt("Fecha Requerida: "), prompt("Horario de uso de los equipos: "), prompt("Donde se utilizarán los equipos: ")]

//Push al array
let observaciones;
datos.push(observaciones = prompt("Observaciones: "));

console.log ("Evento: " +datos[0] +"\n"+ "Organiza: " + datos[1] +"\n"+ "Responsable: " + datos[2] +"\n"+ "Fecha: " + datos[3] +"\n"+ "Horario: " + datos[4] +"\n"+ "Lugar: " + datos[5]+"\n"+"Observaciones: "+observaciones);
    alert("Hola "+datos[2]+"!, aquí podrás reservar los equipos para su evento.");


  // Funcion elegirEquipos

const proyector = {marca:"Epson", stock: 5};
const computadora = {tipo: "Notebook", stock: 2};
function elegirEquipos() {
    equipo = prompt(
        "Elija los equipos que necesita para su evento: \n 1: Proyector \n 2: PC/Notebook \n 3: Parlante \n 4: Micrófonos \n 5: Equipo de VDC \n 6: Salir"); 
    if (equipo === "1") {
        console.log("Reservó un Proyector")
        alert("Seleccionó 1 proyector");
    } else if (equipo ==="2") {
        alert("Seleccionó 1 computadora");
        console.log("Reservó una Computadora")
    } else if (equipo ==="3"){
        alert("Seleccionó 1 parlante");
        console.log("Reservó un Parlante")
    } else if (equipo ==="4"){
        let mics= parseInt(prompt("Cuantos micrófonos necesita?"));
                alert ("Seleccionó "+mics+" micrófonos");
                console.log("Reservó " +mics+" Micrófonos")
    } else if (equipo ==="5"){
        alert("Seleccionó 1 Equipo de Videoconferencias");
        console.log("Reservó un Equipo de VDC")
    } else if (equipo ==="6"){
      opcion = prompt(
        "Seguro quiere salir? \n 1: Volver  \n 2: Finalizar Reserva"
    );  if (opcion === "2"){return};
    }
    
    opcion = prompt(
        "Necesita mas equipos? \n 1: Reservar otro Equipo  \n 2: Finalizar Reserva"
    );
  }
  
  let equipo;
  


  elegirEquipos();
  
  while(opcion !== "2"){
    if(opcion === "1"){
    elegirEquipos();}
    
    if (opcion ==="2"){break}; 

}
alert("Gracias por utilizar nuestro servicio");