

const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lors de la lecture du fichier source:', err);
    return;
  }
  fs.writeFile('destination.txt', data, 'utf8', (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier destination:', err);
      return;
    }
    console.log('Fichier copié avec succès !');
  });
});
