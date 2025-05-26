const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;

console.log(compose(add1, add5)(10)); // 16
// Prediction : compose(add1, add5)(10) revient a add1(add5(10)) = add1(15) = 16
