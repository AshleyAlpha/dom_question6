let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015",
  "chris",
  "pine",
  "learn",
  "JavaScript",
];
secretMessage.pop();
secretMessage.push("to", "program");
secretMessage[7] = "right";
secretMessage.shift();
secretMessage.unshift("programming");
secretMessage.splice(6, 5, "know");

console.log(secretMessage.join(' '));
