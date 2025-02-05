let currentIndex = 0;
const container = document.querySelector('.container');
const desplazamientoMenu = document.querySelector('.menu');
const sections = document.querySelectorAll('.section');
const opciones = document.querySelectorAll('.opccion');
const totalSections = sections.length;

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll hacia abajo
        currentIndex = (currentIndex + 1) % totalSections;
    } else {
        // Scroll hacia arriba
        currentIndex = (currentIndex - 1 + totalSections) % totalSections;
    }

    movimientoX(currentIndex);
});

function menu(lugarIndex) {
    movimientoX(lugarIndex);
}

function movimientoX(index) {
    setTimeout(function () {
        container.style.transform = 'translateX(-' + (index * 25) + '%)';
        
    }, 100);
}
