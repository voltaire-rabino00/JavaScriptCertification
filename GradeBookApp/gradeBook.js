
function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function getGrade(studScore) {
  if (studScore === 100) {
    return "A+";
  }
  else if (studScore >= 90) {
    return "A";
  }
  else if (studScore >= 80) {
    return "B";
  }
  else if (studScore >= 70) {
    return "C";
  }
  else if (studScore >= 60) {
    return "D";
  }
  else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(arrScores, studScore) {
  let average = getAverage(arrScores);
  let grade = getGrade(studScore);

  if (hasPassingGrade(studScore)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  }
  else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));