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
var questEl = document.querySelector(".quiz-question");
var choicesEl = document.querySelector(".quiz-choices");
var rightOrWrong = document.querySelector(".correct-incorrect");
var nextBtn = document.querySelector("#next-btn");
var questionIndex = 0;

// End page variables
var endEl = document.querySelector("#end-game");
var finalScore = document.querySelector(".score");
var inputInitials = document.querySelector("#initials");
var submitBtn = document.querySelector(".submit");

// Timer
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

// Show and hide screens
function startScreen() {
    startEl.style.display = "block";
    startPage.style.display = "block";
    gameEl.style.display = "none";
    endEl.style.display = "none";
    nextBtn.style.display = "none";
    seconds = 80;
}

function gameScreen() {
    startEl.style.display = "block";
    startPage.style.display = "none";
    gameEl.style.display = "block";
    questEl.style.display = "block";
    endEl.style.display = "none";
    nextBtn.style.display = "block";
    showChoice();
    showQuestion();
    setTime();
}

function endScreen() {
    startEl.style.display = "block";
    startPage.style.display = "none";
    gameEl.style.display = "none";
    endEl.stlye.display = "block";
    nextBtn.style.display = "none";
}

// Event Listener for button
startBtn.addEventListener("click", gameScreen, setTime);

// Timer
function showTimeLeft() {
    timeEl.textContent = "Time: " + seconds;
}
// Times Up Message
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

        // Show Question function
        var showQuestion = function () {
            var quest = document.createElement('h4');
            questEl.appendChild(quest);
            quest.textContent = questions[questionIndex].question
            }
        // }
        // Show Next Question Function
        function nextQuestion() {
            if (questionIndex < questions.length) {
                showQuestion();
            } else {
                clearInterval(timerInterval);
                endScreen();
                }
            }
        // Show choices Function
        var showChoice = function () {
            // choicesEl.innerHTML = "";
            var choice = document.createElement('p');
            choicesEl.appendChild(choice);
            choice.textContent = questions[questionIndex].choices
            };

            // Event Listener for Next Button
                nextBtn.addEventListener("click", nextQuestion);

            // Local Storage 
            function submitScore(event) {
                event.preventDefault();
                var storedScores = JSON.parse(localStorage.getItm("highScore")) || [];
                var finalizedScores = stored.concat({
                });
                localStorage.setItem("highScore", JSON.stringify(finalizedScores));

            }

            function showHighScores() {
                var highScore = localStorage.getItem("highScores");
                showHighScores.textContent = highScore;
                finalScore.textContent = seconds;
            }
                submitBtn.addEventListener("click", submitBtn, submitScore);
            init();