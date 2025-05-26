// declaration
function kgToGrams(weightKg) {
    return weightKg * 1000;
}
console.log(kgToGrams(2)); 

// expression
const kgToGramsExp = function(weightKg) {
    return weightKg * 1000;
};
console.log(kgToGramsExp(3.5)); 



// One line arrow function
const kgToGramsArrow = weightKg => weightKg * 1000;
console.log(kgToGramsArrow(1.2)); 
