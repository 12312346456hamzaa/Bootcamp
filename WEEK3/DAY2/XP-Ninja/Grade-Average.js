// Fonction calculer moyenne
function calculateAverage(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  let average = sum / gradesList.length;
  return average;
}

// Fonction calculate Average
function findAvg(gradesList) {
  const average = calculateAverage(gradesList);
  console.log(`The average grade is ${average.toFixed(2)}`);
  
  if (average >= 65) {
    console.log("Congratulations! You passed the course.");
  } else {
    console.log("Unfortunately, you failed and must repeat the course.");
  }
}

let studentGrades = [70, 80, 60, 50, 90];
findAvg(studentGrades);
