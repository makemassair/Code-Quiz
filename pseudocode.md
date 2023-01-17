# JavaScript Quiz Game

## List of requirements

* Questions
    * Multiple choice options

* Logic list
// handler for the start button
    // initialise the game
    // start the timer
    // hide the introduction
    // display first question

// if answer = correct then display 'correct' message
    // record that the question was answered correctly
    // display next question

// if answer != correct display 'wrong' message
    // record that the question was answered incorrectly
    // deduct time from timer
    // display next question

// end quiz criteria
    // all questions answered
    // OR when time is left is reduced to < 0 due to incorrect answer
    // OR timer reaches 0

// when quiz ends
    // hide questions
    // display game-end message
    // display user's score
    // option to save score with initial.

// option to restart quiz

// high score page
// read all saved scores
// option to clear all scores


Nadira shared some pseudocode to assist

Starter Code
- You've already been given starter code that contains two functioning html pages: 
    -- one that hosts the quiz
    -- one that hosts the high scores.
- You've already been given a functioning CSS file.
​
To Dos:
​
** Folder Structure**
​
~~1. Create new repo in Github - clone onto computer.~~
2. Copy over starter code inside the starter folder and commit to github.
3. Create JS folder inside of the assets folder.
4. Create 3 JS files --> (1) logic.js, (2) questions.js, (3) scores.js
5. In your index.html link the logic.js and questions.js files using </script> tag
6. In your highscores.html link the scores.js file using </script> tag
​
​
*** Start button that when clicked a timer starts and the first question appears**
​
7. Grab the StartQuiz button using .getElementById or querySelector methods and store in a global variable. Do the same for all elements from the html page that you'll need to reference later on. For example the questions div etc.
8. Declare a function to start the Quiz
9. Add an eventListener to the start button - click event and pass the function that starts the quiz into your eventListener. 
10. In your function that starts the quiz, grab the start-screen div using getElementById and store in a variable.
11. Set attribute to this variable so that you change the class from start to hide (which is a class in the css file that displays none)
12. In the start function, un-hide the questions div using remove attribute method.
13. Declare and initialize a global variable to store total length of time.
14. Declare a function to start the timer and use the setInterval method to decrement total time.
15. Call this timer function in the start quiz function so that once user clicks startQuiz button the timer begins.
16. In your questions.js file, declare a variable for an array of objects holding all questions, choices and answers for your quiz. 
17. Declare a function to render questions. 
18. Declare a global variable to store index of questions. Initialize it to zero.
19. In your questions function, initialize a variable to hold your questions' array of object from the questions.js file.
20. Update question-title with current question.
21. Clear out any old question choices from your choices div.
22. Loop over question object choices.
23. Create new button for each choice dynamically using the DOM (createElement).
24. Attach click event listener to each choice
25. Display questions and button options on the page dynamically using the DOM (appendChild).
​
*** When answer is clicked, the next question appears. If the answer clicked was incorrect then subtract time from the clock**
​
26. Validate question choices.
27. If user guessed wrong penalize by decrementing timer. 
28. Display new time on page dynamically (textContent)
29. Move onto the next question once user click a button.
30. Also check if we've run out of questions - if so end quiz or else get next question.  
​
*** When the game ends, it should display their score**
​
31. Declare a function to end the quiz.
32. When quiz ends stop the timer by using clearInterval method.
33. Display the "end-screen" div by getting this element from the html dynamically.
34. Then remove the hide attribute so it appears on page.
35. Show final score by getting "final-score" element from html and then set end time as final score. 
36. Hide questions section by setting the attribute back to hide.
​
*** Give the user the ability to save their initials and their score**
37. Get value of input box
38. Make sure value wasn't empty
39. Get saved scores from localstorage, or if there isn't any, set to empty array
40. Declare new variable for a new score object for the current user. Object to have two properties (one for the score and one for the initials)
41. Save to localstorage
42. Redirect to highscore.html page.
43. In your scores.js file, create a function display the high scores. 
44. either get scores from localstorage or set to empty array
45. create list tag for each high score
46. display on page dynamically
