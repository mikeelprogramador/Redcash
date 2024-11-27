window.onload = function() {
    // Mueve la ventana a una posición específica en la pantalla (por ejemplo, 100px desde la izquierda y 100px desde la parte superior)
    window.moveTo(50, 50);  // Cambia estos valores según la posición deseada
    window.resizeTo(400, 100);
}

function closeSubwindow() {
    eel.unlockMainWindow();  // Llamamos a la función Python para desbloquear la ventana principal
    window.close();  // Cierra la subventana
}