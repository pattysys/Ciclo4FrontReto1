function validar() {
  const email = document.getElementById('email');
  const clave = document.getElementById('clave');

  if (email.value.length == 0) {
    alert("Ingrese un email")
    email.focus()
    return 0;
  }

  if (clave.value.length == 0) {
    alert("Ingrese una contraseña")
    clave.focus()
    return 0;

  }

  let credentials = {
    email: $("#email").val(),
    clave: $("#clave").val()
  };

  $.ajax({
    type: 'GET',
    contentType: "application/json; charset=utf-8",
    dataType: 'JSON',
    // data: JSON.stringify(credentials),

    url: "http://localhost:8080/api/user/" + credentials.email + "/" + credentials.clave,

    success: function (response) {
      if (response.name == 'NO DEFINIDO') {
        alert('email o clave incorrectos!');
        return;
      }
      console.log(response);
      console.log("Bienvenido");
      alert("Acabas de iniciar sesion");
      window.location.reload()
    },

    error: function (jqXHR, textStatus, errorThrown) {
      window.location.reload()
      alert("no existe usuario");
    }
  }
  );


}