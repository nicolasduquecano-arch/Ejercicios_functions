function mayor(a, b) {
  if (a > b) {
    return a;
  } 
  else {
    return b;
  }
}

function menor(a, b) {
  if (a < b) {
    return a;
  } 
  else {
    return b;
  }
}

function sonIguales(a, b) {
  return a === b;
}

console.log(mayor(10,7));
console.log(menor(10,7));
console.log(sonIguales(5,5));