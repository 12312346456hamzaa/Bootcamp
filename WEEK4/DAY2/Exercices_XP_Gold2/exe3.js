const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function removeSpecialValues(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (
      value === null ||
      value === 0 ||
      value === '' ||
      value === false ||
      value === undefined ||
      Number.isNaN(value)
    ) {
      
    } else {
      result.push(value); 
    }
  }
  return result;
}

const cleanedArray = removeSpecialValues(sampleArray);
console.log(cleanedArray); 
// Résultat : [15, -22, 47]
