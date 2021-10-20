window.onload = function () { 

    var c = document.getElementsByClassName('producto');
    var botCarrito = document.getElementsByName('boton-carrito');
    var carrito = document.getElementById('lista-carrito');
    var botComprar = document.getElementById('comprar');
    var botVaciar = document.getElementById('vaciar');

    botCarrito.addEventListener('click', function (event) {
        event.preventDefault();
        console.log(armarCarrito());
    })

    let arrayCursos = [];

    function armarCarrito () {    
        if (arrayCursos == []) {
            arrayCursos.push(c.precio)
            sessionStorage.setItem('carrito', arrayCursos)
        } else {
            arrayCursos = sessionStorage.getItem('carrito')
            arrayCursos.push(c.precio)
            sessionStorage.setItem('carrito', arrayCursos)
        }}
}
/*
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