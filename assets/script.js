// Start page header variables
var startEl = document.querySelector("#start-page");
var displayScores = document.querySelector(".highscore");
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
var rightOrWrong = document.querySelector(".correct-incorrect");
var questionIndex = 0;

// End page variables
var endEl = document.querySelector("#end-game");
var finalScore = document.querySelector(".score");
var inputInitials = document.querySelector("#initials");
var submitBtn = document.querySelector(".submit");

// Timer

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

// Show and hide screens
function startScreen() {
    startEl.style.display = "block";
    startPage.style.display = "block";
    gameEl.style.display = "none";
    endEl.stlye.display = "none";
    seconds = 80;
}

function gameScreen() {
    startEl.style.display = "block";
    startPage.style.display = "none";
    gameEl.style.display = "block";
    endEl.stlye.display = "none";

}

function endScreen() {
    startEl.style.display = "block";
    startPage.style.display = "none";
    gameEl.style.display = "none";
    endEl.stlye.display = "block";
}

// Event Listener for button
startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", gameScreen);
submitBtn.addEventListener("click", );

// Timer
function showTimeLeft() {
    timeEl.textContent = "Time: " + seconds;
}

function sendMessage() {
    timeEl.textContent = "Times Up";
}

function setTime() {
    showTimeLeft();
        timerInterval = setInterval(function() {
        seconds--;

        showTimeLeft();

        if (seconds === 0) {
            // Stops execution of action at set interval below--
            clearInterval(timerInterval);
            sendMessage();
            endScreen();
        }
    }, 1000);

    }
    // Checks answer to see if it's right
    function checkSelection(choices) {
        var correctChoices = questions[questionIndex].correct;
        if (choices == correctChoices) {
            rightOrWrong.textContent = "Incorrect!";
            seconds -= 10;
        } else {
            rightOrWrong.textContent = "Correct!"
        }
            
        }
        // 

        function 


