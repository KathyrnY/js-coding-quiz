// Start page header variables
var startEl = document.querySelector("#start-page");
var highScoresEl = document.querySelector(".highscore");
var timeEl = document.querySelector(".timer");
var seconds = 80;
var timerInterval;

// Start page variables
var startPage = document.querySelector("#info-page");
var quizInfo = document.querySelector(".quiz-info");
var startBtn = document.querySelector(".btn-start");

// Game page variables
var gameEl = document.querySelector("#game-page");
var titleEl = document.querySelector(".game-page-title");
var questEl = document.querySelector(".quiz-question");
var choicesEl = document.querySelector(".quiz-choices");
var rightOrWrong = document.querySelector(".correct-incorrect");
var nextBtn = document.querySelector("#next-btn");
var questionIndex = 0;

// End page variables
var endEl = document.querySelector("#end-game");
var finalScore = document.querySelector(".score");
var score = 0;
// var storedScore = JSON.parse(localStorage.getItem("score")) || [];
var inputInitials = document.querySelector("#initials");
var submitBtn = document.querySelector(".submit");

//Reset
function init() {
    startScreen();
}

// Question Array
var questions = [
    {
        question: "Which of the following adds an item to an array?",
        choices: ["push", "pop", "round", "length"],
        correct: "push",
    },

    {
        question: "What can be used to declare a variable and the value can be changed at a later time within the JavaScript code?",
        choices: ["const", "let", "var", "length"],
        correct: "var",
    },

    {
        question: "What does it mean when a variable has been declared but a value has not yet been assigned to that variable?",
        choices: ["null", "undefined", "undeclared", "length"],
        correct: "undefined",
    },

    {
        question: "The document comes under the windows object and can also be considered as it's what?",
        choices: ["const", "let", "method", "property"],
        correct: "property",
    },

    {
        question: "What method rounds a value to the nearest integar and then returns it",
        choices: ["length", "round", "date", "concat"],
        correct: "round",
    },
];

// for (var i = 0; i < questions.length; i++) {
//     questEl.textContent
// }

// Show and hide screens
function startScreen() {
    startEl.style.display = "block";
    startPage.style.display = "block";
    gameEl.style.display = "none";
    endEl.style.display = "none";
    // nextBtn.style.display = "none";
    seconds = 80;
}

function gameScreen() {
    startEl.style.display = "block";
    startPage.style.display = "none";
    gameEl.style.display = "block";
    questEl.style.display = "block";
    endEl.style.display = "none";
    // nextBtn.style.display = "block";
    showChoice();
    showQuestion();
    setTime();
    checkSelection();
}

function endScreen() {
    startEl.style.display = "block";
    startPage.style.display = "none";
    gameEl.style.display = "none";
    endEl.style.display = "block";
    // nextBtn.style.display = "none";
}

// Event Listener for button
startBtn.addEventListener("click", gameScreen, setTime);

// Time Display
function showTimeLeft() {
    timeEl.textContent = "Time: " + seconds;
}

function showRemainder() {
    timeEl.textContent = seconds;
}
// Times Up Message
function sendMessage() {
    timeEl.textContent = "Times Up";
}

function setTime() {
    showTimeLeft();
        timerInterval = setInterval(function() {
        seconds--;
            checkSelection();
        showTimeLeft();

        if (seconds === 0) {
            // Stops execution of action at set interval below--
            clearInterval(timerInterval);
            endScreen();
            sendMessage();
        }
    }, 1000);

    }
    // Checks answer to see if it's right
    function checkSelection() {
        var correctChoices = questions[questionIndex].correct;
        if (choicesEl === correctChoices) {
            rightOrWrong.textContent = "Correct!";
        } else {
            rightOrWrong.textContent = "Incorrect!"
            seconds -= 10;
        }
        }
// TA helped showQuestion, nextQuestion and showChoice
        // Show Question function
        var showQuestion = function () {
            var currentQuest = questions[questionIndex].question;
            questEl.textContent = currentQuest;
          };

        // Show Next Question Function
        function nextQuestion() {
            if (questionIndex < questions.length) {
              questionIndex++;
              showQuestion();
              showChoice();
            } else {
              clearInterval(timerInterval);
              endScreen();
            }
          }
        // Show choices Function
         // TA and Sub Instuctor helped with code  below
        var showChoice = function () {
            choicesEl.innerHTML = "";
            for (var i = 0; i < questions[questionIndex].choices.length; i++) {
                var newChoice = document.createElement("div");
                choicesEl.appendChild(newChoice);
                var choiceBtn = document.createElement("button");
                choiceBtn.textContent = questions[questionIndex].choices[i];
                choicesEl.appendChild(choiceBtn);
            }
            choicesEl.addEventListener("click", nextQuestion);
            checkSelection();
          }
  
          function showScore() {
            var finishedScore = JSON.parse(localStorage.getItem("highScore"))
            var createLi = document.createElement("li");
            createLi.textContent = finishedScore.highScore.initials  + " : " + finishedScore.score;
            endEl.appendChild(createLi);
            highScoreEl();
          }


          var highScoreEl = function() {
            var highScore = {
                initials: inputInitials.value,
                score: seconds
            }
            localStorage.setItem("highScore", (JSON.stringify(highScore)))
          }
          submitBtn.addEventListener("click", showScore);
            init();