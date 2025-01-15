document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.addEventListener('click', () => openSection(section));

        const closeButton = section.querySelector('.close-section');
        closeButton.addEventListener('click', (event) => {
            event.stopPropagation(); 
            closeSection(section);
        });
    });
});

function openSection(section) {
    console.log(section.querySelector('.demo-box').textContent);

    const sections = document.querySelectorAll('.section');
    sections.forEach(s => {
        if (s !== section) {
            s.classList.add('minimizar');
        }
    });

    if (!section.classList.contains('is-expanded')) {
        section.classList.add('is-expanded');
    }
}

function closeSection(section) {
    section.classList.remove('is-expanded');

    const sections = document.querySelectorAll('.section');
    sections.forEach(s => {
        s.classList.remove('minimizar');
    });
}