document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.addEventListener('click', () => openSection(section));

        const cerrarBoton = section.querySelector('.cerrar-seccion');
        cerrarBoton.addEventListener('click', (event) => {
            event.stopPropagation();
            cerrarSeccion(section);
        });
    });
});

function openSection(section) {
    const sections = document.querySelectorAll('section');
    sections.forEach(s => {
        if (s !== section) {
            s.classList.add('minimizar');
        }
    });

    if (!section.classList.contains('is-expanded')) {
        section.classList.add('is-expanded');
    }
}

function cerrarSeccion(section) {
    section.classList.remove('is-expanded');

    const sections = document.querySelectorAll('section');
    sections.forEach(s => {
        s.classList.remove('minimizar');
    });
}
