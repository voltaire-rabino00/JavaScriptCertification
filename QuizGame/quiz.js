const questions = [
  {
    category: "JavaScript",

    question: "What is JavaScript?",

    choices: ["A programming language", "A coffee brand", "A car model"],

    answer: "A programming language",
  },

  {
    category: "HTML",

    question: "What does HTML stand for?",

    choices: [
      "HyperText Markup Language",

      "HighText Machine Language",

      "Home Tool Markup Language",
    ],

    answer: "HyperText Markup Language",
  },

  {
    category: "SQL",

    question: "What does SQL stand for?",

    choices: [
      "Structured Query Language",

      "Strong Question Language",

      "Standard Query List",
    ],

    answer: "Structured Query Language",
  },

  {
    category: "JavaScript",

    question: "Which keyword is used to declare a constant variable?",

    choices: ["let", "var", "const"],

    answer: "const",
  },

  {
    category: "Web Development",

    question: "Which of the following is NOT a programming language?",

    choices: ["Java", "HTML", "C++"],

    answer: "HTML",
  },
];

function getRandomQuestion(question) {
  let randomQuestion = Math.floor(Math.random() * question.length);

  return question[randomQuestion];
}

function getRandomComputerChoice(randomChoice) {
  let randomChoices = Math.floor(Math.random() * randomChoice.length);

  return randomChoice[randomChoices];
}

function getResults(question, computerChoice) {
  if (question.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}


const currentQuestion = getRandomQuestion(questions);


const compSelected = getRandomComputerChoice(currentQuestion.choices);

console.log(getResults(currentQuestion, compSelected));
