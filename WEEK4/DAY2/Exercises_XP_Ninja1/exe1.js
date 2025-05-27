const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];

// 1. Avec une boucle
let sum = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].type === 'dog') {
    sum += data[i].age * 7;
  }
}
console.log(sum); // Résultat : 154

// 2. Avec reduce()
const sumReduce = data.reduce((total, animal) => {
  if (animal.type === 'dog') {
    return total + animal.age * 7;
  }
  return total;
}, 0);

console.log(sumReduce); // Résultat : 154
