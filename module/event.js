let events = require("events");
let util = require("util");

function Person(name){
    this.name = name
}

util.inherits(Person , events.EventEmitter);

let Rakib = new Person("Rakib")
let Nayan = new Person("Nayan")
let Aulad = new Person("Aulad")

let people = [Rakib , Nayan , Aulad]

people.forEach( people => {
    people.on("speak" , (msg) => {
        console.log(people.name + ": " +msg)
    })
})

Rakib.emit("speak" , "Hy guys")
Nayan.emit("speak" , "Hy man")
Aulad.emit("speak" , "Hy guys")






// let myEmitter = new events.EventEmitter();
// myEmitter.on("someevent" , (msg) => {
//     console.log(msg)
// })

// myEmitter.emit("someevent" , "Works")