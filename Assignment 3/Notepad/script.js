const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes(){
    localStorage.setItem("notes", JSON.stringify(notes));
}

function displayNotes(){

    notesContainer.innerHTML = "";

    notes.forEach((note, index)=>{

        const noteDiv = document.createElement("div");

        noteDiv.style.background = "yellow";
        noteDiv.style.padding = "10px";
        noteDiv.style.margin = "10px";
        noteDiv.style.width = "200px";

        noteDiv.innerHTML = `
        <p>${note}</p>
        <button onclick="deleteNote(${index})">Delete</button>
        `;

        notesContainer.appendChild(noteDiv);

    });
}

function addNote(){

    if(input.value === "") return;

    notes.push(input.value);

    saveNotes();
    displayNotes();

    input.value = "";
}

function deleteNote(index){

    notes.splice(index,1);

    saveNotes();
    displayNotes();
}

addBtn.addEventListener("click", addNote);

displayNotes();