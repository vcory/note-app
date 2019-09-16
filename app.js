const yargs = require('yargs')
const {addNote,listNotes,removeNote} = require('./notes')


// console.log(process.argv[2])
if (process.argv[2] == "add") {
    console.log("adding note...")
    addNote(yargs.argv.notes)
} else if (process.argv[2] == "remove"){
    console.log("removing note...")
    removeNote();
} else if (process.argv[2] === "read"){
    console.log("reading note...")
} else {
    console.log("Listing note")
    listNotes();
}

// console.log(process.argv)


// const command = process.argv[2]

// if (command === 'add'){
//     console.log('adding note....')
// }

console.log(process.argv)
console.log(yargs.argv.notes)