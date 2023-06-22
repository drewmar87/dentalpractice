
let currentQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let categoryStats = {};


document.addEventListener("DOMContentLoaded", function() {

// Replace these with your own questions and answers
const questions = [
    {
        section: "General_Dentistry",
        type: "image",
        content: "images/image.jpg",
        answer: "Instrument 1",
        options: ["Instrument 1", "Instrument 2", "Instrument 3", "Instrument 4"]
    },
    {
        section: "Endodontics",
        type: "text",
        content: "This instrument is used for... (Describe the function here)",
        answer: "Instrument 5",
        options: ["Instrument 5", "Instrument 6", "Instrument 7", "Instrument 8"]
    },
    {
        section: "Periodontics",
        type: "text",
        content: "This instrument is used for... (Describe the function here)",
        answer: "Instrument 5",
        options: ["Instrument 5", "Instrument 6", "Instrument 7", "Instrument 8"]
    },
    {
        section: "Orthodontics",
        type: "text",
        content: "This instrument is used for... (Describe the function here)",
        answer: "Instrument 5",
        options: ["Instrument 5", "Instrument 6", "Instrument 7", "Instrument 8"]
    },
    {
        section: "Hygiene_Instruments",
        type: "image",
        content: "images/image.jpg",
        answer: "Instrument 1",
        options: ["Instrument 1", "Instrument 2", "Instrument 3", "Instrument 4"]
    },
    {
        section: "Oral_Surgery",
        type: "image",
        content: "images/image.jpg",
        answer: "Instrument 1",
        options: ["Instrument 1", "Instrument 2", "Instrument 3", "Instrument 4"]
    },
    {
        section: "Hygiene_Aids",
        type: "image",
        content: "images/image.jpg",
        answer: "Instrument 1",
        options: ["Instrument 1", "Instrument 2", "Instrument 3", "Instrument 4"]
    },
    {
        section: "Radiology_Anatomy_ID",
        type: "image",
        content: "images/image.jpg",
        answer: "Instrument 1",
        options: ["Instrument 1", "Instrument 2", "Instrument 3", "Instrument 4"]
    },
    {
        section: "Radiology_Technique_Error",
        type: "image",
        content: "images/image.jpg",
        answer: "Instrument 1",
        options: ["Instrument 1", "Instrument 2", "Instrument 3", "Instrument 4"]
    },
    {
        section: "Dental_Materials",
        type: "image",
        content: "images/image.jpg",
        answer: "Instrument 1",
        options: ["Instrument 1", "Instrument 2", "Instrument 3", "Instrument 4"]
    },

    // Add more questions here
];














// Randomize the question order
questions.sort(() => Math.random() - 0.5);



function startGame() {
    let selectedCategories = [];
    document.querySelectorAll('input[name="category"]:checked').forEach((checkbox) => {
        selectedCategories.push(checkbox.value);
    });
    
    // Initialize the stats for the selected categories
    selectedCategories.forEach(category => {
        categoryStats[category] = {
            total: 0,
            correct: 0
        };
    });


    // Filter the questions based on the selected categories
    currentQuestions = questions.filter(question => selectedCategories.includes(question.section));

    // Count the total number of questions per category
    currentQuestions.forEach(question => {
        categoryStats[question.section].total++;
    });
    
    // Randomize the question order
    currentQuestions.sort(() => Math.random() - 0.5);

    // Hide options menu and show game
    document.getElementById('optionsMenu').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.getElementById('score').style.display = 'block';
  //  document.getElementById('controls').style.display = 'block';
    loadQuestion();
}







function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    if (question.type === "image") {
        document.getElementById("questionImage").src = question.content;
        document.getElementById("questionImage").style.display = "block";
    } else {
        document.getElementById("questionImage").style.display = "none";
    }

    document.getElementById("question").textContent = question.type === "image" ? "What instrument is this?" : question.content;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    question.options.forEach(option => {
        const div = document.createElement("div");
        div.textContent = option;
        div.className = "option";
        div.onclick = function () {
            if (option === question.answer) {
                correctCount++;
                document.getElementById("correctCount").textContent = correctCount;
                document.getElementById("correctCount").style.color = "green";
            } else {
                incorrectCount++;
                document.getElementById("incorrectCount").textContent = incorrectCount;
                document.getElementById("incorrectCount").style.color = "red";
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuestions.length) {
                loadQuestion();
            } else {
                endGame();
            }
        };
        optionsDiv.appendChild(div);
    });
}

function endGame() {
    document.getElementById("game").innerHTML = "<h1>Game Over!</h1>";


}

document.getElementById("startOver").onclick = function () {
    if (confirm('Are you sure you want to start over?')) {
        location.reload();
    }
};




document.querySelector('#startButton').addEventListener('click', startGame);
});



function generateReport() {
    let name = document.getElementById("name-input").value;
    let date = new Date();
    let totalScore = correctCount + incorrectCount;
    let percentCorrect = (correctCount / totalScore) * 100;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`; // Convert time to HH:MM format
    // Remove previous report if exists
    document.getElementById("results-tbody").innerHTML = '';

    // Generate the unique identifier code
    let nameLength = name.replace(/\s/g, '').length;  // Removing spaces from name to get true length
    let firstLetter = name.charAt(0).toUpperCase();
    let lastLetter = name.charAt(name.length - 1).toUpperCase();
    let paddingLength = Math.ceil(nameLength / 2) - 1; // Subtract 1 for the 2 characters in the middle

    let possibleChars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*';
    let randomCharsPrefix = Array(paddingLength).fill('').map(() => possibleChars[Math.floor(Math.random() * possibleChars.length)]).join('');
    let randomCharsSuffix = Array(paddingLength).fill('').map(() => possibleChars[Math.floor(Math.random() * possibleChars.length)]).join('');

    let identifierCode;
    if (totalScore >= 50) {
        identifierCode = randomCharsPrefix.toUpperCase() + firstLetter + lastLetter + randomCharsSuffix.toUpperCase();
    } else {
        identifierCode = randomCharsPrefix.toUpperCase() + lastLetter + firstLetter + randomCharsSuffix.toUpperCase();
    }



    let data = [
        {label: "Identification Exercises"},
        {label: "Name", value: name},
        {label: "Date", value: date.toLocaleDateString()},
	{label: "Time", value: time},
        {label: "Overall Correct", value: correctCount},
        {label: "Overall Incorrect", value: incorrectCount},
        {label: "Overall Score", value: percentCorrect.toFixed(2) + "%"},
        {label: "Identifier Code", value: identifierCode}  // Add the unique identifier code to the table
    ]

 for (let category in categoryStats) {
        let total = categoryStats[category].total;
        let correct = categoryStats[category].correct;
        let percentCorrect = (correct / total) * 100;

        data.push({label: `Total questions: ${category}`, value: total});
        data.push({label: `Percent correct: ${category}`, value: percentCorrect.toFixed(2) + "%"});
    }


    for (let item of data) {
        // Create a new table row
        let tr = document.createElement('tr');

        // Create and set the values for each table cell
        let labelTd = document.createElement('td');
        labelTd.textContent = item.label;
        tr.appendChild(labelTd);

        let valueTd = document.createElement('td');
        valueTd.textContent = item.value;
        tr.appendChild(valueTd);

        // Add the new table row to the table
        document.getElementById("results-tbody").appendChild(tr);
    }





    document.getElementById("input-div").style.display = "none";
    document.getElementById("table-container").style.display = "block";
}