const days = document.querySelectorAll('.day');

const modal = document.getElementById('note-modal');
const closeButton = document.querySelector('.close-button');
const saveButton = document.getElementById('save-note');
const noteInput = document.getElementById('note-input');

let activeDay = null; 

days.forEach(day => {
    day.addEventListener('click', () => {
        activeDay = day.getAttribute('data-day'); 
        const savedNote = localStorage.getItem(`note-${activeDay}`); 
        noteInput.value = savedNote || '';
        modal.style.display = 'flex'; 
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

saveButton.addEventListener('click', () => {
    const note = noteInput.value.trim(); 
    if (note) {
        localStorage.setItem(`note-${activeDay}`, note);
        alert(`Note for day ${activeDay} saved!`);
    } else {
        localStorage.removeItem(`note-${activeDay}`); 
        alert(`Note for day ${activeDay} removed.`);
    }
    modal.style.display = 'none'; 
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const todoItems = document.querySelectorAll('.todo-item');
    loadTodoItems();
    todoItems.forEach((item, index) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const textInput = item.querySelector('input[type="text"]');

        const savedText = localStorage.getItem(`todo-${index}`);
        if (savedText) {
            textInput.value = savedText;
        }

        textInput.addEventListener('input', function() {
            localStorage.setItem(`todo-${index}`, textInput.value);
        });

        const savedCheckboxState = localStorage.getItem(`checkbox-${index}`);
        if (savedCheckboxState === 'true') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }

        checkbox.addEventListener('change', function() {
            localStorage.setItem(`checkbox-${index}`, checkbox.checked);
        });
    });

    const dontForgetTextarea = document.getElementById('dontForget');
    const goalsTextarea = document.getElementById('goalsThisMonth');

    dontForgetTextarea.value = localStorage.getItem('dontForget') || '';
    goalsTextarea.value = localStorage.getItem('goalsThisMonth') || '';

    dontForgetTextarea.addEventListener('input', function() {
        localStorage.setItem('dontForget', dontForgetTextarea.value);
    });

    goalsTextarea.addEventListener('input', function() {
        localStorage.setItem('goalsThisMonth', goalsTextarea.value);
    });
});

function loadTodoItems() {
    const todoItems = document.querySelectorAll('.todo-item');
    todoItems.forEach((item, index) => {
        const checkbox = item.querySelector('input[type="checkbox"]');
        const textInput = item.querySelector('input[type="text"]');

        const savedText = localStorage.getItem(`todo-${index}`);
        if (savedText) {
            textInput.value = savedText;
        }

        const savedCheckboxState = localStorage.getItem(`checkbox-${index}`);
        if (savedCheckboxState === 'true') {
            checkbox.checked = true;
        } else {
            checkbox.checked = false;
        }
    });
}
