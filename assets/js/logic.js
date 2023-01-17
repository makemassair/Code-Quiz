const beginQuiz = document.querySelector(".start");
const quizIntro = document.querySelector("#start-screen");
const question = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choice");
const timer = document.querySelector(".timer");
const timerCountdown = document.querySelector("#time");
const endQuiz = document.querySelector("#end-screen");
const score = document.querySelector("#final-score");
const playerName = document.querySelector("#initials");
const confirmName = document.querySelector("#submit");
const quizFeedback = document.querySelector("#feedback");

// Declared Variables
activeQuestion = [];
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
  

// convert questionsToAsk object to array
const questionContent = Object.values(questionsToAsk);

// Declare a function to start the Quiz
beginQuiz.addEventListener("click", function() {
    console.log(`The "start button" has been clicked`);
    quizIntro.setAttribute("class", "hide");
    question.removeAttribute("class", "hide");
    printQ();
    timerCount();
});





// function showQuestion() {
//    activeQuestion = questionContent[i].objArray
//  }
//  console.log(questionsToAsk.answerCorrect);

//  Declare a function to render questions.
function printQ() {
    // Clear choices from any previous question
    function empty(questionChoices) {
        questionChoices.textContent = "";
    };
    let parent = document.querySelector("#choice");
    // Print question title
    questionTitle.textContent = questionContent[0].question;
    // Loop over question object choices.
    for (let i = 1; i < questionContent.length; i++) {
       buttonChoice = document.createElement("button");
       if(questionContent[i].answerCorrect) {
        buttonChoice.setAttribute("data-set", "correct");
       }    
       else {
        buttonChoice.setAttribute("data-set", "wrong");
       }   
       buttonChoice.setAttribute("class", "answerButton");
       document.body.children[2].children[1].children[1].appendChild(buttonChoice);
       buttonChoice.textContent = i + ". " + questionContent[i][0];
        console.log(buttonChoice);
    }
};



   
    // for (let i = 1; i < questionContent.length; i++) {
    //     btnChoice = document.createElement("button");
    //     if(questionContent[0].answerCorrect === "answerCorrect") {
    //         btnChoice.setAttribute("data-set", "correct");
    //     }
    //     else {
    //         btnChoice.setAttribute("data-set", "wrong");
    //     };
    //     btnChoice.setAttribute("class", "answerBtn");
    //     document.body.children[2].children[1].children[1].appendChild(btnChoice);
    //     btnChoice.textContent = i + ". " + questionContent[i][0];
    //     console.log(btnChoice);
    // }