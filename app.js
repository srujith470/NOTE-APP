console.log('starting app.js');

const yargs = require('yargs');
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const NOTES = require('./note.js');
const titleOptions = {
    describe: 'title of note', demand: true, alias: 't'
}
const bodyOptions = {
    describe: 'body of note', demand: true, alias: 'b'
}

const argv = yargs.
    command('add', 'ADD NEW NOTE',
        {
            title:titleOptions ,
        
        
            body: bodyOptions
        })
    .command('list', 'List All Notes')
    .command('read', 'Read Command', {
    title: titleOptions

    })
    .command('remove', 'remove a note', {
        title:titleOptions
    })
    .help().argv;
var command = process.argv[2];
console.log('COMMAND:', command);
console.log('process:', process.argv);
console.log('YARGS:', argv);



if (command === 'add') {
    var note = NOTES.AddNote(argv.title, argv.body)
    if (note) {
        console.log('note created')
    } else {
        console.log('title already taken');
        NOTES.logNote(argv.title, argv.body);
    }
}

else if (command === 'list') {
    console.log('Listing All notes');
    var allNotes = NOTES.getAll();
    console.log(`printing ${allNotes.length} note(s)`);
    allNotes.forEach((note) => {
        NOTES.logNote(note.title, note.body);
    });
}

else if (command === 'read') {
    console.log('reading note');
    var note = NOTES.getNote(argv.title, argv.body);
    if (note) {
        console.log('NOte found');
        NOTES.logNote(note.title,note.body);
        console.log('getting note', note.title)

    } else {
        console.log('note not found')
    }
}

else if (command === 'remove') {
    console.log('remove note')
    var noteRemoved = NOTES.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed' : 'note not found';
    console.log(message);
}

else {
    console.log('command not recognised')
}




// console.log(_.isString('abcdefgfhgcfgh'));
// console.log(_.isString(true));

// var filterARRAY = _.uniqBy(['andrew',1,'andrew', 'nathan',1,'nathan',7,8,7,6,5,6,8,9,5,6,7,3,26,58,9]);

// console.log(filterARRAY);

// var user = os.userInfo();


// fs.appendFile('greetings.txt', 'hello!'  , function(err){
//     if(err){
//         console.log('unable to write to file');
//     }
// })



// console.log(user)

