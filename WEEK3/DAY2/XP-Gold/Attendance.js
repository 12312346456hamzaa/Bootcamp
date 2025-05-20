let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

// Demander le nom à l'utilisateur
let name = prompt("What is your name?");

// Convertir en minuscules pour la recherche (optionnel)
name = name.toLowerCase();

// Vérifier si le nom est dans la liste
if (name in guestList) {
  console.log(`Hi! I'm ${name}, and I'm from ${guestList[name]}.`);
} else {
  console.log("Hi! I'm a guest.");
}
