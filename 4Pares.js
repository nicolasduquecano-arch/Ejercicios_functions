function esPar(n) {
  return n % 2 === 0;
}

function esImpar(n) {
  return n % 2 !== 0;
}

function mostrarNumero(n) {
  if (esPar(n)) {
    console.log("Es par");
  } else {
    console.log("Es impar");
  }
}

mostrarNumero(7);