let age = [20, 5, 12, 43, 98, 55];

// Somme de tous les âges
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log("Sum of all ages:", sum);

//  Âge le plus élevé
let max = age[0]; // On suppose que le 1er est le plus grand pour commencer
for (let i = 1; i < age.length; i++) {
  if (age[i] > max) {
    max = age[i];
  }
}
console.log("Highest age:", max);
