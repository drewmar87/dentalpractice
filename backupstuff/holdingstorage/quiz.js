let questions = [
  {
    question: "After accepting employment you opt not to receive a hepatitis B vaccination and have signed a waiver to this effect. You have the right to:",
    answers: ["Change your mind and have the vaccination at your own expense",
              "Change your mind and the employer is required to provide the vaccination",
              "Demand periodic blood tests to ensure noninvasion of the hepatitis B virus in your body",
              "Sue the employer if you contact hepatitis B"],
    correct: 1,
    difficulty: 2,
    category: "Infection Control",
    rationale: "In accordance with the OSHA Bloodborne Pathogens Standard, an employee who initially declines the vaccination may at a later date, while still covered under the standard, decide to accept the offer. The employer must make the vaccine available at no charge at that time."
  },
  {
    question: "All dental professionals must use surgical masks and protective eyewear to protect the eyes and face:",
    answers: ["Only during surgical procedures",
              "Whenever the high-speed handpiece is used",
              "Whenever spatter and aerosolized sprays of blood and saliva are likely",
              "Whenever available"],
    correct: 2,
    difficulty: 1,
    category: "Infection Control",
    rationale: "In accordance with OSHA recommendations, surgical masks and protective eyewear are to be worn whenever splashes, spray, spatter, or droplets of blood or saliva may be generated and eye, nose, or mouth contamination may occur."
  },
  {
    question: "All dental assistants involved in direct patient care must undergo routine training in:",
    answers: ["Infection control, safety issues, and hazard communication",
              "Charting, taking patients vital signs, and using the office intercom system",
              "Infection control, uniform sizing, and ordering of disposables",
              "Hazardous waste management, charting, and application of dental dams"],
    correct: 0,
    difficulty: 2,
    category: "Infection Control",
    rationale: "The OSHA standard requires that employers must ensure that all employees with occupational exposure participate in a training program on the hazards associated with body fluids, safety issues, hazard communication, and the protective techniques needed to be taken to minimize the risk of occupational exposure."
  },
  {
    question: "When immunity is present at birth, it is referred to as:",
    answers: ["Acquired immunity",
              "Active immunity",
              "Artificially acquired immunity",
              "Inherited immunity"],
    correct: 3,
    difficulty: 3,
    category: "Infection Control",
    rationale: "When immunity is present at birth, it is called inherited immunity. Immunity that is developed during a person’s lifetime is called acquired immunity."
  },
  {
    question: "__________ immunity occurs when a vaccination is administered and the body forms antibodies in response to the vaccine.",
    answers: ["Active natural",
              "Active artificial",
              "Passive natural",
              "Passive artificial"],
    correct: 1,
    difficulty: 3,
    category: "Infection Control",
    rationale: "When a human body has not been exposed to a disease, it has not developed antibodies and is completely defenseless against the disease. Antibodies can be introduced into the body artificially by immunization or vaccination. The body then forms antibodies in response to the vaccine; this is known as active artificial immunity."
  },
  {
    question: "A chronic infection is best exemplified by which of the following?",
    answers: ["Human immunodeficiency virus",
              "Cold sore",
              "Common cold",
              "Pneumonia"],
    correct: 0,
    difficulty: 2,
    category: "Infection Control",
    rationale: "A chronic infection is one of long duration."
  },
  {
    question: "Which of the following exemplifies an acute infection?",
    answers: ["Hepatitis C virus",
              "Hepatitis B virus",
              "Common cold",
              "Pneumonia"],
    correct: 2,
    difficulty: 2,
    category: "Infection Control",
    rationale: "An acute infection is of short duration but may be severe."
  },
  {
    question: "Microorganisms that produce disease in humans are known as:",
    answers: ["Nonpathogenic",
              "Pathogens",
              "Pasteurized",
              "Germs"],
    correct: 1,
    difficulty: 1,
    category: "Infection Control",
    rationale: "A pathogen is a microorganism or substance capable of producing a disease."
  },
  {
    question: "Bacteria can be identified by shape. Which of the following is the shape of bacilli?",
    answers: ["Spherical",
              "Rod",
              "Spiral",
              "Triangular"],
    correct: 1,
    difficulty: 2,
    category: "Infection Control",
    rationale: "Bacteria can be found in only three shapes: spherical, rod, or spiral. Bacilli are rods, cocci are spherical, and spirochetes are spiral."
  },
  {
    question: "An infection that results from a defective immune system that cannot defend against pathogens normally found in the environment is a(n):",
    answers: ["Chronic infection",
              "Latent infection",
              "Acute infection",
              "Opportunistic infection"],
    correct: 3,
    difficulty: 2,
    category: "Infection Control",
    rationale: "An opportunistic infection results from a defective immune system that cannot defend against pathogens normally found in the environment. These infections are seen in patients receiving large doses of steroids or other immunosuppressive drugs and in patients with acquired immunodeficiency syndrome."
  },
  {
    question: "Which of the following is an example of parenteral disease transmission in dentistry?",
    answers: ["Touching or contact with patient’s blood or other body fluids", "Touching or contact with a contaminated surface", "Contagious droplet infection occurring through mucosal surfaces of the eyes, nose, or mouth", "Needle stick injury, cuts, abrasions, or any break in the skin"],
    correct: 3,
    difficulty: 2,
    category: "Infection Control",
    rationale: "Parenteral disease transmission can occur with a needle stick injury, human bites, cuts, abrasions, or any break in the skin. The other answers refer to direct, indirect, and droplet forms of transmission."
  },
  {
    question: "The transmission of a disease to a susceptible person by handling contaminated instruments or by touching the face, eyes, or mouth is referred to as:",
    answers: ["Airborne transmission", "Direct transmission", "Indirect transmission", "Spatter transmission"],
    correct: 2,
    difficulty: 2,
    category: "Infection Control",
    rationale: "The indirect transfer of organisms to a susceptible person can occur by handling contaminated instruments or touching contaminated surfaces and then touching the face, eyes, or mouth."
  },
  {
    question: "Which of the following would be considered the best method for determining whether there is proper sterilization function of a sterilizer?",
    answers: ["A chemically treated tape used on packages that changes color", "The time, temperature, and pressure used", "A biological spore test through a monitoring system", "Autoclave bags"],
    correct: 2,
    difficulty: 3,
    category: "Infection Control",
    rationale: "The indirect transfer of organisms to a susceptible person can occur by handling contaminated instruments or touching contaminated surfaces and then touching the face, eyes, or mouth."
  },
  {
    question: "When a package of hazardous infectious waste is being prepared for disposal, which of the following should be considered?",
    answers: ["All infectious waste destined for disposal should be placed in closable, leak-proof containers or bags that are color coded or labeled appropriately.", "Infectious waste should be burned in a local incinerator.", "Only the clinical assistant should manage the removal of infectious waste.", "Only the office manager should manage the removal of infectious waste."],
    correct: 0,
    difficulty: 1,
    category: "Infection Control",
    rationale: "When waste leaves the office, the EPA regulations apply to the disposal. All waste containers that hold potentially infectious materials, whether regulated or nonregulated, must be placed in closable, leak-proof containers or bags that are color coded or labeled appropriately with the biohazard symbol."
  },
  {
    question: "Which of the following PPE is removed first after the completion of a clinical procedure?",
    answers: ["Gloves", "Protective eyewear", "Gown", "Mask"],
    correct: 0,
    difficulty: 1,
    category: "Infection Control",
    rationale: "The gown is removed first by reaching back and pulling it over the gloves and turning it inside out."
  },
  {
    question: "Exam gloves used during dental treatment can be made of:",
    answers: ["Latex", "Thin plastic", "Dermal cloth", "Heavy nitrile"],
    correct: 0,
    difficulty: 1,
    category: "Infection Control",
    rationale: "Gloves used during routine examination and treatment may be made of vinyl, latex, or nitrile. Thin plastic may serve as an overglove, dermal cloth gloves may be used to handle heated items, and heavy nitrile gloves are used in preparing instruments for sterilization."
  },
  {
    question: "Which of the following is considered regulated waste (biohazard)?",
    answers: ["Spent fixer solution", "Pathologic waste", "Paper mixing pad", "Used barriers"],
    correct: 1,
    difficulty: 2,
    category: "Infection Control",
    rationale: "Regulated waste is contaminated waste that is capable of transmitting an infectious disease. Pathologic waste, such as soft tissue and extracted teeth, are regulated waste. Paper from mixing pads may go into general waste. Spent fixer is a hazardous waste, and barriers used during treatment typically are not considered infectious waste unless for some reason they become blood soaked."
  },
  {
    question: "Which of the following statements is true as it applies to the use of overgloves?",
    answers: ["Overgloves are worn when an assistant has an allergy to latex.", "Overgloves are placed before the secondary procedure is performed and are removed before patient treatment is resumed.", "Overgloves are made of latex.", "Overgloves are acceptable alone as a hand barrier in nonsurgical procedures."],
    correct: 1,
    difficulty: 2,
    category: "Infection Control",
    rationale: "Overgloves are used only as an alternative to changing gloves in situations when the assistant may need to leave the chair to obtain a material or enter a cabinet drawer and want to prevent contaminating an area without changing gloves. They are made of thin plastic and do not come in contact with the skin."
  },
  {
    question: "During which of the following procedures would you use sterile surgical gloves?",
    answers: ["Placement of a composite", "Oral surgery", "All bonding procedures", "Removal of a suture"],
    correct: 1,
    difficulty: 1,
    category: "Infection Control",
    rationale: "During invasive procedures, such as surgery, it would be necessary to wear sterile surgical gloves."
  },
  {
    question: "The most common route of disease transmission in the dental office is through:",
    answers: ["Droplet infection", "Direct contact with the patient’s blood or saliva", "Indirect contact with surfaces", "Any dental instruments"],
    correct: 1,
    difficulty: 2,
    category: "Infection Control",
    rationale: "For the dental health team, the most common route of disease transmission is direct contact with the patients blood or saliva."
  }
];






