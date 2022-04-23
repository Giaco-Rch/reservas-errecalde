//declaro la funcion saludar
function pedirDatos(titulo, catedra, nombre, fecha, horario, lugar){
    console.log ("Evento: " + titulo +"\n"+ "Organiza: " + catedra +"\n"+ "Responsable: " + nombre +"\n"+ "Fecha: " + fecha +"\n"+ "Horario: " + horario +"\n"+ "Lugar: " + lugar);
    alert("Bienvenido "+nombre+", aquí podrá reservar los equipos para su evento.")
}
let titulo = prompt("Titulo del evento: ");
let catedra = prompt("Quien organiza el evento: ");
let nombre = prompt("Nombre del Responsable: ");
let fecha = prompt("Fecha Requerida: ");
let horario = prompt("Horario de uso de los equipos: ");
let lugar = prompt("Donde se utilizarán los equipos: ");

  // declaro la funcion elegir equipo
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
    
    //aca vuelvo a preguntar por el prompt de opcion para terminar el proceso
    opcion = prompt(
        "Necesita mas equipos? \n 1: Reservar otro Equipo  \n 2: Finalizar Reserva"
    );
  }
  
  
  // main
  //declaro variables
  let equipo;
  
//llamo a la funcion pedirDatos
    pedirDatos(titulo, catedra, nombre, fecha, horario, lugar);

  elegirEquipos();
  //agrego bucle while, mientras la opcion no sea 6...
  
  while(opcion !== "2"){
    if(opcion === "1"){
    elegirEquipos();}
    
    if (opcion ==="2"){break}; 

}
alert("Gracias por utilizar nuestro servicio");