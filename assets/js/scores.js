// Retrieve from localStorage
const displayScores = document.querySelector("#highscores");
function getScores() {
    // let playersName = window.localStorage.getItem('initials');
    if (displayOfScores == null) {
        displayOfScores = [];
    }
    var displayOfScores = JSON.parse(window.localStorage.getItem('playerScore'));
    displayOfScores.sort(function(a, b){
        return b.finalScore - a.finalScore;
    });
    displayOfScores.forEach(function(score) {
        var listItem = document.createElement("li");
        listItem.textContent = score.initials + " - " + score.finalScore;
        displayScores.appendChild(listItem);
    });
};

getScores();

// clear HighScores
// listen for button click
// on click wipe window.localStorage
const clearButton = document.querySelector("#clear");

// function scorePurge() {
//     clearButton.onclick = localStorage.clear();
// };
// console.log(clearButton);

clearButton.addEventListener("click", () => {
    window.localStorage.clear("playerScore");
    displayScores.textContent = "";
    alert("High Scores have been erased.");
});