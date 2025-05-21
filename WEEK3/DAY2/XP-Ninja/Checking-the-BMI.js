// Création des deux objets avec méthode BMI
let person1 = {
  fullName: "Alice Smith",
  mass: 68, // en kg
  height: 1.65, // en mètres
  calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

let person2 = {
  fullName: "Bob Johnson",
  mass: 85,
  height: 1.8,
  calcBMI: function() {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
};

// comparer BMI
function compareBMI(p1, p2) {
  let bmi1 = p1.calcBMI();
  let bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} has a higher BMI (${bmi1.toFixed(2)}) than ${p2.fullName} (${bmi2.toFixed(2)}).`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has a higher BMI (${bmi2.toFixed(2)}) than ${p1.fullName} (${bmi1.toFixed(2)}).`);
  } else {
    console.log(`${p1.fullName} and ${p2.fullName} have the same BMI (${bmi1.toFixed(2)}).`);
  }
}

// Appel de comparaison
compareBMI(person1, person2);
