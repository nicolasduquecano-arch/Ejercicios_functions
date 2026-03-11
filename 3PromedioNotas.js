function promedio(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function aprobo(prom) {
  return prom >= 3;
}

function mostrarResultado(prom) {
  if (aprobo(prom)) {
    console.log("Aprobó con " + prom);
  } else {
    console.log("Reprobó con " + prom);
  }
}

let prom = promedio(4,3,5);
mostrarResultado(prom);