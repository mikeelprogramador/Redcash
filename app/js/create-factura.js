function chek_on(event){
    event.preventDefault();
    document.getElementById('overlay').style.display = 'block';
    eel.abrir_subventana();

}

function validarDatos(event) {
    if( event.key === "-" || event.key === "e"){
        event.preventDefault();
    }
}

function checkbok(){
    let chek = document.getElementById("iva");
    let contenido = document.getElementById("valor-iva")
    if ( chek.checked){
        contenido.style.display = "block";
    }else{
        contenido.style.display = "none";
    }
}




function unlockMainWindow() {
    // Ocultar el overlay (desbloquear)
    document.getElementById('overlay').style.display = 'none';
}