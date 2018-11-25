function regreso(){
   window.location.hash="no-back-button";
   window.location.hash="Again-No-back-button";
   window.onhashchange=function(){window.location.hash="no-back-button";};
}

function validaAdquisicion(){
    var pais = document.getElementById("paisRegistrarAdquisicion").value.toString();
    var estado = document.getElementById("estRegistrarAdquisicion").value.toString();
    var precio = document.getElementById("precioRegistrarAdquisicion").value;
    var numero = /[0-9]/;
    if((numero.test(pais)) || (numero.test(estado))){
        alert("El país y el estado no deben contener numeros");
        return false;
    }
    if(precio <= 0){
        alert("Fije un precio de renta superior a 0");
        return false;
    }
    return true;
}

function validaPropietario(){
    var nombre = document.getElementById("nombreRegistrarPropietario").value.toString();
    var paterno = document.getElementById("paternoRegistrarPropietario").value.toString();
    var materno = document.getElementById("maternoRegistrarPropietario").value.toString();
    var cp = document.getElementById("codigoRegistrarPropietario").value.toString();
    var cuenta = document.getElementById("cuentaRegistrarPropietario").value.toString();
    var numero = /[0-9]/;
    var letras = /[a-zA-Z]/;
    if((numero.test(nombre)) || (numero.test(paterno)) || (numero.test(materno))){
        alert("El nombre y apellidos deben ser solo letras");
        return false;
    }
    if(letras.test(cp) || (cp.length !== 5)){
        alert("El codigo postal es incorrecto");
        return false;
    }
    if((cp.length !== 5) || (cuenta.length !== 16)){
        alert("Cantidad de digitos incorrecta para el codigo postal o la cuenta bancaria");
        return false;
    }
    return true;
}

function validaPropietarioA(){
    var nombre = document.getElementById("nombreActualizarPropietario").value.toString();
    var paterno = document.getElementById("paternoActualizarPropietario").value.toString();
    var materno = document.getElementById("maternoActualizarPropietario").value.toString();
    var cp = document.getElementById("codigoActualizarPropietario").value.toString();
    var cuenta = document.getElementById("cuentaActualizarPropietario").value.toString();
    var numero = /[0-9]/;
    var letras = /[a-zA-Z]/;
    if((numero.test(nombre)) || (numero.test(paterno)) || (numero.test(materno))){
        alert("El nombre y apellidos deben ser solo letras");
        return false;
    }
    if(letras.test(cp) || (cp.length !== 5)){
        alert("El codigo postal es incorrecto");
        return false;
    }
    if((cp.length !== 5) || (cuenta.length !== 16)){
        alert("Cantidad de digitos incorrecta para el codigo postal o la cuenta bancaria");
        return false;
    }
    return true;
}

function factura(){
    var cantidad = document.getElementById("totalCompraFactura").value;
    if(cantidad < 0){
        return false;
    }
    return true;
}