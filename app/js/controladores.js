function cargarContenido(codigoRuta) {
    ruta = identicarRuta(codigoRuta);
    eel.cargar_contenido(ruta)(function(contenido) {
        document.getElementById('contenido-Externo').innerHTML = contenido;
    });
}


function identicarRuta(codigoRuta){
    let Rutas = [
        "create-factura.html", 
        "view-factura.html"
    ]
    return Rutas[codigoRuta];
}


function cambiarMouse(event) {

    if (event.type === "mouseover") {
      document.body.style.cursor = "pointer";  // Cambiar el cursor cuando pasa el ratón sobre el elemento
    } else if (event.type === "mouseout") {
      document.body.style.cursor = "default";  // Restaurar el cursor cuando sale el ratón del elemento
    }
  }

  
if (window.innerWidth <= 600){
  document.body.style.overflow = 'hidden'; // Opcional: evita el desplazamiento de la página
}else{
  document.body.style.overflow = 'auto'; // Opcional: evita el desplazamiento de la página
}
