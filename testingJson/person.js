const fs = require('fs')

const person = {
    name: "Vic",
    age: 27
}

const personJson = JSON.stringify(person)

console.log(personJson)

fs.writeFileSync('person.json', personJson)

const dataBuffer = fs.readFileSync('person.json')

console.log(dataBuffer)
console.log("hello")
//We need to use toString() on all these bytes
const dataJSON = dataBuffer.toString();

//then parse it back to a js object for us to work with

const data = JSON.parse(dataJSON)

console.log(data)