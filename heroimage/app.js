let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.boton');

function changeSlide(index) {
    // Eliminar la clase active del slide anterior y del botón
    slides[currentSlide].classList.remove('active');
    buttons[currentSlide].classList.remove('active');

    // Agregar la clase active al nuevo slide y al botón correspondiente
    slides[index].classList.add('active');
    buttons[index].classList.add('active');

    // Actualizar el índice de la diapositiva actual
    currentSlide = index;
}
