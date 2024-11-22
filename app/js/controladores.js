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

