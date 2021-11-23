function validar(){
    const usuario=document.getElementById('usuario');
    const clave=document.getElementById('clave');

    if (usuario.value.length==0) {
        alert("Ingrese un usuario")
        usuario.focus()
        return 0;        
    }

    if (clave.value.length==0) {
        alert("Ingrese una contraseña")
        clave.focus()
        return 0;
        
    }
    

    
    $.post("http://localhost:8080/api/user/new",
    {
        usuario: usuario,
        clave: clave
    },
    function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });
    
    
}