// Shuffle function (Fisher-Yates algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];  // Swap elements
  }
}


let currentQuestion = 0;
let correct = 0;
let incorrect = 0;
let questionAnswered = false;  // New variable to track if the question is answered

function answerQuestion(i) {
  // Only proceed if the question hasn't been answered
  if (!questionAnswered) {
    // Set questionAnswered to true immediately after an answer is selected
    questionAnswered = true;

    // Disable all answer buttons
    questions[currentQuestion].answers.forEach((_, index) => {
      document.getElementById(`btn${index}`).disabled = true;
    });

    if (i === questions[currentQuestion].correct) {
      document.getElementById(`btn${i}`).style.backgroundColor = 'green';
      correct++;
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

  // Update correct and incorrect counts at the start of every question
  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;

  document.getElementById("question-container").innerHTML = `
    <h2>${questions[currentQuestion].question}</h2>
    ${questions[currentQuestion].answers.map((a, i) => `
      <div><button id="btn${i}" onclick="answerQuestion(${i})">${a}</button></div>
    `).join('')}
  `;

  // Enable all answer buttons
  questions[currentQuestion].answers.forEach((_, index) => {
    document.getElementById(`btn${index}`).disabled = false;
  });
}


function showRationale(i) {
  document.getElementById("question-container").innerHTML = `
    <h2>${questions[currentQuestion].question}</h2>
    <table>
      <tr>
        <th>Your Answer</th>
        <td>${questions[currentQuestion].answers[i]}</td>
      </tr>
      <tr>
        <th>Correct Answer</th>
        <td>${questions[currentQuestion].answers[questions[currentQuestion].correct]}</td>
      </tr>
      <tr>
        <th>Rationale</th>
        <td>${questions[currentQuestion].rationale}</td>
      </tr>
    </table>
    <button onclick="nextQuestion()">Next Question</button>
  `;
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

// Now, before starting the quiz, shuffle the questions:
shuffleArray(questions);

// Then call showQuestion() to start the quiz:
showQuestion();

