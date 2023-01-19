// Retrieve from localStorage
function getScores() {
    // let playersName = window.localStorage.getItem('initials');
    JSON.parse(window.localStorage.getItem('playerScore'));
}
console.log(JSON.parse(window.localStorage.getItem('playerScore')));

function displayTheScores() {
    displayScores.textContent = "";
    scoresIndex === getScores.length;
    playerScoreDisplay = getScores[scoresIndex]
    displayScores.textContent = playerScoreDisplay;
    for (let i = 0; i < playerScoreDisplay.length; i++) {
        var playerScore = document.createElement("li");
        playerScore.textContent = playerScoreDisplay[i];
        displayScores.appendChild(playerScore);
    }
    playerScoreDisplay++;
};
console.log(displayTheScores);
// displayTheScore = getScores  