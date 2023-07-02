const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Function to display the stored notes
function showNotes() {
    let storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notesContainer.innerHTML = storedNotes;
    }
}

// Function to update the local storage with the current notes
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for creating a new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

// Event listener for deleting a note
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Event listener for updating storage when notes are edited
notesContainer.addEventListener("keyup", function() {
    updateStorage();
});

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

// Load the stored notes when the page loads
showNotes();
