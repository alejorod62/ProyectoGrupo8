var c = document.getElementsByClassName('producto');
var b = document.getElementById('agregar-al-carrito');

let arrayCursos = [];
b.onclick = function () {
    if (arrayCursos == []) {
        arrayCursos.push(c.precio)
        sessionStorage.setItem('carrito', arrayCursos)
        console.log(arrayCursos)
    } else {
        arrayCursos = sessionStorage.getItem('carrito')
        arrayCursos.push(c.precio)
        sessionStorage.setItem('carrito', arrayCursos)
        console.log(arrayCursos)
    }
}   