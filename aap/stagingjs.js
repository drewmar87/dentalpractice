document.addEventListener("DOMContentLoaded", function() {

let states = {
 //Opening Question
	'start': {
        'question': 'Does the patient have Clinical Attachment Loss (CAL)?',
		'info': 'The first step in identifying the patient\'s periodontal condition is to identify if the patient has any Clinical Attachment Loss.',
        'image': 'images/startPicture.png',
        'answers': [
            { 'text': 'Yes', 'nextState': 'yesCAL', 'savedText': 'Patient has clinical attachment loss.', 'hiddenData': 'CAL' },
            { 'text': 'No', 'nextState': 'noCAL', 'savedText': 'Patient does NOT have any clinical attachment loss.', 'hiddenData': 'No Staging' }
        ]
    },

// No CAL Question
	
	'noCAL': {
        'question': 'Is there over 10% bleeding on probing (BoP) in the oral cavity?',
		'info': 'To evaluate the state of the gingival tissue, we must assess the degree of bleeding upon probing. When over 10% of the tissue exhibits bleeding, this indicates gingivitis.',
        	'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
		'answers': [
            { 'text': 'Yes', 'nextState': 'results', 'savedText': 'More than 10% BoP.', 'hiddenData': 'Ginvgivitis on an Intact Periodontium' },
            { 'text': 'No', 'nextState': 'results', 'savedText': 'Less than 10% BoP', 'hiddenData': 'Clinical Gingival Health on an Intact Periodontium' }
        ]
    },
	
// Yes CAL Question
	
	'yesCAL': {
        'question': 'Is the clinical attachment loss periodontally induced with at least 2 sites of non-adjacent teeth? (Not including third molars or distal bone defects on second molars from third molar extractions).',
		'info': 'Staging a patient is about assessing the potential future state of their periodontal health. We do this by identifying recurring patterns. By recognizing two separate infection areas, we can suggest the start of a harmful condition. This enables us to act in advance, making it easier to treat the issue early and keep it under control.',
        	'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
		'answers': [
            { 'text': 'Yes', 'nextState': 'perioCAL', 'savedText': 'CAL is noted to be Periodontally Induced', 'hiddenData': 'Further Investigation' },
            { 'text': 'No', 'nextState': 'notPerioCAL', 'savedText': 'CAL is NOT Periodontally Induced', 'hiddenData': null }
        ]
    },

// Non-perio CAL Question

	'notPerioCAL': {
        'question': 'Is there over 10% bleeding on probing (BoP) in the oral cavity?',
		'info': 'To evaluate the state of the gingival tissue, we must assess the degree of bleeding upon probing. When over 10% of the tissue exhibits bleeding, this indicates gingivitis.',
        'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
        'answers': [
            { 'text': 'Yes', 'nextState': 'results', 'savedText': 'More than 10% BoP', 'hiddenData': 'Gingivitis on a Reduced Periodontium in a Non-Periodontitis Patient' },
            { 'text': 'No', 'nextState': 'results', 'savedText': 'Less than 10% BoP', 'hiddenData': 'Clinical Gingival Health on a Reduced Periodontium in a Non-Periodontitis Patient' }
        ]
    },

// Yes-perio CAL Question

	'perioCAL': {
        'question': 'Does the patient have a history of periodontal treatment and regular periodontal maintenance?',
		'info': 'Understanding whether a patient has undergone prior periodontal treatment aids in determining if the infection is new, old, or recurring. Accurate diagnosis is pivotal for effective treatment, which necessitates having as much relevant information as possible.',
        	'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
		'answers': [
            { 'text': 'Yes', 'nextState': 'perioMaintYes', 'savedText': 'Patient has a history of Periodontal Maintenance', 'hiddenData': 'Perio Maintenance' },
            { 'text': 'No', 'nextState': 'perioMaintNo', 'savedText': 'Patient does NOT have a history of Periodontal Maintenance', 'hiddenData': 'Possible evidence of undiagnosed periodontal disease' }
        ]
    },


// Yes Perio Maint Question

	'perioMaintYes': {
        'question': 'Is there over 10% bleeding on probing (BoP) in the oral cavity?',
		'info': 'To evaluate the state of the gingival tissue, we must assess the degree of bleeding upon probing. When over 10% of the tissue exhibits bleeding, this indicates gingivitis.',
        	'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
		'answers': [
            { 'text': 'Yes', 'nextState': 'perioMaintYesStepTwo', 'savedText': 'More than 10% BoP', 'hiddenData': 'Evidence of possible recurrence of periodontal disease' },
            { 'text': 'No', 'nextState': 'perioMaintYesStepThree', 'savedText': 'Less than 10% BoP', 'hiddenData': 'Less than 10% overall BoP, Check for Specific Sites of Recurrence of Disease.' }
        ]
    },

// No Perio Maint Question
	'perioMaintNo': {
        'question': 'Are there at least 2 sites on non-adjacent teeth with the following attributes: BoP, 4+mm pocket depths, and 1+ CAL?',
		'info': 'Keep in mind, our goal is to trace patterns of disease. It\'s crucial to ascertain if there are multiple diseased sites involving non-adjacent teeth. Disease characteristics to look for include: bleeding on probing, pocket depths of 4mm or more, and a minimum of 1mm of clinical attachment loss.',
        	'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
		'answers': [
            { 'text': 'Yes', 'nextState': 'stagingStepOne', 'savedText': '2+ Sites of periodontally active have been noted.', 'hiddenData': 'Proceed to Staging Patient' },
            { 'text': 'No', 'nextState': 'noCAL', 'savedText': 'Patient does NOT have 2+ Sites of periodontally active teeth.', 'hiddenData': 'No Active Periodontits, possible mistake' }
        ]
    },


//Perio Maint Yes, Step 2

	'perioMaintYesStepTwo': {
        'question': 'Are there at least 2 sites on non-adjacent teeth with the following attributes: BoP, 4+mm pocket depths, and 1+ CAL?',
		'info': 'Keep in mind, our goal is to trace patterns of disease. It\'s crucial to ascertain if there are multiple diseased sites involving non-adjacent teeth. Disease characteristics to look for include: bleeding on probing, pocket depths of 4mm or more, and a minimum of 1mm of clinical attachment loss.',
        	'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
		'answers': [
            { 'text': 'Yes', 'nextState': 'stagingStepOne', 'savedText': 'Multiple areas of periodontal infection noted', 'hiddenData': 'Recurrence of periodontal disease, re-stage patient' },
            { 'text': 'No', 'nextState': 'results', 'savedText': 'Insufficient evidence of periodontal disease recurrence', 'hiddenData': 'Gingivitis on a Reduced Periodontium in a Stable Periodontitis Patient' }
        ]
    },

	'perioMaintYesStepThree': {
        'question': 'Are there at least 2 sites on non-adjacent teeth with the following attributes: BoP, 4+mm pocket depths, and 1+ CAL?',
		'info': 'Keep in mind, our goal is to trace patterns of disease. It\'s crucial to ascertain if there are multiple diseased sites involving non-adjacent teeth. Disease characteristics to look for include: bleeding on probing, pocket depths of 4mm or more, and a minimum of 1mm of clinical attachment loss.',
        	'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
		'answers': [
            { 'text': 'Yes', 'nextState': 'stagingStepOne', 'savedText': 'Multiple areas of periodontal infection noted', 'hiddenData': 'Recurrence of periodontal disease, re-stage patient' },
            { 'text': 'No', 'nextState': 'results', 'savedText': 'Insufficient evidence of periodontal disease recurrence', 'hiddenData': 'Clinical Gingival Health on a Reduced Periodontium in a Stable Periodontitis Patient' }
        ]
    },
	
//WORKING HERE NOW
// BEGIN STAGING QUESTIONS
// Step one
	'stagingStepOne': {
        'question': 'When evaluating the two most severely affected sites of active periodontal-induced Clinical Attachment Loss (CAL), excluding third molars and distal defects in second molars, what is the CAL measurement? However, if these two most severe sites do not fall within a single category, please select the next two most severe sites that do for your assessment.',
		'info': 'Evaluating the degree of clinical attachment loss is a key factor in helping us categorize the patient\'s stage of periodontal disease.',
        'image': 'images/stage1234.png',
        'answers': [
            { 'text': 'CAL 1-2mm', 'nextState': 'stagingStepTwo', 'savedText': 'CAL 1-2mm', 'hiddenData': 'Stage 1' },
            { 'text': 'CAL 3-4mm', 'nextState': 'stagingStepTwo', 'savedText': 'CAL 3-4mm', 'hiddenData': 'Stage 2' },
			{ 'text': 'CAL 5+mm', 'nextState': 'stagingStepTwo', 'savedText': 'CAL 5+mm', 'hiddenData': 'Stage 3' }
        ]
    },

// Step Two
	'stagingStepTwo': {
        'question': 'When observing the radiographic representation of bone loss, what is your evaluation?',
		'info': 'Utilizing radiographic evidence of bone loss reinforces our diagnosis of compromised periodontal health in our patient, indicating the need for periodontal therapy. This approach is crucial in helping us ascertain the stage of the disease.',
        'image': 'images/rbl.png',
        'answers': [
            { 'text': 'Do not use RBL in my diagnosis.', 'nextState': 'stagingStepThree', 'savedText': null, 'hiddenData': null },
	    { 'text': 'Horizontal RBL pattern of less than 15%', 'nextState': 'stagingStepThree', 'savedText': 'Horizontal RBL Less than 15%', 'hiddenData': 'Stage 1' },
            { 'text': 'Horizontal RBL pattern 15-33%', 'nextState': 'stagingStepThree', 'savedText': 'Horizontal RBL between 15-33%', 'hiddenData': 'Stage 2' },
	    { 'text': 'Horizontal RBL pattern over 33%', 'nextState': 'stagingStepThree', 'savedText': 'Horizontal RBL over 33%', 'hiddenData': 'Stage 3' }
        ]
    },

// Step Three
	'stagingStepThree': {
        'question': 'When observing tooth loss or planned extractions specifically due to periodontal disease, what is your evaluation?',
		'info': 'Observing tooth loss or planned extractions specifically due to periodontal disease is of significant importance. It provides a clear indication of the severity of the condition and helps in planning an effective treatment strategy.',
        'image': 'images/toothLoss.png',
        'answers': [
            { 'text': 'No tooth loss', 'nextState': 'stagingStepFour', 'savedText': 'No Periodontal Induced Tooth Loss', 'hiddenData': 'Stage 1 or 2' },
            { 'text': '1-4 Teeth', 'nextState': 'stagingStepFour', 'savedText': '1-4 Teeth lost due to Periodontitis', 'hiddenData': 'Stage 3' },
			{ 'text': '5 or more Teeth', 'nextState': 'stagingStepFour', 'savedText': '5 or more teeth lost due to Periodontitis', 'hiddenData': 'Stage 4' }
        ]
    },


// Step Four
	'stagingStepFour': {
        'question': 'When observing periodontal pocketing specifically due to periodontal disease, what is your evaluation?',
		'info': 'Examining periodontal pocketing specifically linked to periodontal disease is critically important. It offers key insights into the severity of the disease and assists in tailoring a suitable treatment plan.',
        'image': 'images/complexity.png',
        'answers': [
            { 'text': '4mm or less pocketing', 'nextState': 'stagingStepFive', 'savedText': 'Max Perio Pockets of 4mm or less', 'hiddenData': 'Stage 1' },
            { 'text': '2 or more sites of active 5mm pocketing', 'nextState': 'stagingStepFive', 'savedText': 'Max Perio Pockets of 5mm or less', 'hiddenData': 'Stage 2 (Consideration Only)' },
			{ 'text': '2 or more sites of active 6+mm pocketing', 'nextState': 'stagingStepFive', 'savedText': 'Perio Pockets of 6+mm', 'hiddenData': 'Stage 3 or 4 (Consideration Only)' }
        ]
    },


// Step Five
	'stagingStepFive': {
        'question': 'When observing vertical bone loss specifically due to periodontal disease, what is your evaluation?',
		'info': 'The assessment of vertical bone loss specifically related to periodontal disease is vital. This observation provides substantial information about the severity of the condition, guiding the formulation of an effective treatment approach.',
        'image': 'images/complexity.png',
        'answers': [
            { 'text': 'No VBL', 'nextState': 'stagingStepSix', 'savedText': 'No Periodontally Induced Vertical Bone Loss', 'hiddenData': null },
            { 'text': 'VBL of 3mm or more', 'nextState': 'stagingStepSix', 'savedText': 'Periodontally Induced VBL', 'hiddenData': 'Stage 3 or 4 (Consideration Only)' }
        ]
    },


// Step Six
	'stagingStepSix': {
        'question': 'When observing furcation involvement specifically due to periodontal disease, what is your evaluation?',
		'info': 'Evaluating furcation involvement specifically associated with periodontal disease is crucial. This observation can give us essential insights into the severity of the disease, assisting in shaping an effective treatment strategy.',
        'image': 'images/complexity.png',
        'answers': [
            { 'text': 'No Furcation Involvement', 'nextState': 'stagingStepSeven', 'savedText': 'No Periodontally Induced Furcation involvement', 'hiddenData': null },
            { 'text': 'Class 2 or 3 Furcation Involvement', 'nextState': 'stagingStepSeven', 'savedText': 'Periodontally Induced Furcation Involvement', 'hiddenData': 'Stage 3 or 4 (Consideration Only)' }
        ]
    },

// Step Seven
	'stagingStepSeven': {
        'question': 'Any need for complex rehabilitation due to: Masticatory Dysfunction, less than 10 opposing pairs of teeth, or significant ridge defects?',
		'info': 'Assessing the need for complex rehabilitation due to masticatory dysfunction, fewer than 10 pairs of opposing teeth, or significant ridge defects is essential in diagnosing and staging periodontal disease. These factors can indicate the disease\'s impact on oral functionality and structure, providing critical insight into the extent of damage and necessary treatment measures.',
        'image': 'images/complexity.png',
        'answers': [
            { 'text': 'Yes', 'nextState': 'results', 'savedText': 'Serious Masticatory Dysfunction noted', 'hiddenData': 'Stage 4 (Consideration Only)' },
            { 'text': 'No', 'nextState': 'results', 'savedText': 'No Masticatory Dysfunction Noted', 'hiddenData': null }
        ]
    },

// RESULTS
	'results': {
        'question': 'Click -Finish- to get your results',
	'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=',
        'answers': [
            { 'text': 'Finish', 'nextState': 'end'},
        ]
    },
	

    // ... more states
}

let answers = {};
let history = [];
let hiddenData = {};

window.onload = function() {
    goToState('start');
}

function goToState(stateName, answerText, hiddenText) {
    if (answerText) {
        answers[stateName] = answerText;
    }
	
    if (hiddenText) {
        hiddenData[stateName] = hiddenText;
    }

    if (stateName === 'end') {
        showResults();
        return;
    }

    let state = states[stateName];

    if (!state) {
        showResults();
        return;
    }

    document.getElementById('question').textContent = state.question;

    let answerContainer = document.getElementById('answers');
    answerContainer.innerHTML = '';

    let backButtonContainer = document.getElementById('backButtonContainer');
    backButtonContainer.innerHTML = ''; // Clear the back button

    for (let i = 0; i < state.answers.length; i++) {
        let answerButton = document.createElement('button');
        answerButton.textContent = state.answers[i].text;
        answerButton.addEventListener('click', function() {
            history.push(stateName); // add the current state to the history before going to the next state
			
       // append the new answer to the savedAnswers div
	let savedAnswer = document.createElement('div');
	savedAnswer.textContent = state.answers[i].savedText;
	savedAnswer.className = 'breadcrumb'; // Assign a class to the saved answer
	document.getElementById('savedAnswers').appendChild(savedAnswer);
	
			
			goToState(state.answers[i].nextState, state.answers[i].savedText, state.answers[i].hiddenData);
        });
        answerContainer.appendChild(answerButton);
    }

    document.getElementById('image').src = state.image;
    document.getElementById('infoText').textContent = state.info;

    // This block was misplaced in your code, it needs to be inside goToState function.
    if (history.length > 0) {
    let backButton = document.createElement('button');
    backButton.className = 'backButton';
    backButton.textContent = 'Back';
    backButton.addEventListener('click', goBack);
    let backButtonContainer = document.getElementById('backButtonContainer');
    backButtonContainer.innerHTML = ''; // Clear any existing back button before adding a new one
    backButtonContainer.appendChild(backButton);
    }
}

function goBack() {
    let lastState = history.pop(); // remove the last state from the history
    delete answers[lastState]; // remove the answer for the last state
	delete hiddenData[lastState];
	let savedAnswers = document.getElementById('savedAnswers');
    savedAnswers.removeChild(savedAnswers.lastChild);
    goToState(lastState);
}

function showResults() {
    var stageWeights = {
        'Stage 1': 1,
        'Stage 2': 2,
        'Stage 3': 3,
        'Stage 4': 4,
		'No Staging': -1,
		'CAL': 7,
		'Further Investigation': 6,
		'Evidence of possible recurrence of periodontal disease': 5,
		'Perio Maintenance': 4.5,
        'Gingivitis on an Intact Periodontium': 0,
        'Clinical Gingival Health on an Intact Periodontium': 0,
        'Gingivitis on a Reduced Periodontium in a Non-Periodontitis Patient': 0,
        'Clinical Gingival Health on a Reduced Periodontium in a Non-Periodontitis Patient': 0,
        'Possible evidence of undiagnosed periodontal disease': .94,
        'Proceed to Staging Patient': .94,
        'No Active Periodontits, possible mistake': .94,
        'Recurrence of periodontal disease, re-stage patient': .94,
        'Gingivitis on a Reduced Periodontium in a Stable Periodontitis Patient': 0,
        'Stage 1 (Consideration Only)': .96,
        'Stage 2 (Consideration Only)': .97,
        'Stage 3 or 4 (Consideration Only)': .98,
		'Stage 4 (Consideration Only)': .99,
		' ': .95,// Consider worst case
    };

    var defaultStages = [
        "Gingivitis on an Intact Periodontium",
        "Clinical Gingival Health on an Intact Periodontium",
        "Gingivitis on a Reduced Periodontium in a Non-Periodontitis Patient",
        "Clinical Gingival Health on a Reduced Periodontium in a Non-Periodontitis Patient",
        "Gingivitis on a Reduced Periodontium in a Stable Periodontitis Patient",
        "Clinical Gingival Health on a Reduced Periodontium in a Stable Periodontitis Patient"
    ];

    var excludedStages = [
        "CAL",
        "Further Investigation",
        "Evidence of possible recurrence of periodontal disease",
        "Perio Maintenance"
    ];

    var userAnswers = [];
    for (let state in answers) {
        let hiddenDataText = hiddenData[state] ? hiddenData[state] : '';
        let answer = answers[state] ? answers[state] : '';
        userAnswers.push({ state: state, hiddenData: hiddenDataText, answer: answer });
    }

    userAnswers.sort((a, b) => {
        var weightA = stageWeights[a.hiddenData] || 0;
        var weightB = stageWeights[b.hiddenData] || 0;
        return weightB - weightA;
    });


    // Create a separate array that excludes the stages you specified
    var mostSevereStageAnswers = userAnswers.filter(answer => !excludedStages.includes(answer.hiddenData));

    // Check if any of the default stages exist in mostSevereStageAnswers
    var mostSevereStage = mostSevereStageAnswers.find(answer => defaultStages.includes(answer.hiddenData));

    // If none of the default stages were found, the most severe stage is the first one in mostSevereStageAnswers
    if (!mostSevereStage) {
        mostSevereStageAnswers.sort((a, b) => {
            var weightA = stageWeights[a.hiddenData] || 0;
            var weightB = stageWeights[b.hiddenData] || 0;
            // Adjust the weights for stage 1-4 if they are equal
            if (weightA === weightB && ["Stage 1", "Stage 2", "Stage 3", "Stage 4"].includes(a.hiddenData)) {
                weightA = parseInt(a.hiddenData.split(" ")[1]);
                weightB = parseInt(b.hiddenData.split(" ")[1]);
            }
            return weightB - weightA;
        });

        mostSevereStage = mostSevereStageAnswers[0];
    }

    // Display the most severe stage in the "mostSevereStage" div
    if (mostSevereStage) {
        var mostSevereDiv = document.getElementById('mostSevereStage');
		mostSevereDiv.innerHTML = `Tentatively ${mostSevereStage.hiddenData}<br/>See Guided Walkthrough`;

    }




    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('savedAnswers').style.display = 'none';
    document.getElementById('backButtonContainer').style.display = 'none';
    document.getElementById('startOverButton').style.display = 'block';
   
 let answersTable = document.createElement('table');
    answersTable.className = 'table table-rounded';  // Apply the CSS classes

    // Create table header
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let th1 = document.createElement('th');
    th1.textContent = 'Stage';
    let th2 = document.createElement('th');
    th2.textContent = 'Answer';
    headerRow.appendChild(th1);
    headerRow.appendChild(th2);
    thead.appendChild(headerRow);
    answersTable.appendChild(thead);

    // Create table body
    let tbody = document.createElement('tbody');
    for (let i = 0; i < userAnswers.length; i++) {
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = userAnswers[i].hiddenData;
        let td2 = document.createElement('td');
        td2.textContent = userAnswers[i].answer;
        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);
    }
    answersTable.appendChild(tbody);

    // Append the table to the 'answersList' div
    let answersList = document.getElementById('answersList');
    answersList.appendChild(answersTable);
}




});
