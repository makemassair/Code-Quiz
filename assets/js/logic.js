const beginQuiz = document.querySelector(".start");
const quizIntro = document.querySelector("#start-screen");
const question = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choices");
const timer = document.querySelector(".timer");
const timerCountdown = document.querySelector("#time");
const endQuiz = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const playerName = document.querySelector("#initials");
const confirmName = document.querySelector("#submit");
const quizFeedback = document.querySelector("#feedback");
const audioCorrect = new Audio('assets/sfx/correct.wav');
const audioWrong = new Audio('assets/sfx/incorrect.wav');

// Declared Variables
var activeQuestion;
var answerButton;
var timerInterval;
var questionIndex = 0;
var currentScore = 0;
var totalPlayTime;

// Declare a function to start the Quiz
beginQuiz.addEventListener("click", function() {
    console.log(`The "start button" has been clicked`);
    totalPlayTime = questionsToAsk.length * 10 + 1;
    currentScore = 0;
    questionIndex = 0;
    quizIntro.setAttribute("class", "hide");
    question.removeAttribute("class", "hide");
    timerCount();
    printQ();
});

// Time Countdown
function timerCount() {
    // Sets interval in variable
    timerInterval = setInterval(function() {
        totalPlayTime--;
        timerCountdown.textContent = totalPlayTime;
        if(totalPlayTime <= 0) {
        // Calls function to create and append image
        endGame();
      }
    }, 1000);
  };

// End the quiz
function endGame() {
    clearInterval(timerInterval);
    timerCountdown.textContent = "~";
    question.setAttribute("class", "hide");
    endQuiz.removeAttribute("class", "hide");
    quizFeedback.setAttribute("class", "hide");
    finalScore.innerText = currentScore;
};

questionChoices.addEventListener("click", function(event) {
    var button = event.target;
    scoring(button);
});

//  Declare a function to render questions.
function printQ() {
    // Clear choices from any previous question
    if (questionIndex === questionsToAsk.length) {
        endGame();
        return;
    }
    questionChoices.textContent = "";
    activeQuestion = questionsToAsk[questionIndex];
    questionTitle.textContent = activeQuestion.question;
    for (let i = 0; i < activeQuestion.choices.length; i++) {
        var buttonChoice = document.createElement("button");
        buttonChoice.setAttribute("class", "answerButton");
        buttonChoice.textContent = (i+1) + ". " + activeQuestion.choices[i];
        buttonChoice.dataset.isCorrect = i === activeQuestion.answer;
        questionChoices.appendChild(buttonChoice);
    }
    questionIndex++;
};
// Scoring
function scoring(button) {
    var score = button.dataset.isCorrect;
    if (score == "false") {
        totalPlayTime -= 5;
        console.log(totalPlayTime);
    }
    else {
        currentScore++;
        }
    quizFeedback.removeAttribute("class", "hide");
    var questionFeedback = button.dataset.isCorrect;
    if (questionFeedback == 'false') {
        playAudio(audioWrong);
        quizFeedback.textContent = "Sorry, that's wrong"
    }
    else {
        playAudio(audioCorrect);
        quizFeedback.textContent = "Correct. Well done!"
    }
    printQ();
};

// Adding Player Score and Initials to localStorage
confirmName.addEventListener("click", function() {
    var initials = playerName.value;
    var highScores = JSON.parse(localStorage.getItem('playerScore'));
    if (highScores === null) {
        highScores = [];
    }
    highScores.push({initials:initials, finalScore:currentScore});
    localStorage.setItem('playerScore', JSON.stringify(highScores));
    quizIntro.removeAttribute("class", "hide");
    endQuiz.setAttribute("class", "hide");
});

// Audio
function playAudio(x) {
  x.play();
}

