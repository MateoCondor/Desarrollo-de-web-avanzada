document.addEventListener('DOMContentLoaded', function () {
    var options = {
        edge: 'left',
        draggable: true
    };
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

function alternar(seccion) {
    // Oculta todos los divs de contenido
    var secciones = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];
    for (var i = 0; i < secciones.length; i++) {
        var item = secciones[i];
        var elemento = document.getElementById(item);
        if (item === seccion) {
            elemento.classList.remove('hide');
        } else {
            elemento.classList.add('hide');
        }
    }
}

function alternarYCerrar(seccion) {
    alternar(seccion); // Llama a tu función existente para alternar secciones
    var instanciaSidenav = M.Sidenav.getInstance(document.querySelector('.sidenav'));
    instanciaSidenav.close(); // Cierra la barra lateral
}

