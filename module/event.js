let events = require("events");
let myEmitter = new events.EventEmitter();

myEmitter.on("someevent" , (msg) => {
    console.log(msg)
})

myEmitter.emit("someevent" , "Works")