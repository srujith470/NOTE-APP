var obj = {
name : 'andrew'
}
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personJson = '{"name": "AMITH", "age": 25}';
var person = JSON.parse(personJson);
console.log(typeof personJson);
console.log(typeof person);
console.log(person);

const FS = require('fs');

var originalNote = {
  title: ' title 123456',
  body: 'some body'  
};


var OriginalNoteSttring = JSON.stringify(originalNote);
FS.writeFileSync('notes.json', OriginalNoteSttring);


var noteString = FS.readFileSync('notes.json');
var note = JSON.parse(noteString);


console.log(typeof note);
console.log(note.title);
console.log(note.body);

