<script>
let indice = 0;

function mostrarImagen() {
    const imagenes = document.querySelectorAll('.carrusel-imagenes img');
    if (indice >= imagenes.length) {
        indice = 0;
    } else if (indice < 0) {
        indice = imagenes.length - 1;
    }
    const offset = -indice * 100; // Cambia la posición
    document.querySelector('.carrusel-imagenes').style.transform = `translateX(${offset}%)`;
}

function moverCarrusel(direccion) {
    indice += direccion;
    mostrarImagen();
}

// Iniciar el carrusel
mostrarImagen();
</script>