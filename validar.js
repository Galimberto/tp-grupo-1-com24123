// Script para validar entrada email del formulario


document.getElementById("miFormulario").addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe de forma predeterminada
    event.preventDefault();
    
    // Obtener el valor del campo de entrada de correo electrónico
    let email = document.getElementById("mail").value;
    
    // Expresión regular para validar el correo electrónico
    let expresionRegularEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Validar el correo electrónico utilizando la expresión regular
    if (expresionRegularEmail.test(email)) {
      // Si el correo electrónico es válido, enviar el formulario
      document.getElementById("miFormulario").submit();
    } else {
      // Si el correo electrónico no es válido, mostrar un mensaje de error
      alert("Por favor, introduce una dirección de correo electrónico válida.");
    }
  });
  