window.onload = function () { 
        
    // Defino variables globales

    var nombres = document.getElementById('nombre');
    var descripcion = document.getElementById('descripcion');
    var duracion = document.getElementById('duracion');
    var horarios = document.getElementById('horarios');
    var requisitos = document.getElementById('requisitos');
    var precio = document.getElementById('precio');
    var cuotas = document.getElementById('cuotas');
    var nombreImagen = document.getElementById('nombreImagen');
    var boton_submit = document.getElementById('boton_submit');
    var formulario = document.getElementById('form4');
    
   console.log ('validandoporfront')
  //   Evento 2
    formulario.addEventListener('submit',function(event){ 
        event.preventDefault();
        funcion_comprobacion();  
    })


    // Funcion validación (utilizo función para no repetir dos veces en el código, esto es la finalidad principal de una función)

    function funcion_comprobacion(){

        if ( (nombres.value=="") || (descripcion.value=="") || (duracion.value=="") || (horarios.value=="") || (requisitos.value=="") || (precio.value=="") || (cuotas.value=="") || (nombreImagen.value=="") ) {
            alert("Complete los campos con el formato correspondiente");
        }
        else{
            formulario.submit(); // se realiza el submit (va para el backend con los campos validados)
        }

    }



   
}


