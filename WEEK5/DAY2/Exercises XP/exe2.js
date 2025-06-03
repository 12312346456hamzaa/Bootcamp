const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const query = "sun";
const limit = 10;
const offset = 2;
const rating = "g";

const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=${limit}&offset=${offset}&rating=${rating}&api_key=${apiKey}`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Affiche l'objet JavaScript reçu de Giphy
  })
  .catch(error => {
    console.error("Erreur lors de la récupération des GIFs :", error);
  });
