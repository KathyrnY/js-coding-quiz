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
    question:
      "What can be used to declare a variable and the value can be changed at a later time within the JavaScript code?",
    choices: ["const", "let", "var", "length"],
    correct: "var",
  },

  {
    question:
      "What does it mean when a variable has been declared but a value has not yet been assigned to that variable?",
    choices: ["null", "undefined", "undeclared", "length"],
    correct: "undefined",
  },

  {
    question:
      "The document comes under the windows object and can also be considered as it's what?",
    choices: ["const", "let", "method", "property"],
    correct: "property",
  },

  {
    question:
      "What method rounds a value to the nearest integar and then returns it",
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
  timerInterval = setInterval(function () {
    seconds--;
    showTimeLeft()
    
    if (seconds < 1) {
      // Stops execution of action at set interval below--
      clearInterval(timerInterval);
      endScreen();
      sendMessage();
    }
  }, 1000);
}
// Checks answer to see if it's right and tutor David helped me modify this code
function checkSelection(event) {
  var clickedBtn = event.target;
  var textFromBtn = clickedBtn.textContent;
  var correctChoice = questions[questionIndex].correct;
  if (textFromBtn === correctChoice) {
    rightOrWrong.textContent = "Correct!";
  } else {
    rightOrWrong.textContent = "Incorrect!";
    seconds -= 10;
  }
  questionIndex++;
  nextQuestion();
}
// TA helped modified showQuestion, nextQuestion and showChoice
// Show Question function
var showQuestion = function () {
  var currentQuest = questions[questionIndex].question;
  questEl.textContent = currentQuest;
};

// Show Next Question Function
function nextQuestion() {
  if (questionIndex < questions.length) {
    showQuestion();
    showChoice();
  } else {
    clearInterval(timerInterval);
    endScreen();
  }
}
// Show choices Function
// TA (Sean) Sub Instuctor (Vito) and Tutor David helped modify code all three functions below
var showChoice = function () {
  choicesEl.innerHTML = "";
  for (var i = 0; i < questions[questionIndex].choices.length; i++) {
    var newChoice = document.createElement("div");
    choicesEl.appendChild(newChoice);
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = questions[questionIndex].choices[i];
    choiceBtn.addEventListener("click", checkSelection);
    choicesEl.appendChild(choiceBtn);
  }
};
// local storage 
function showScore() {
  var finishedScore = JSON.parse(localStorage.getItem("highScore"));
  console.log(finishedScore[0].initials);
  for (var i = 0; i < finishedScore.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = finishedScore[i].initials + " : " + finishedScore[i].score;
    endEl.appendChild(createLi);
  }
}

function saveHighScore(event) {
  event.preventDefault();
  var existingScores = JSON.parse(localStorage.getItem("highScore")) || [];
  var highScore = {
    initials: inputInitials.value,
    score: seconds,
  };
  existingScores.push(highScore);
  localStorage.setItem("highScore", JSON.stringify(existingScores));
  showScore();
}
submitBtn.addEventListener("click", saveHighScore);
init();
