window.onload = function () { 
        
    // Defino variables globales

    
    var email = document.getElementById('email');
    var clave = document.getElementById('clave');
    var boton_submit = document.getElementById('boton_submit');
    var formulario = document.getElementById('form2');
    
   console.log ('validandoporfront')
  //   Evento 2
    formulario.addEventListener('submit',function(event){ 
        event.preventDefault();
        funcion_comprobacione();  
    })


    // Funcion validación (utilizo función para no repetir dos veces en el código, esto es la finalidad principal de una función)

    function funcion_comprobacione(){

        if ( (email.value=="") ||  (clave.value=="") || (!email.value.includes("@")) ) {
            alert("Complete los campos con el formato correspondiente");
        }
        else{
            formulario.submit(); // se realiza el submit (va para el backend con los campos validados)
        }

    }



   
}


