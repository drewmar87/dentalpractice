// Initialize questions array for RHS only
let questions = [...rhsQuestions];
let currentQuestion = 0;
let correct = 0;
let incorrect = 0;
let questionAnswered = false;

// Category stats for RHS only
let categoryStats = {
  'RHS': { total: questions.length, correct: 0, answered: 0 },
};

// Function to shuffle questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleQuestions() {
  shuffleArray(questions);
}

// Function to start the RHS Quiz
function startRHSQuiz() {
  shuffleQuestions();
  showQuestion();
}

// Function to display a question
function showQuestion() {
  // Reset questionAnswered flag
  questionAnswered = false;

  // Hide "Begin" button
  document.getElementById('beginButton').style.display = 'none';

  // Show question and score containers
  document.getElementById('question-container').classList.remove('hidden');
  document.getElementById('score-container').classList.remove('hidden');

  // Update score display
  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;
  updatePercentageCorrect();

  // Update total questions display
  const totalQuestionsElement = document.getElementById('total-questions');
  totalQuestionsElement.textContent = `${currentQuestion + 1} / ${questions.length}`;

  // Generate HTML for the current question
  let questionHtml = `
    <h2>${questions[currentQuestion].question}</h2>
    ${questions[currentQuestion].image ? `<div class="img-container"><img src="${questions[currentQuestion].image}" alt="Quiz question image"></div>` : ''}
    ${questions[currentQuestion].answers.map((a, i) => `
      <div class="button-container"><button id="btn${i}" onclick="answerQuestion(${i})">${a}</button></div>
    `).join('')}
  `;

  document.getElementById("question-container").innerHTML = questionHtml;

  // Enable all answer buttons
  questions[currentQuestion].answers.forEach((_, index) => {
    document.getElementById(`btn${index}`).disabled = false;
    document.getElementById(`btn${index}`).style.backgroundColor = ''; // Reset button color
  });
}

// Function to handle answering a question
function answerQuestion(selectedIndex) {
  if (!questionAnswered) {
    questionAnswered = true;
    categoryStats['RHS'].answered++;

    // Disable all buttons
    questions[currentQuestion].answers.forEach((_, index) => {
      document.getElementById(`btn${index}`).disabled = true;
    });

    if (selectedIndex === questions[currentQuestion].correct) {
      document.getElementById(`btn${selectedIndex}`).style.backgroundColor = 'green';
      correct++;
      categoryStats['RHS'].correct++;
    } else {
      document.getElementById(`btn${selectedIndex}`).style.backgroundColor = 'red';
      incorrect++;
      setTimeout(() => showRationale(selectedIndex), 1000);
      return; // Prevent proceeding to next question immediately
    }

    updateScoreDisplay();
    setTimeout(nextQuestion, 750);
  }
}

// Function to display rationale for incorrect answers
function showRationale(selectedIndex) {
  let rationaleHtml = `
    <h2>${questions[currentQuestion].question}</h2>
    ${questions[currentQuestion].image ? `<div class="img-container"><img src="${questions[currentQuestion].image}" alt="Quiz question image"></div>` : ''}
    <table>
      <tr>
        <th>Your Answer</th>
        <td class="your-answer">${questions[currentQuestion].answers[selectedIndex]}</td>
      </tr>
      <tr>
        <th>Correct Answer</th>
        <td class="correct-answer">${questions[currentQuestion].answers[questions[currentQuestion].correct]}</td>
      </tr>
      <tr>
        <th>Rationale</th>
        <td>${questions[currentQuestion].rationale}${questions[currentQuestion].rationaleImage ? `<br><img src="${questions[currentQuestion].rationaleImage}" alt="Rationale image">` : ''}</td>
      </tr>
    </table>
    <div class="button-container"><button onclick="nextQuestion()">Next Question</button></div>
  `;

  document.getElementById("question-container").innerHTML = rationaleHtml;

  updateScoreDisplay();
}

// Function to proceed to the next question
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

// Function to update the score display
function updateScoreDisplay() {
  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;
  updatePercentageCorrect();
  document.getElementById('total-questions').textContent = `${currentQuestion + 1} / ${questions.length}`;
}

