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
  totalQuestionsElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

  // Generate HTML for the current question
  let questionHtml = `
    <h2>${questions[currentQuestion].question}</h2>
    ${questions[currentQuestion].image ? `<div class="img-container"><img src="${questions[currentQuestion].image}" alt="Quiz question image" style="max-width: 100%; height: auto;"></div>` : ''}
    ${questions[currentQuestion].answers.map((a, i) => `
      <div class="button-container"><button id="btn${i}" onclick="answerQuestion(${i})">${a}</button></div>
    `).join('')}
  `;

  document.getElementById("question-container").innerHTML = questionHtml;

  // Enable all answer buttons and reset their styles
  questions[currentQuestion].answers.forEach((_, index) => {
    const btn = document.getElementById(`btn${index}`);
    btn.disabled = false;
    btn.style.backgroundColor = ''; // Reset button color
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
    ${questions[currentQuestion].image ? `<div class="img-container"><img src="${questions[currentQuestion].image}" alt="Quiz question image" style="max-width: 100%; height: auto;"></div>` : ''}
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
        <td>${questions[currentQuestion].rationale}${questions[currentQuestion].rationaleImage ? `<br><img src="${questions[currentQuestion].rationaleImage}" alt="Rationale image" style="max-width: 100%; height: auto;">` : ''}</td>
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
  document.getElementById('total-questions').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
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
  // Hide question container
  document.getElementById('question-container').classList.add('hidden');
  
  // Update score container to show final results
  const scoreContainer = document.getElementById('score-container');
  scoreContainer.innerHTML = `
    <h2>Quiz Finished!</h2>
    <p>Correct: <span style="color:green;">${correct}</span></p>
    <p>Incorrect: <span style="color:red;">${incorrect}</span></p>
    <p>${(correct + incorrect) > 0 ? 'Percentage Correct: ' + ((correct / (correct + incorrect)) * 100).toFixed(2) + '%' : 'No questions answered.'}</p>
    <p>Thank you for completing the Radiation Health and Safety Exam!</p>
    <button id="restartButton" style="padding: 10px 20px; font-size: 18px; margin-top: 20px;">Restart Quiz</button>
  `;

  // Add event listener to restart the quiz
  document.getElementById('restartButton').addEventListener('click', function() {
    // Reset all variables
    currentQuestion = 0;
    correct = 0;
    incorrect = 0;
    categoryStats['RHS'].correct = 0;
    categoryStats['RHS'].answered = 0;

    // Show the "Begin" button again and hide the score container
    scoreContainer.classList.add('hidden');
    document.getElementById('beginButton').style.display = 'block';
  });
}

// Function to restart the quiz (optional, enhances user experience)
function restartQuiz() {
  // This function can be expanded if additional reset logic is needed
}

// Event listener for the "Begin" button
document.getElementById('beginButton').addEventListener('click', function() {
  startRHSQuiz();
});
