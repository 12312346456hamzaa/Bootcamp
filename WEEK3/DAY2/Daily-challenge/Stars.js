//Une seule boucle
console.log("🔹 Avec une seule boucle :");
let pattern = "";
for (let i = 1; i <= 6; i++) {
  pattern += "* ";
  console.log(pattern.trim());
}

console.log("\n🔹 Avec deux boucles imbriquées :");
//Deux boucles imbriquées
for (let row = 1; row <= 6; row++) {
  let line = "";
  for (let col = 1; col <= row; col++) {
    line += "* ";
  }
  console.log(line.trim());
}
