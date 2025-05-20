// Création de l'objet family
const family = {
  father: "Ahmed",
  mother: "Leila",
  son: "Yassine",
  daughter: "Sara"
};

// Affichage des clés (keys)
console.log(" Keys in the family object:");
for (let key in family) {
  console.log(key);
}

// Affichage des valeurs (values)
console.log(" Values in the family object:");
for (let key in family) {
  console.log(family[key]);
}
