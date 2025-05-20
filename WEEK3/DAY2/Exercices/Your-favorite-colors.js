// Tableau de 5 couleurs préférées
const colors = ["blue", "red", "green", "purple", "black"];

const suffixes = ["st", "nd", "rd", "th", "th"];


for (let i = 0; i < colors.length; i++) {
  const rank = i + 1;
  const suffix = suffixes[i] || "th"; // Si plus de 5 couleurs
  console.log(`My ${rank}${suffix} choice is ${colors[i]}`);
}
