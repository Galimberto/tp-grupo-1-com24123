// Script para validar entrada email del formulario

document.getElementById("miFormulario").addEventListener("submit", function(event) {
  // Evitar que el formulario se envíe de forma predeterminada
  event.preventDefault();
  
  // Obtener los valores de los campos de entrada
  let email = document.getElementById("mail").value;
  let telefono = document.getElementById("telefono").value;
  
  // Expresión regular para validar el correo electrónico
  let expresionRegularEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Expresión regular para validar el número de teléfono (solo dígitos)
  let expresionRegularTelefono = /^\d+$/;
  
  // Validar el correo electrónico utilizando la expresión regular
  if (expresionRegularEmail.test(email)) {
      // Si el correo electrónico es válido, validar el teléfono
      if (expresionRegularTelefono.test(telefono)) {
      // Si el teléfono es válido, enviar el formulario
      document.getElementById("miFormulario").submit();
      } else {
        alert("Por favor, introduce un número de teléfono válido (solo dígitos).");
      }
    } else {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
  }
});

