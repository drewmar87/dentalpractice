document.addEventListener('DOMContentLoaded', function() {
    var beginButton = document.getElementById('beginButton');
    var evaluateButton = document.getElementById('evaluateButton');
    var resetButton = document.getElementById('resetButton');
    var nextButton = document.getElementById('nextButton');
    var imageSlots = document.querySelectorAll('.image-grid .image-slot');
    var messageText = document.getElementById('messageText');
    
    var correctOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var websites = ['radiograph_mounting.html','radiograph_mounting2.html']; 

    shuffleImages();

    function enableDragAndDrop(element) {
        element.addEventListener('dragstart', function(event) {
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
  
    if(dropzone.id.startsWith('image')) {
        var tmpSrc = draggableElement.src;
        var tmpId = draggableElement.id;
        draggableElement.src = dropzone.src;
        draggableElement.id = dropzone.id;
        dropzone.src = tmpSrc;
        dropzone.id = tmpId;
    } else {
        if(dropzone.firstChild && draggableElement) {
            var tmpImg = draggableElement;
            draggableElement.parentNode.appendChild(dropzone.firstChild);
            dropzone.appendChild(tmpImg);
        } else if(draggableElement) {
            dropzone.appendChild(draggableElement);
        }
    }
});

  }
function evaluatePlacement() {
        for (var i = 0; i < imageSlots.length; i++) {
          var imageSlot = imageSlots[i];
          var imageId = imageSlot.firstChild ? imageSlot.firstChild.id : '';
          var imageIndex = parseInt(imageId.replace('image', ''));
          
          if (imageIndex === correctOrder[i]) {
            imageSlot.classList.add('correct');
            imageSlot.classList.remove('incorrect');
          } else {
            imageSlot.classList.remove('correct');
            imageSlot.classList.add('incorrect');
          }
        }
      }

function redirectToRandomWebsite() {
  var randomIndex = Math.floor(Math.random() * websites.length);
  var randomWebsite = websites[randomIndex];
  if(randomWebsite) {
    window.location.href = randomWebsite;
  }
}

    function clearEvaluation() {
        for (var i = 0; i < imageSlots.length; i++) {
            var imageSlot = imageSlots[i];
            imageSlot.classList.remove('correct');
            imageSlot.classList.remove('incorrect');
        }
    }

    beginButton.addEventListener('click', function() {
    var allImageSlots = document.querySelectorAll('.image-slot');
    for (var i = 0; i < allImageSlots.length; i++) {
        enableDragAndDrop(allImageSlots[i]);
    }

    var instructions = document.getElementById('instructions');
    if (instructions) {  
        instructions.style.display = 'block';
        instructions.innerHTML = 'Drag the x-rays to the right spots. Click evaluate to see your results. <span style="color:green;">Green</span> border means correct, <span style="color:red;">red</span> border means incorrect.';
    }

    messageText.style.display = 'none';
    beginButton.classList.add('active');
});


    evaluateButton.addEventListener('click', function() {
        clearEvaluation();
        evaluatePlacement();
        nextButton.disabled = false;
        messageText.style.display = 'none';
    });

    resetButton.addEventListener('click', function() {
        location.reload();
    });
  
    nextButton.addEventListener('click', function() {
        redirectToRandomWebsite();
    });


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

function shuffleImages() {
    var images = Array.from(document.querySelectorAll('.image-grid .image-slot img, .image-grid2 .image-slot img'));
    var shuffledImages = shuffleArray(images);
    shuffledImages.forEach(function(img, i) {
        var parent = document.querySelector('.image-grid2 .image-slot:nth-child(' + (i + 1) + ')');
        parent.innerHTML = '';
        parent.appendChild(img);
    });
}

});
