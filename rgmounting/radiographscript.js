// Dragging and Dropping Images
function enableDragAndDrop(element) {

    element.addEventListener('dragstart', function(event) {
        resetBorderColors(); // Call the function to reset the border colors
        wasDragged = true; // Set the flag to true to indicate a drag operation has started
		evaluationComplete = false;
        event.dataTransfer.setData('text/plain', event.target.id);
    });

element.addEventListener('touchstart', function(event) {
    resetBorderColors(); // Call the function to reset the border colors
    wasDragged = true; // Set the flag to true to indicate a drag operation has started
    evaluationComplete = false;
    event.target.setAttribute('data-dragging', 'true');
    event.target.setAttribute('data-origin-x', event.touches[0].clientX);
    event.target.setAttribute('data-origin-y', event.touches[0].clientY);
});

element.addEventListener('touchmove', function(event) {
    var draggingElem = document.querySelector('[data-dragging="true"]');
    if (draggingElem) {
        var originalX = parseFloat(draggingElem.getAttribute('data-origin-x'));
        var originalY = parseFloat(draggingElem.getAttribute('data-origin-y'));
        var touch = event.touches[0];
        var deltaX = touch.clientX - originalX;
        var deltaY = touch.clientY - originalY;
        draggingElem.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px)';
        event.preventDefault();
    }
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
	
	
	element.addEventListener('touchend', function(event) {
    var draggingElem = document.querySelector('[data-dragging="true"]');
    if (draggingElem) {
        draggingElem.style.transform = '';
        draggingElem.removeAttribute('data-dragging');
        draggingElem.removeAttribute('data-origin-x');
        draggingElem.removeAttribute('data-origin-y');
        
        var dropzone = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        
        if (dropzone && dropzone.id.startsWith('image')) {
            var tmpSrc = draggingElem.src;
            var tmpId = draggingElem.id;
            draggingElem.src = dropzone.src;
            draggingElem.id = dropzone.id;
            dropzone.src = tmpSrc;
            dropzone.id = tmpId;
        }
        
        event.preventDefault();
    }
});

	
}
