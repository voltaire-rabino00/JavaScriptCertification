const questions = [{
  category: "JavaScript",
  question: "what is javaScript", 
  choices: ["A programming language", "A coffee brand", "A movie title", "A car model"],  
  answer: "A programming language"
  }];

function getRandomQuestion (question) {
    let index = Math.floor(Math.random() * question.length);
    return question[index];
  }
