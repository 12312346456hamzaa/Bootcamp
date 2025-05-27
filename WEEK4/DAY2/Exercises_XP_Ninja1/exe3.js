const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

const usersObject = {};

users.forEach(user => {
  const fullName = `${user.firstName} ${user.lastName}`;
  usersObject[fullName] = user.role;
});

console.log(usersObject);

/*
Résultat :
{
  'Bradley Bouley': 'Full Stack Resident',
  'Chloe Alnaji': 'Full Stack Resident',
  'Jonathan Baughn': 'Enterprise Instructor',
  'Michael Herman': 'Lead Instructor',
  'Robert Hajek': 'Full Stack Resident',
  'Wes Reid': 'Instructor',
  'Zach Klabunde': 'Instructor'
}
*/
