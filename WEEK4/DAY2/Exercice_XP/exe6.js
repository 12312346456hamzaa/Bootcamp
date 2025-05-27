const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// 1. Creation du tableau des étudiants qui ont réussi
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);
// Résultat attendu : [{Ray}, {Jenner}, {Marco}]

// 2. BONUS 
students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
  });
// Résultat attendu :
// Good job Ray, you passed the course in Computer Science
// Good job Jenner, you passed the course in Information Technology
// Good job Marco, you passed the course in Robotics
