async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const objectStarWars = await response.json();
    console.log(objectStarWars.result); // Affiche l’objet Star Wars dans la console
  } catch (error) {
    console.error("Erreur lors de la récupération du vaisseau :", error);
  }
}

// Appelle la fonction
getStarship();
