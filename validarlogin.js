function validar(){
    const usuario=document.getElementById('usuario');
    const clave=document.getElementById('clave');

    if (usuario.value.length==0) {
        alert("Tiene que escribir su usario")
        usuario.focus()
        return 0;        
    }

    if (clave.value.length==0) {
        alert("Tiene que escribir una contraseña")
        clave.focus()
        return 0;
        
    }

    //1. Escribir la funcion Ajax para consultar
    //2. Llamar a una función que contenga el Ajax y pasarle el usuario y clave

}