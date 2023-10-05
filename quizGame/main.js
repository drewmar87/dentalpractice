let questions = [];
let dynamicRows = "";

document.getElementById('quiz-selection-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting normally
  
  // Clear previous questions
  questions = [];

  // Check which categories were selected and load the corresponding question sets
if (document.getElementById('infectionControlCheckbox').checked) {
  infectionControlQuestions.forEach(question => addQuestion(question));
}

if (document.getElementById('rhsCheckbox').checked) {
  rhsQuestions.forEach(question => addQuestion(question));
}

if (document.getElementById('chairsideCheckbox').checked) {
  chairsideQuestions.forEach(question => addQuestion(question));
}
if (document.getElementById('techniqueErrorsCheckbox').checked) {
  techniqueErrorsQuestions.forEach(question => addQuestion(question));
}


shuffleQuestions(questions);
showQuestion();

});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  // Swap elements
  }
}


function shuffleQuestions(questions) {
  shuffleArray(questions);
}


let currentQuestion = 0;
let correct = 0;
let incorrect = 0;
let questionAnswered = false;  // New variable to track if the question is answered
let currentDate = new Date();

// new code
let categoryStats = {
  'Infection Control': { total: 0, correct: 0, answered: 0 },
  'RHS': { total: 0, correct: 0, answered: 0 },
  'Chairside': { total: 0, correct: 0, answered: 0 },
  'Technique Errors': { total: 0, correct: 0, answered: 0 },
};


// When a question is added to the questions array, increment the total for its category
function addQuestion(question) {
  questions.push(question);
  categoryStats[question.category].total++;
}

// end new code

function answerQuestion(i) {
  // Only proceed if the question hasn't been answered
  if (!questionAnswered) {
    // Set questionAnswered to true immediately after an answer is selected
    questionAnswered = true;
	    categoryStats[questions[currentQuestion].category].answered++;
    // Disable all answer buttons
    questions[currentQuestion].answers.forEach((_, index) => {
      document.getElementById(`btn${index}`).disabled = true;
    });

    if (i === questions[currentQuestion].correct) {
      document.getElementById(`btn${i}`).style.backgroundColor = 'green';
      correct++;
      categoryStats[questions[currentQuestion].category].correct++;  // Update the correct count for the category
    } else {
      document.getElementById(`btn${i}`).style.backgroundColor = 'red';
      incorrect++;
      setTimeout(() => showRationale(i), 1000);
      return; // prevent the next question from showing immediately
    }

    document.getElementById('correct').textContent = correct;
    document.getElementById('incorrect').textContent = incorrect;
    setTimeout(nextQuestion, 750);
  }
}


function showQuestion() {
  // Set questionAnswered to false when showing a new question
  questionAnswered = false;

  // Hide quiz selection form
  document.getElementById('quiz-selection-form').style.display = "none";

  document.getElementById('question-container').style.display = "block";
  document.getElementById('score-container').style.display = "block";

  // Update correct and incorrect counts at the start of every question
  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;
  updatePercentageCorrect();
  
  const totalQuestionsElement = document.getElementById('total-questions');
  totalQuestionsElement.textContent = `${currentQuestion + 1} / ${questions.length}`;

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
  });
}

