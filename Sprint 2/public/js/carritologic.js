    let arrayCursos = [];

    function agregarCarrito(nombre, precio) {    
        alert("agregado al carrito")
        if (arrayCursos != []) {
            arrayCursos = sessionStorage.getItem('carrito')
        }
        arrayCursos.push({nombre: nombre, precio: precio})
        sessionStorage.setItem('carrito', arrayCursos)
    }

    console.log(sessionStorage.getItem('carrito'))
/*
    p 
    p.innerHTML = 



    function vaciarCarrito () {
    botVaciar.onclick = function(e) {
        event.preventDefault();
        alert('¿Estas seguro?');
        if (arrayCursos !== []) {
            arrayCursos = []
        } else {
            res.redirect('/')
            alert('Tu carrito esta vacío, selecciona algún curso para ver el carrito')
        }
    }*/