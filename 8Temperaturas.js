function celsius_Fahrenheit(c) {
  return (c * 9/5) + 32;
}

function fahrenheit_Celsius(f) {
  return (f - 32) * 5/9;
}

function mostrarTemp(c) {
  console.log("Celsius:", c);
  console.log("Fahrenheit:", celsius_Fahrenheit(c));
}

mostrarTemp(25);