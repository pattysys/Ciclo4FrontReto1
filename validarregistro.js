function validar(){
    const usuario=document.getElementById('usuario');
    const email=document.getElementById('email');    
    const clave=document.getElementById('clave');
    const clave2=document.getElementById('clave2');
    const expReg=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (usuario.value.length==0) {
        alert("Tiene que escribir su usario")
        usuario.focus()
        return 0;        
    }

    if (email.value.length==0) {
        alert("Tiene que escribir email")
        email.focus()
        return 0;        
    }

    if (expReg.test(email.value)==false) {
        alert("Tiene que escribir un email valido")
        email.focus()
        return 0;
        
    }

    if (clave.value.length==0) {
        alert("Tiene que escribir una contraseña")
        clave.focus()
        return 0;
        
    }

    if (clave2.value.length==0) {
        alert("Tiene que confirmar la contraseña")
        clave2.focus()
        return 0;
        
    }

    if (clave.value!=clave2.value) {
        alert("Las contraseñas deben coincidir")
        clave.focus();
        return 0;
        
    }

    //1. Escribir la funcion Ajax para consultar
    //2. Llamar a una función que contenga el Ajax y pasarle el usuario y clave

}