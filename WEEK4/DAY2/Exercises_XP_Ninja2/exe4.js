function reverseArray(arr) {
  // On inverse en place avec deux indices
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // Échanger les valeurs
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    // Avancer les indices
    left++;
    right--;
  }
  return arr;
}

console.log(reverseArray([1,2,3,4,5]));           // ==> [5,4,3,2,1]
console.log(reverseArray([1,2]));                 // ==> [2,1]
console.log(reverseArray([]));                    // []
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));// ==> [10,9,8,7,6,5,4,3,2,1]
