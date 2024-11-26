function chek_on(event){
    event.preventDefault();
    var valorFactura = document.getElementById("costoFactura").value;
    var mensaje = document.getElementById("typeError1");  // Mensaje de error


    valorFactura = Number(valorFactura);
    if( isNaN(valorFactura)){
        mensaje.style.display = "block";
        mensaje.innerHTML = "* ¡Error!, el tipo de dato debe ser numérico.";

    }else{
        asterisk.style.display = "none";
        mensaje.style.display = "none";
    }

}

