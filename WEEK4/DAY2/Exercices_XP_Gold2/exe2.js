const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = numbers.filter((item, index) => numbers.indexOf(item) === index);

console.log(uniqueNumbers);
// Résultat : [1, 2, 3, 4, 5]
