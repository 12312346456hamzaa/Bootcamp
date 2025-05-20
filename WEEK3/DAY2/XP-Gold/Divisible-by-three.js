let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  const isDivisible = numbers[i] % 3 === 0;
  console.log(isDivisible);
}
