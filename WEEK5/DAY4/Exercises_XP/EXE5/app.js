const _ = require('lodash');          // Import de lodash
const math = require('./math.js');    // Import du module custom

// Utilisation du module custom
const sum = math.add(5, 7);
const product = math.multiply(4, 6);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);

// Utilisation de lodash 
const arr = [1, 2, 3, 4, 5];
const total = _.sum(arr);
const multiplied = _.map(arr, n => math.multiply(n, 2));

console.log(`Total of array [1,2,3,4,5]: ${total}`);
console.log(`Array multiplied by 2: ${multiplied}`);
