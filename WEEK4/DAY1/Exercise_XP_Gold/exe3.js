const curriedSum = (a) => (b) => a + b;

console.log(curriedSum(30)(1)); // 31
// Prediction : la dernière ligne affiche 31 car curriedSum (30) retourne une fonction qui ajoute 30 a son argument donc 30 + 1 = 31
