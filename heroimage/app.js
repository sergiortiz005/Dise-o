let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.boton');

function changeSlide(index) {
    slides[currentSlide].classList.add('outgoing');
    buttons[currentSlide].classList.remove('active');

    setTimeout(() => {
        slides[currentSlide].classList.remove('outgoing');
        slides[currentSlide].classList.remove('active');
        
        slides[index].classList.add('active');
        buttons[index].classList.add('active');
        
        currentSlide = index;
    }, 500); 
}
