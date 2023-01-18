const beginQuiz = document.querySelector(".start");
const quizIntro = document.querySelector("#start-screen");
const question = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choices");
const timer = document.querySelector(".timer");
const timerCountdown = document.querySelector("#time");
const endQuiz = document.querySelector("#end-screen");
const score = document.querySelector("#final-score");
const playerName = document.querySelector("#initials");
const confirmName = document.querySelector("#submit");
const quizFeedback = document.querySelector("#feedback");

// Declared Variables
var activeQuestion;
var answerButton;
var questionIndex = 0;
totalPlayTime = questionsToAsk.length * 10 + 1;

// Time Countdown
function timerCount() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        totalPlayTime--;
        timerCountdown.textContent = totalPlayTime;
  
        if(totalPlayTime === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        endGame();
      }
  
    }, 1000);
  };

function endGame() {
    question.setAttribute("class", "hide");
    endQuiz.removeAttribute("class", "hide");
}

// Declare a function to start the Quiz
beginQuiz.addEventListener("click", function() {
    console.log(`The "start button" has been clicked`);
    quizIntro.setAttribute("class", "hide");
    question.removeAttribute("class", "hide");
    timerCount();
    printQ();
    scoring();
});

questionChoices.addEventListener("click", function(event) {
    var button = event.target;
    console.log(button);
});

//  Declare a function to render questions.
function printQ() {
    // Clear choices from any previous question
    questionChoices.textContent = "";
    activeQuestion = questionsToAsk[questionIndex];
    questionTitle.textContent = activeQuestion.question;
    for (let i = 0; i < activeQuestion.choices.length; i++) {
        var buttonChoice = document.createElement("button");
        buttonChoice.setAttribute("class", "answerButton");
        buttonChoice.textContent = i + ". " + activeQuestion.choices[i];
        buttonChoice.dataset.isCorrect = i === activeQuestion.answer;
        questionChoices.appendChild(buttonChoice);
    }
};


function scoring() {
    if (document.querySelector("button") === false) {
        timerInterval - 5000;
            console.log(questionChoices);
    }
    else {
        printQ();
    }
    
};