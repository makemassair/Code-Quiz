const beginQuiz = document.querySelector(".start");
const quizIntro = document.querySelector("#start-screen");
const question = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const questionChoices = document.querySelector("#choice");

// declared variable
activeQuestion = [];

// convert questionsToAsk object to array
const questionContent = Object.values(questionsToAsk);
// console.log(questionContent);

// hide the introduction
// click.start which hides id=start-screen and reveals id=questions
beginQuiz.addEventListener("click", function() {
    console.log(`The "start button" has been clicked`);
    quizIntro.setAttribute("class", "hide");
    question.setAttribute("class", "start");
    printQ();
});

// function showQuestion() {
//     activeQuestion = Object.entries(questionsToAsk);
// }

// display the first question
function printQ() {
    
    questionTitle.textContent = questionContent[0].question;
    for (let i = 1; i < questionContent.length; i++) {
        btnChoice = document.createElement("button");
        if(questionContent[i] === "answerCorrect") {
            btnChoice.setAttribute("data-set", "correct");
        }
        else {
            btnChoice.setAttribute("data-set", "wrong");
        };
        btnChoice.setAttribute("class", "answerBtn");
        document.body.children[2].children[1].children[1].appendChild(btnChoice);
        btnChoice.textContent = i + ". " + questionContent[i].answer;
        console.log(btnChoice);
    }
};