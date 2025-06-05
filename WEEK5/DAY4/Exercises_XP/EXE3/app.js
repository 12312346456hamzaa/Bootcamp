
const { readFile, writeFile } = require('./fileManager');

// Lire le contenu de "Hello World.txt"
const helloContent = readFile('Hello World.txt');
console.log('Contenu de Hello World.txt :', helloContent);

// Écrire dans "Bye World.txt"
writeFile('Bye World.txt', 'Writing to the file');
