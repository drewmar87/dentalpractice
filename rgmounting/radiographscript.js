// DOM Content Loader
document.addEventListener('DOMContentLoaded', function() {
    var beginButton = document.getElementById('beginButton');
    var evaluateButton = document.getElementById('evaluateButton');
    var resetButton = document.getElementById('resetButton');
    var nextButton = document.getElementById('nextButton');
    var imageSlots = document.querySelectorAll('.image-grid .image-slot');
 //   var messageText = document.getElementById('messageText');
    var evaluationComplete = false;

    var correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var originalRotations = [];
    var websites = ['radiograph_mounting.html','radiograph_mounting2.html','radiograph_mounting3.html','radiograph_mounting4.html']; 

    shuffleImages();

// Dragging and Dropping Images
function enableDragAndDrop(element) {

    element.addEventListener('dragstart', function(event) {
        resetBorderColors(); // Call the function to reset the border colors
        wasDragged = true; // Set the flag to true to indicate a drag operation has started
		evaluationComplete = false;
        event.dataTransfer.setData('text/plain', event.target.id);
    });

    element.addEventListener('dragover', function(event) {
        event.preventDefault();
    });

    element.addEventListener('drop', function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData('text/plain');
        var draggableElement = document.getElementById(data);
        var dropzone = event.target;
        var targetImage; // Variable to hold the reference to the image that should be targeted

        if(dropzone.id.startsWith('image')) {
            var tmpSrc = draggableElement.src;
            var tmpId = draggableElement.id;
            draggableElement.src = dropzone.src;
            draggableElement.id = dropzone.id;
            dropzone.src = tmpSrc;
            dropzone.id = tmpId;
            targetImage = dropzone; // The target image should be the dropzone in this case
        } else {
            if(dropzone.firstChild && draggableElement) {
                var tmpImg = draggableElement;
                draggableElement.parentNode.appendChild(dropzone.firstChild);
                dropzone.appendChild(tmpImg);
                targetImage = tmpImg; // The target image should be the tmpImg in this case
            } else if(draggableElement) {
                dropzone.appendChild(draggableElement);
                targetImage = draggableElement; // The target image should be the draggableElement in this case
            }
        }

        // Check if targetImage is defined and is an image element before calling selectImage
        if (targetImage && targetImage.tagName === 'IMG') {
            selectImage({ target: targetImage });
        }
        wasDragged = false; // Reset the flag to false after the drop operation
		showRotationButtons();
    });
}


// Deselect an Image
function deselectImage() {
    if (selectedImage) {
        selectedImage.classList.remove('selected');
        selectedImage = null;
        hideRotationButtons();
    }
}

// Checking Placement of Images
function evaluatePlacement() {
    for (var i = 0; i < imageSlots.length; i++) {
        var imageSlot = imageSlots[i];
        var imageId = imageSlot.firstChild ? imageSlot.firstChild.id : '';
        var imageIndex = parseInt(imageId.replace('image', ''));


        if (imageIndex === correctOrder[i] && getRotation(imageSlot.firstChild) === originalRotations[i]) {
            imageSlot.classList.add('correct');
            imageSlot.classList.remove('incorrect');
        } else {
            imageSlot.classList.remove('correct');
            imageSlot.classList.add('incorrect');
        }
    }
}

// Clear Evaluation
function clearEvaluation() {
    for (var i = 0; i < imageSlots.length; i++) {
        var imageSlot = imageSlots[i];
        imageSlot.classList.remove('correct');
        imageSlot.classList.remove('incorrect');
    }
}

// Evaluate Button
evaluateButton.addEventListener('click', function() {
    clearEvaluation();
    deselectImage();  // Add this line to deselect the image when the evaluate button is clicked

	if(evaluationComplete) {
        resetBorderColors();
        evaluationComplete = false; // Reset the evaluationComplete flag
    } else {
        evaluatePlacement();
        evaluationComplete = true;  // Set the evaluationComplete flag to true
    }

 // nextButton.disabled = false;
 // messageText.style.display = 'none';
});

var modal = document.getElementById('confirmation-modal');
var confirmYesButton = document.getElementById('confirm-yes');
var confirmNoButton = document.getElementById('confirm-no');

function showModal(action) {
    modal.style.display = "block";
    confirmYesButton.onclick = function() {
        modal.style.display = "none";
        action();
    }
}

confirmNoButton.onclick = function() {
    modal.style.display = "none";
};

// Reset Button
resetButton.addEventListener('click', function() {
    showModal(function() {
        location.reload();
    });
});

// Next Button
nextButton.addEventListener('click', function() {
    showModal(function() {
        redirectToRandomWebsite();
    });
});


// Go to a random website from Array in beginning
function redirectToRandomWebsite() {
  var randomIndex = Math.floor(Math.random() * websites.length);
  var randomWebsite = websites[randomIndex];
  if(randomWebsite) {
    window.location.href = randomWebsite;
  }
}

// Shuffle Array
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Shuffle Images
function shuffleImages() {
    var images = Array.from(document.querySelectorAll('.image-grid .image-slot img, .image-grid2 .image-slot img'));
    var shuffledImages = shuffleArray(images);
    shuffledImages.forEach(function(img, i) {
        var parent = document.querySelector('.image-grid2 .image-slot:nth-child(' + (i + 1) + ')');
        parent.innerHTML = '';

		parent.appendChild(img);
		originalRotations[i] = 0;
        img.style.transform = 'rotate(' + getRandomRotation() + 'deg)';
    });

    document.querySelectorAll('.image-grid .image-slot img, .image-grid2 .image-slot img').forEach(img => {
        img.addEventListener('click', selectImage);
    });
}

// Drag and Drop Enable
var allImageSlots = document.querySelectorAll('.image-slot');

	for (var i = 0; i < allImageSlots.length; i++) {
        enableDragAndDrop(allImageSlots[i]);
    }

// Top Instructions
var instructions = document.getElementById('instructions');
    if (instructions) {  
        instructions.style.display = 'block';
		instructions.innerHTML = 'To complete the task, drag and rotate the radiographs to match the correct anatomical locations. Afterward, click "Evaluate" to receive feedback on your performance1.';

    }

// Rotational Buttons    
document.getElementById('rotate-left-button').addEventListener('click', rotateLeft);
document.getElementById('rotate-right-button').addEventListener('click', rotateRight);

// messageText.style.display = 'none';
});

