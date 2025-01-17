let selectedEmoji = ''; 
function changeMode(emoji) {
    selectedEmoji = emoji; 
    alert("You selected the " + emoji + " mode!");
}

function saveNote() {
    const noteText = document.getElementById("note-text").value;
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (!noteText && !file) {
        alert("Please enter text or upload a photo.");
        return;
    }

    let imageUrl = '';
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageUrl = e.target.result;
            createSavedNote(noteText, imageUrl);
            saveToLocalStorage(noteText, imageUrl); 
        };
        reader.readAsDataURL(file);
    } else {
        createSavedNote(noteText, imageUrl);
        saveToLocalStorage(noteText, imageUrl); 
    }

    document.getElementById("note-text").value = '';
    document.getElementById("file-input").value = '';
}

function saveToLocalStorage(text, imageUrl) {
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];

    const currentDate = new Date();
    const newNote = {
        text: text,
        imageUrl: imageUrl,
        emoji: selectedEmoji,
        date: currentDate.toLocaleString() 
    };

    savedNotes.push(newNote);
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes)); 
}

function loadNotesFromLocalStorage() {
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
    savedNotes.forEach(note => {
        createSavedNote(note.text, note.imageUrl, note.emoji, note.date);
    });
}

function createSavedNote(text, imageUrl, emoji = '', date = '') {
    const savedNotesContainer = document.querySelector(".saved-notes");

    const noteElement = document.createElement("div");
    noteElement.classList.add("saved-note");

    const emojiElement = document.createElement("span");
    emojiElement.classList.add("emoji");
    emojiElement.textContent = emoji; 
    noteElement.appendChild(emojiElement);

    if (imageUrl) {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        noteElement.appendChild(imgElement);
    }

    if (text) {
        const textElement = document.createElement("div");
        textElement.classList.add("note-text");
        textElement.textContent = text;
        noteElement.appendChild(textElement);
    }

    const dateElement = document.createElement("div");
    dateElement.classList.add("date");
    dateElement.textContent = date || new Date().toLocaleString(); 
    noteElement.appendChild(dateElement);

    savedNotesContainer.prepend(noteElement); 
}

window.onload = loadNotesFromLocalStorage;
