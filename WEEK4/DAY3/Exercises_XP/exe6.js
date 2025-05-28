/* 1) :  Évaluez-les (c'est-à-dire Trueou False)

[2] === [2] 
{} === {}
 */
// 2) :
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

// 3) : 
// Classe Animal
class Animal {
  constructor(nom, type, couleur) {
    this.nom = nom;
    this.type = type;
    this.couleur = couleur;
  }
}

// Classe Mammal qui hérite de Animal
class Mammal extends Animal {
  sound(bruit) {
    return `${bruit} I'm a ${this.type}, named ${this.nom} and I'm ${this.couleur}`;
  }
}

// Création de l'objet farmerCow
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));
// output ==>   Moooo I'm a cow, named Lily and I'm brown and white
