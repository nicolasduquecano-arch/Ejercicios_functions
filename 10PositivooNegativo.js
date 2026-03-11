function esPositivo(n) {
  return n > 0;
}

function esCero(n) {
  return n === 0;
}

function verificarNumero(n) {
  if (esCero(n)) {
    console.log("El número es cero");
  } else if (esPositivo(n)) {
    console.log("El número es positivo");
  } else {
    console.log("El número es negativo");
  }
}

verificarNumero(-5);