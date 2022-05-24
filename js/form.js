function validarFormulario(){
    let titulo = document.getElementById("titulo").value;
    let nombre = document.getElementById("nombre").value;
    let organizador = document.getElementById("organizador").value;
    let email = document.getElementById("email").value;
    let fecha = document.getElementById("datepicker").value;
    let lugar = document.getElementById("lugar").value;
    let error_form = document.getElementById("error");

function noti_error(campo){
    Toastify({
        text: "Complete el campo "+campo,
        style: {
          background: "linear-gradient(to right, #DC1C13, #F6BDC0)",
        }
      }).showToast();
}

let datos_formulario = {titulo:titulo, nombre:nombre, organizador:organizador, email:email, fecha:fecha, lugar:lugar}
    localStorage.setItem("datos_formulario", JSON.stringify(datos_formulario));

//nombre.length == 0 ? error_form.innerHTML = `<p class="bg-danger text-white p-3">Ingrese el nombre del responsable!</p>` : error_form.innerHTML = "";


(email.length < 5) || (email.indexOf("@") == -1) || (email.indexOf(".") == -1) || (nombre.length < 5) || (lugar.length < 3) || (fecha.length == 0)? error_form.innerHTML = `<p class="bg-danger text-white p-3">Revise los campos requeridos!</p>` : document.location = "confirmacion.html";

if (nombre.length < 5){ noti_error("nombre"); return false};
if (email.length < 5 || email.indexOf("@") == -1 || email.indexOf(".") == -1){noti_error("email"); return false};
if (fecha.length < 3) {noti_error("fecha"); return false};
if (lugar.length < 3) {noti_error("lugar"); return false};

    //document.location = "confirmacion.html"
    
    }
    document.getElementById("boton_enviar").addEventListener("click", validarFormulario);