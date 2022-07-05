function personagemMorreu(saude, dano) {
  if (saude - dano <= 0) return "1";
  else {
    return "0";
  }
}

console.log(personagemMorreu(1, 1));
