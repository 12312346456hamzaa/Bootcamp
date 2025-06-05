

const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du dossier:', err);
    return;
  }
  console.log('Fichiers dans le dossier courant :');
  files.forEach(file => {
    console.log(file);
  });
});
