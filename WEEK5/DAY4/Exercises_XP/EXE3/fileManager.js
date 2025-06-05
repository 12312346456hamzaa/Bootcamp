const fs = require('fs');

// Fonction pour lire un fichier
function readFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf8');
    return data;
  } catch (err) {
    console.error(`Error reading ${filename}:`, err.message);
    return null;
  }
}

// Fonction pour écrire dans un fichier
function writeFile(filename, content) {
  try {
    fs.writeFileSync(filename, content, 'utf8');
    console.log(`Successfully wrote to ${filename}`);
  } catch (err) {
    console.error(`Error writing to ${filename}:`, err.message);
  }
}

module.exports = { readFile, writeFile };
