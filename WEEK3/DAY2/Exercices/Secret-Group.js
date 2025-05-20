const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Extraire la première lettre de chaque nom
let initials = names.map(name => name[0]);

// Trier les lettres
initials.sort();

// Joindre les lettres pour former le nom du groupe
const secretName = initials.join("");

console.log(secretName); /
