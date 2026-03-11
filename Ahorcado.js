const prompt = require("prompt-sync")();

// palabra aleatoria
function generarPalabra() {
  const palabras = ["javascript", "codigo", "programar", "computadora"];
  const indice = Math.floor(Math.random() * palabras.length);
  return palabras[indice];
}

// mostrar progreso de la palabra
function mostrarProgreso(palabra, letrasUsadas) {
  let texto = "";

  for (let i = 0; i < palabra.length; i++) {
    if (letrasUsadas.includes(palabra[i])) {
      texto += palabra[i] + " ";
    } else {
      texto += "_ ";
    }
  }

  console.log("Palabra:", texto);
}

// pedir letra al jugador
function pedirLetra() {
  return prompt("Ingresa una letra: ");
}

// revisar si ganó
function gano(palabra, letrasUsadas) {
  for (let i = 0; i < palabra.length; i++) {
    if (!letrasUsadas.includes(palabra[i])) {
      return false;
    }
  }
  return true;
}

// juego principal
function jugar() {
  const palabra = generarPalabra();
  let letrasUsadas = [];
  let intentos = 6;

  while (intentos > 0) {
    console.log("\nIntentos restantes:", intentos);

    mostrarProgreso(palabra, letrasUsadas);

    const letra = pedirLetra();
    letrasUsadas.push(letra);

    if (!palabra.includes(letra)) {
      intentos--;
      console.log("Letra incorrecta");
    }

    if (gano(palabra, letrasUsadas)) {
      console.log("¡Ganaste! La palabra era:", palabra);
      return;
    }
  }

  console.log("Perdiste. La palabra era:", palabra);
}

jugar();