// End DOM Loader

// Rotate images randomly
function getRandomRotation() {
    var rotations = [0, 90, 180, 270];
    return rotations[Math.floor(Math.random() * rotations.length)];
}

// Start Selected Image Function
let wasDragged = false;
let selectedImage = null;

function selectImage(event) {
    // Get the clicked image element
    let clickedImage = event.target;

    // Check if the clicked image is the currently selected image
    if (clickedImage === selectedImage) {
        // Only deselect the image if it was not dragged
        if (!wasDragged) {
            selectedImage.classList.remove('selected');
            selectedImage = null;
            hideRotationButtons();
        }
    } else {
        // If it is not, select it and show the rotation buttons
        if (selectedImage) {
            selectedImage.classList.remove('selected');
        }
        selectedImage = clickedImage;
        selectedImage.classList.add('selected');
        showRotationButtons();
    }

    // Reset the wasDragged flag after handling the selection
    wasDragged = false;
}

// Hide rotation buttons if no image is selected
function showRotationButtons() {
    if (selectedImage) {
        // Get the rotational buttons
        var rotateLeftButton = document.getElementById('rotate-left-button');
        var rotateRightButton = document.getElementById('rotate-right-button');

        // Get the image slot (parent element of the selected image)
        var imageSlot = selectedImage.parentElement;

        // Append the buttons to the image slot
        imageSlot.append(rotateLeftButton);
        imageSlot.append(rotateRightButton);

        // Apply styles to the buttons to show them and position them within the image slot
        rotateLeftButton.style.position = 'absolute';
        rotateLeftButton.style.bottom = '0px';
        rotateLeftButton.style.left = '0px';
        rotateLeftButton.style.display = 'block';
        rotateLeftButton.style.zIndex = '1000';  // Set a high z-index value


        rotateRightButton.style.position = 'absolute';
        rotateRightButton.style.bottom = '0px';
        rotateRightButton.style.right = '0px';
        rotateRightButton.style.display = 'block';
	    rotateRightButton.style.zIndex = '1000';  // Set a high z-index value

    }
}

function hideRotationButtons() {
    var rotateLeftButton = document.getElementById('rotate-left-button');
    var rotateRightButton = document.getElementById('rotate-right-button');

    rotateLeftButton.style.display = 'none';
    rotateRightButton.style.display = 'none';
}




// Rotate Right
function rotateRight() {
    if (selectedImage) {
        var currentRotation = getRotation(selectedImage);
        selectedImage.style.transform = 'rotate(' + (currentRotation + 90) + 'deg)';
    }
}

// Rotate Left
function rotateLeft() {
    if (selectedImage) {
        var currentRotation = getRotation(selectedImage);
        selectedImage.style.transform = 'rotate(' + (currentRotation - 90) + 'deg)';
    }
}

// Figure out the rotations
function getRotation(el) {
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("transform");
    if (tr === 'none') return 0;
    var values = tr.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    var a = values[0];
    var b = values[1];
    var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    return (angle < 0 ? angle + 360 : angle);
}

// Reset the border colors after evaluation with dragging
function resetBorderColors() {
    // Get all the image slots
    var imageSlots = document.querySelectorAll('.image-slot');

    // Iterate over all image slots and remove 'incorrect' and 'correct' classes
    imageSlots.forEach(function(slot) {
        slot.classList.remove('incorrect', 'correct');
        slot.classList.add('originalBorder'); // Add the 'originalBorder' class
    });
}