// Function to calculate and display the percentage of correct answers
function updatePercentageCorrect() {
  let percentageCorrect = 0;

  if (correct + incorrect > 0) {
    percentageCorrect = (correct / (correct + incorrect)) * 100;
  }

  document.getElementById('percentage-correct').textContent = 'Percentage correct: ' + percentageCorrect.toFixed(2) + '%';
}

// Function to finish the quiz
function finishQuiz() {
  document.getElementById('question-container').innerHTML = "<h2>Quiz Finished!</h2>";

  // Optionally, you can hide other elements or display final results here
}

// End Game and Scoring Functionality
document.getElementById('endGameButton').addEventListener('click', function() {
  document.getElementById('question-container').style.display = "none";
  document.getElementById('score-container').style.display = "block";
  document.getElementById('numbers-container').style.display = "none";
  document.getElementById('endGamePopup').style.display = "block";
  document.getElementById('endGameButton').style.display = "none";
  document.getElementById('total-questions').style.display = "none";
});

document.getElementById('confirmEndGame').addEventListener('click', function() {
  document.getElementById('endGamePopup').style.display = "none";
  document.getElementById('enterNamePopup').style.display = "block";
});

document.getElementById('cancelEndGame').addEventListener('click', function() {
  document.getElementById('endGamePopup').style.display = "none";
  document.getElementById('question-container').style.display = "block";
  document.getElementById('score-container').style.display = "block";
  document.getElementById('numbers-container').style.display = "block";
  document.getElementById('endGameButton').style.display = "";
});

document.getElementById('submitName').addEventListener('click', function() {
  let playerName = document.getElementById('playerNameInput').value;

  if (!playerName.trim()) {
    alert('Please enter your name');
    return;
  }

  document.getElementById('enterNamePopup').style.display = "none";

  // Split the player's name into first and last names
  let nameParts = playerName.trim().split(' ');
  let firstName = nameParts[0];
  let lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

  // Generate a random string of 14 characters
  let uniqueIdentifier = randomString(14);

  // Insert the first letter of the first name and the last letter of the last name in the middle of the string
  let midIndex = Math.floor(uniqueIdentifier.length / 2);
  uniqueIdentifier = uniqueIdentifier.substring(0, midIndex) + 
                     (firstName.charAt(0) || '') +
                     (lastName.charAt(lastName.length - 1) || '') + 
                     uniqueIdentifier.substring(midIndex + 2);

  // Create the results table
  let printableTable = `
    <table style="width: 50%; margin: 20px auto; border-collapse: collapse;">
      <tr>
        <th style="border: 1px solid black; padding: 10px;">Name</th>
        <td style="border: 1px solid black; padding: 10px;">${playerName}</td>
      </tr>
      <tr>
        <th style="border: 1px solid black; padding: 10px;">Date & Time</th>
        <td style="border: 1px solid black; padding: 10px;">${new Date().toLocaleString()}</td>
      </tr>
      <tr>
        <th style="border: 1px solid black; padding: 10px;">Correct</th>
        <td style="border: 1px solid black; padding: 10px;">${correct}</td>
      </tr>
      <tr>
        <th style="border: 1px solid black; padding: 10px;">Incorrect</th>
        <td style="border: 1px solid black; padding: 10px;">${incorrect}</td>
      </tr>
      <tr>
        <th style="border: 1px solid black; padding: 10px;">Percentage Overall</th>
        <td style="border: 1px solid black; padding: 10px;">${((correct / (correct + incorrect)) * 100).toFixed(2)}%</td>
      </tr>
      <tr>
        <th style="border: 1px solid black; padding: 10px;">Percentage RHS</th>
        <td style="border: 1px solid black; padding: 10px;">${((categoryStats['RHS'].correct / categoryStats['RHS'].answered) * 100).toFixed(2)}%</td>
      </tr>
      <tr>
        <th style="border: 1px solid black; padding: 10px;">Unique Identifier</th>
        <td style="border: 1px solid black; padding: 10px;">${uniqueIdentifier}</td>
      </tr>
    </table>
  `;

  // Add the printableTable to the document
  document.body.innerHTML += printableTable;
});

// Function to generate a random string of specified length
function randomString(length) {
  let result = '';
  let characters = '1234567890!@#$%&qwertyuiopasdfghjklzxcvbnm';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Event listener for the "Begin" button
document.getElementById('beginButton').addEventListener('click', function() {
  startRHSQuiz();
});
