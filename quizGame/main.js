// main.js

let questions = [...rhsQuestions]; // Clone the rhsQuestions array
let currentQuestion = 0;
let correct = 0;
let incorrect = 0;
let questionAnswered = false;

// Shuffle questions at the start
shuffleQuestions();

// Function to shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleQuestions() {
    shuffleArray(questions);
}

// Function to start the quiz
function startQuiz() {
    // Hide the "Begin" button
    document.getElementById('beginButton').style.display = 'none';

    // Show the question and score containers
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('score-container').classList.remove('hidden');

    // Display the first question
    showQuestion();
}

// Function to display a question
function showQuestion() {
    questionAnswered = false;

    // Update score display
    document.getElementById('correct').textContent = correct;
    document.getElementById('incorrect').textContent = incorrect;
    updatePercentageCorrect();

    // Update total questions display
    const totalQuestionsElement = document.getElementById('total-questions');
    totalQuestionsElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;

    // Generate HTML for the current question
    const currentQ = questions[currentQuestion];
    let questionHtml = `
        <h2>${currentQ.question}</h2>
        ${currentQ.image ? `<div class="img-container"><img src="${currentQ.image}" alt="Quiz question image" style="max-width: 100%; height: auto;"></div>` : ''}
        ${currentQ.answers.map((answer, index) => `
            <div class="button-container">
                <button id="btn${index}" data-index="${index}">${answer}</button>
            </div>
        `).join('')}
    `;

    document.getElementById("question-container").innerHTML = questionHtml;

    // Reset button styles and enable them
    currentQ.answers.forEach((_, index) => {
        const btn = document.getElementById(`btn${index}`);
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect'); // Remove previous classes

        // Remove existing event listeners by cloning the node
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        // Add a new event listener
        newBtn.addEventListener('click', () => handleAnswer(index));
    });
}

// Function to handle an answer selection
function handleAnswer(selectedIndex) {
    console.log(`handleAnswer called with index: ${selectedIndex}`);

    if (questionAnswered) return; // Prevent multiple answers

    questionAnswered = true;

    const currentQ = questions[currentQuestion];

    // Disable all buttons
    currentQ.answers.forEach((_, index) => {
        const btn = document.getElementById(`btn${index}`);
        console.log(`Disabling button with id: btn${index}`);
        btn.disabled = true;
    });

    if (selectedIndex === Number(currentQ.correct)) { // Ensure type consistency
        const selectedBtn = document.getElementById(`btn${selectedIndex}`);
        console.log(`Correct answer selected. Adding 'correct' class to btn${selectedIndex}.`);
        selectedBtn.classList.add('correct');
        correct++;
    } else {
        const selectedBtn = document.getElementById(`btn${selectedIndex}`);
        console.log(`Incorrect answer selected. Adding 'incorrect' class to btn${selectedIndex}.`);
        selectedBtn.classList.add('incorrect');

        const correctBtn = document.getElementById(`btn${currentQ.correct}`);
        console.log(`Adding 'correct' class to btn${currentQ.correct}.`);
        correctBtn.classList.add('correct');

        incorrect++;

        // Optionally, show rationale after a short delay
        setTimeout(() => showRationale(selectedIndex), 1000); // Increased delay
        return; // Wait for rationale before moving to next question
    }

    // Update scores
    document.getElementById('correct').textContent = correct;
    document.getElementById('incorrect').textContent = incorrect;
    updatePercentageCorrect();

    // Move to the next question after a short delay
    setTimeout(nextQuestion, 1000); // Increased delay
}

// Function to display rationale for incorrect answers
function showRationale(selectedIndex) {
    const currentQ = questions[currentQuestion];

    let rationaleHtml = `
        <h2>${currentQ.question}</h2>
        ${currentQ.image ? `<div class="img-container"><img src="${currentQ.image}" alt="Quiz question image"></div>` : ''}
        <table class="rationale-table">
            <tr>
                <th>Your Answer</th>
                <td class="incorrect">${currentQ.answers[selectedIndex]}</td>
            </tr>
            <tr>
                <th>Correct Answer</th>
                <td class="correct">${currentQ.answers[currentQ.correct]}</td>
            </tr>
            <tr>
                <th>Rationale</th>
                <td>
                    ${currentQ.rationale}
                    ${currentQ.rationaleImage ? `<br><img src="${currentQ.rationaleImage}" alt="Rationale image">` : ''}
                </td>
            </tr>
        </table>
        <div class="button-container"><button onclick="nextQuestion()">Next Question</button></div>
    `;

    document.getElementById("question-container").innerHTML = rationaleHtml;

    // Update scores
    document.getElementById('correct').textContent = correct;
    document.getElementById('incorrect').textContent = incorrect;
    updatePercentageCorrect();
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

// Function to update the percentage correct
function updatePercentageCorrect() {
    const percentage = (correct / (correct + incorrect)) * 100 || 0;
    document.getElementById('percentage-correct').textContent = `${percentage.toFixed(1)}%`;
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

        // Shuffle questions again
        shuffleQuestions();

        // Show the "Begin" button again and hide the score container
        scoreContainer.classList.add('hidden');
        document.getElementById('beginButton').style.display = 'block';

        // Optionally, reset the score display if you want to keep it visible
        document.getElementById('correct').textContent = correct;
        document.getElementById('incorrect').textContent = incorrect;
        document.getElementById('percentage-correct').textContent = 'Percentage correct: 0.00%';
        document.getElementById('total-questions').textContent = `Question 1 of ${questions.length}`;
    });
}

// Event listener for the "Begin" button
document.getElementById('beginButton').addEventListener('click', startQuiz);
