let currentIndex = 0;
const container = document.querySelector('.container');
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

    setTimeout(function(){
        container.style.transform = 'translateX(-' + (currentIndex * 25) + '%)';
    }, 100);
});


opciones.forEach(opcion => {
    opcion.addEventListener('mouseenter', () => {
        opcion.style.cursor = 'pointer'; 
    });

    opcion.addEventListener('mouseleave', () => {
        opcion.style.cursor = 'default';  
    });
});


function menu(lugarIndex){

    setTimeout(function(){
        container.style.transform = 'translateX(-' + (lugarIndex * 25) + '%)';
    }, 100);

}
