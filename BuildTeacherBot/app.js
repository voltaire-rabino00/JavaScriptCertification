console.log("Hi there!");

// Declared a botName
const botName = "teacherBot"; 

// Using template literals to create a greeting message
const greeting = `My name is ${botName}.`;
console.log(greeting);

// Declared a subject and topic
const subject = "JavaScript";
const topic = "strings";

// Using
const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

// Using the length property to find the number of characters in a string
const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`,
);
console.log(topic.length);

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`,
);

console.log(subject[0]);

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`,
);
console.log(subject[1]);

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`,
);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log(
  "Here are examples of finding the positions of substrings in the sentence.",
);

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");
