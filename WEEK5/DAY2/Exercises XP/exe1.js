const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) { // Vérifie le statut HTTP
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse en JS object
  })
  .then(data => {
    console.log(data); // Affiche l’objet JS dans la console
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des données :", error);
  });
