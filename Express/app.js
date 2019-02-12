let express = require("express");

let app = express();
app.set("view engine" , "ejs")

app.get("/" , (req , res) => {
    res.sendFile("index.html" , {root : "../HTML"})
})
app.get("/contact" , (req , res) => {
    res.sendFile("contact.html" , {root : "../HTML"})
})
app.get("/profile/:id" , (req , res) => {
    let data = {
        job : "Web Developer",
        age : 23
    }
    res.render("template" , {
        person : req.params.id,
        data : data
    })
})

app.listen(8001);