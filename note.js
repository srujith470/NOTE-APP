console.log('starting notes.js')
const FS = require('fs');
var fetchNotes = () => {
    try {
        var notesString = FS.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    } 
};
var saveNotes = (notes) => {
    FS.writeFileSync('notes-data.json', JSON.stringify(notes)); //save data
};

var logNote =(title,body) =>{
    debugger;
    console.log('--');
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
}


var addNote = (title, body) => {
    console.log('added note is:', title, body);
    var notes = fetchNotes();
    var note = { title, body };

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note); // push to list
        saveNotes(notes);
        return note
    }
    // var notesString = FS.readFileSync('notes-data.json');
    // notes = JSON.parse(notesString);
    // notes.push(note);
    // FS.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var getAll = () => {
    console.log('Getting all notes')
    return fetchNotes()
};
var getNote = (title, body) => {

    var notes = fetchNotes();

   var filterNotes = notes.filter((Note) => {
    return Note.title === title;
    
    });
    return filterNotes[0]

};
var removeNote = (title) => {
    var Notes = fetchNotes(); // fetch notes
    var filterNotes = Notes.filter((Note) =>  Note.title !== title ); // filter motes
    saveNotes(filterNotes); // save notes

    return Notes.length !== filterNotes.length;
};
module.exports = {
    AddNote: addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};