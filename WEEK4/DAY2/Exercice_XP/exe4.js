const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

// 1:
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
// Résultat attendu : ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// 2:
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);
// Résultat attendu : Tableau d'objets avec Bradley, Chloe, Robert

// 3:
const lastNamesFSR = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);
console.log(lastNamesFSR);
// Résultat attendu : ["Bouley", "Alnaji", "Hajek"]
