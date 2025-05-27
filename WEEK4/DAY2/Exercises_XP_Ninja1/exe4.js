const letters = ['x', 'y', 'z', 'z'];

// 1. Avec une boucle for
const countObjFor = {};
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (countObjFor[letter]) {
    countObjFor[letter]++;
  } else {
    countObjFor[letter] = 1;
  }
}
console.log(countObjFor); // { x: 1, y: 1, z: 2 }

// 2. Avec reduce()
const countObjReduce = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(countObjReduce); // { x: 1, y: 1, z: 2 }
