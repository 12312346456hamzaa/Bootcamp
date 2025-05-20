//Part I - Review about arrays
//1) : Write code to remove “Greg” from the people array.

const people = ["Greg", "Mary", "Devon", "James"];

people.shift(); 

console.log(people); 

//2) : Write code to replace “James” to “Jason”.

const index = people.indexOf("James"); 
if (index !== -1) {
  people[index] = "Jason"; 
}

console.log(people); 

//3) : Write code to add your name to the end of the people array.

people.push("Hamza"); 

console.log(people); 

//4) : Write code that console.logs Mary’s index. take a look at the indexOf method on Google.


index = people.indexOf("Mary");
console.log(index); // Output: 0

//5) : 

// On veut une copie du tableau sans le 1er ("Mary") ni le dernier ("Hamza") élément
const copy = people.slice(1, 3);

console.log(copy); // ["Devon", "Jason"]

//6) : Write code that gives the index of “Foo”. Why does it return -1 ?

index = people.indexOf("Foo");
console.log(index); // Output: -1

//7) : Create a variable called last which value is the last element of the array.

const last = people[people.length - 1];

console.log(last); // Affiche : "Hamza"


//Part II - Loops :


//1
console.log("Toutes les personnes :");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

console.log("Affichage jusqu’à \"Devon\" seulement :");
//2
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}
