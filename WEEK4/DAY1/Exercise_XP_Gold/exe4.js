const curriedSum = (a) => (b) => a + b;

const add5 = curriedSum(5);

console.log(add5(12)); // 17
// Prediction : add5 (12) renvoie 17 car add5 est une fonction qui ajoute 5 a ce qu on lui donne.
// Donc add5(12) = 5 + 12 = 17
