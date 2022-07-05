function indice(number) {
  if (number % 2 == 0) return "par";
  else if (number % 2 !== 0) return "impar";
}

console.log(indice(3));
