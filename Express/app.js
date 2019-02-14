let express = require("express");

let app = express();
app.set("view engine" , "ejs");

app.use("/CSS" , express.static("../CSS"))

app.get("/" , (req , res) => {
    res.render("index.ejs")
})
app.get("/contact" , (req , res) => {
    res.render("contact.ejs")
})
app.get("/about", (req,res) =>{
    res.render("about.ejs")
})
app.get("/profile/:id" , (req , res) => {
    let data = {
        job : "Web Developer",
        age : 23,
        hobbies : ["eating" , "coding" , "sleeping"]
    }
    res.render("template" , {
        person : req.params.id,
        data : data
    })
})

app.listen(8001);