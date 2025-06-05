import { people } from "./data.js";

function calculateAverageAge(personArray) {
  if (personArray.length === 0) {
    console.log("No persons in the list.");
    return;
  }
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / personArray.length;
  console.log(`Average age: ${average}`);
}

calculateAverageAge(people);
