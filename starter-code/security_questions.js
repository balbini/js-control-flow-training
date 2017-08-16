console.log("security_questions.js loaded");
let securityQuestions = [{question: "What is your favorite band?",
  expectedAnswer: "The Black Keys"},
  {question2: "What is your favorite movie?", expectedAnswer2: "Forrest Gump"},
  {question3: "What is your favorite season?", expectedAnswer3: "Winter"}
];

for (var i = 0; i <= securityQuestions.length; i++){
let answer = prompt(securityQuestions[0].question);
  if (securityQuestions[0].expectedAnswer === answer){
    alert("Correct!");
}  else {
    alert("Incorrect!");
    break;

}
  let answer2 = prompt(securityQuestions[1].question2);
  if (securityQuestions[1].expectedAnswer2 === answer2){
    alert("Correct!");
  } else{
    alert("Try again!");
    break;
  }
  let answer3 = prompt(securityQuestions[2].question3);
  if (securityQuestions[2].expectedAnswer3 == answer3){
    alert("Correct!");
  } else {
    alert("Try again!");
    break;
  } break;
};
