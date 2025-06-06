
const axios = require('axios');

async function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await axios.get(url);
    return response.data; // On retourne seulement les données
  } catch (error) {
    // On relance l'erreur pour la gérer dans app.js
    throw error;
  }
}

module.exports = { fetchPosts };