function showRationale(i) {
  let rationaleHtml = `
    <h2>${questions[currentQuestion].question}</h2>
    ${questions[currentQuestion].image ? `<div class="img-container"><img src="${questions[currentQuestion].image}" alt="Quiz question image"></div>` : ''}
    <table>
      <tr>
        <th>Your Answer</th>
        <td class="your-answer">${questions[currentQuestion].answers[i]}</td>
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
  
  // Update the counts again after showing the rationale
  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;
}





function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    // Update the counts one final time after the last question
    document.getElementById('correct').textContent = correct;
    document.getElementById('incorrect').textContent = incorrect;
    document.getElementById('question-container').innerHTML = "<h2>Quiz Finished!</h2>";

  }
}

function updatePercentageCorrect() {
  let percentageCorrect = 0; // Default value

  // Only calculate the percentage if at least one question has been answered
  if (correct + incorrect > 0) {
    percentageCorrect = (correct / (correct + incorrect)) * 100;
  }

  // Update the text content of the 'percentage-correct' div with the percentage.
  // The 'toFixed(2)' part ensures that only two decimal places are shown.
  document.getElementById('percentage-correct').textContent = 'Percentage correct: ' + percentageCorrect.toFixed(2) + '%';
}








// End Button and Table

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
  let nameParts = playerName.split(' ');
  let firstName = nameParts[0];
  let lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

  // Generate a random string of 14 characters
  let uniqueIdentifier = randomString(14);

  // Insert the first letter of the first name and the last letter of the last name in the middle of the string
  let midIndex = Math.floor(uniqueIdentifier.length / 2);
  uniqueIdentifier = uniqueIdentifier.substring(0, midIndex) + firstName.charAt(0).toLowerCase() + lastName.charAt(lastName.length - 1).toLowerCase() + uniqueIdentifier.substring(midIndex + 2);

dynamicRows = "";

// Check if the "Infection Control" category was selected
if (document.getElementById('infectionControlCheckbox').checked) {
  dynamicRows += `<tr><th style="border: 1px solid black; padding: 10px;">Percentage Infection Control (Answered: ${categoryStats['Infection Control'].answered}; Correct: ${categoryStats['Infection Control'].correct})</th><td style="border: 1px solid black; padding: 10px;">${(categoryStats['Infection Control'].answered > 0) ? ((categoryStats['Infection Control'].correct / categoryStats['Infection Control'].answered) * 100).toFixed(2) : 'N/A'}%</td></tr>`;
}

// Check if the "RHS" category was selected
if (document.getElementById('rhsCheckbox').checked) {
  dynamicRows += `<tr><th style="border: 1px solid black; padding: 10px;">Percentage RHS (Answered: ${categoryStats['RHS'].answered}; Correct: ${categoryStats['RHS'].correct})</th><td style="border: 1px solid black; padding: 10px;">${(categoryStats['RHS'].answered > 0) ? ((categoryStats['RHS'].correct / categoryStats['RHS'].answered) * 100).toFixed(2) : 'N/A'}%</td></tr>`;
}

// Check if the "Chairside" category was selected
if (document.getElementById('chairsideCheckbox').checked) {
  dynamicRows += `<tr><th style="border: 1px solid black; padding: 10px;">Percentage Chairside (Answered: ${categoryStats['Chairside'].answered}; Correct: ${categoryStats['Chairside'].correct})</th><td style="border: 1px solid black; padding: 10px;">${(categoryStats['Chairside'].answered > 0) ? ((categoryStats['Chairside'].correct / categoryStats['Chairside'].answered) * 100).toFixed(2) : 'N/A'}%</td></tr>`;
}

	
let printableTable = `
  <table style="width: 50%; margin: 0 auto; border-collapse: collapse;">
    <tr><th style="border: 1px solid black; padding: 10px;">Name</th><td style="border: 1px solid black; padding: 10px;">${playerName}</td></tr>
    <tr><th style="border: 1px solid black; padding: 10px;">Date & Time</th><td style="border: 1px solid black; padding: 10px;">${currentDate}</td></tr>
    <tr><th style="border: 1px solid black; padding: 10px;">Correct</th><td style="border: 1px solid black; padding: 10px;">${correct}</td></tr>
    <tr><th style="border: 1px solid black; padding: 10px;">Incorrect</th><td style="border: 1px solid black; padding: 10px;">${incorrect}</td></tr>
    <tr><th style="border: 1px solid black; padding: 10px;">Percentage Overall</th><td style="border: 1px solid black; padding: 10px;">${((correct / (correct + incorrect)) * 100).toFixed(2)}%</td></tr>
    ${dynamicRows}  <!-- Insert the dynamic rows here -->
    <tr><th style="border: 1px solid black; padding: 10px;">Unique Identifier</th><td style="border: 1px solid black; padding: 10px;">${uniqueIdentifier}</td></tr>
  </table>
`;




  // Add the printableTable to the document. Here, it's added to the end of the body. You could add it wherever you want.
  document.body.innerHTML += printableTable;
});


function randomString(length) {
  let result = '';
  let characters = '1234567890!@#$%&qwertyuiopasdfghjklzxcvbnm';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


