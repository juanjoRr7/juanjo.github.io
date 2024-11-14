const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('spread');
});


window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target !== menu && e.target !== hamburger) {
        menu.classList.remove('spread');
    }
});

let index = 0;

function moverCarrusel(n) {
    let carrusel = document.querySelector('.carrusel');
    let totalImagenes = document.querySelectorAll('.carrusel-container').length;

    index += n;

    if (index >= totalImagenes) {
        index = 0;
    }
    if (index < 0) {
        index = totalImagenes - 1;
    }

  
    carrusel.style.transform = 'translateX(' + (-index * 100) + '%)';
}
var modal = document.getElementById("myModal");

// Función para abrir la modal
function openModal(img) {
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt; // Mostrar el texto alternativo de la imagen
}

// Función para cerrar la modal
function closeModal() {
    modal.style.display = "none";
}