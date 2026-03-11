function nombreCompleto(nombre, apellido) {
  return nombre + " " + apellido;
}

function edadNacimiento(añoActual, añoNacimiento) {
  return añoActual - añoNacimiento;
}

function mostrarPersona(nombre, apellido, añoNacimiento) {
  console.log(nombreCompleto(nombre, apellido));
  console.log("Edad:", edadNacimiento(2026, añoNacimiento));
}

mostrarPersona("Juan Nicolas","Duque",2009);