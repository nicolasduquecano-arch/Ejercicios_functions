function total(precio, cantidad) {
  return precio * cantidad;
}

function descuento(total) {
  return total * 0.1;
}

function precioFinal(total, descuento) {
  return total - descuento;
}

let t = total(100,2);
let d = descuento(t);

console.log(precioFinal(t,d));