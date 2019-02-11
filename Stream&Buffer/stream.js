let fs = require("fs");
let http = require("http");

// //Reading And Writting Stream Buffer
// let writeStream = fs.createWriteStream("../Text/writeStrea.txt" , "utf8");


// //Pipe
// readStream.pipe(writeStream)




let server = http.createServer(function(req , res){
    console.log("Requested Url IS: "+req.url)
    if(req.url === "/home" || req.url === "/"){
        res.writeHead(200, {
            "Content-Type" : "text/html"
            })
            fs.createReadStream("../HTML/index.html").pipe(res)
    }
    else if(req.url === "/about"){
        res.writeHead(200, {
            "Content-Type" : "text/html"
            })
            fs.createReadStream("../HTML/about.html").pipe(res)
    }
    else if(req.url === "/contact"){
        res.writeHead(200, {
            "Content-Type" : "text/html"
            })
            fs.createReadStream("../HTML/contact.html").pipe(res)
    }
    else if(req.url === "/api/rakib"){
        res.writeHead(200, {
            "Content-Type" : "application/json"
            })
            fs.createReadStream("../JSON/json.json").pipe(res)
    }
    else{
        res.writeHead(200 , {
            "Content-Type" : "text/html"
        })
        fs.createReadStream("../HTML/notFound.html").pipe(res)
    }

    // //Creating Object
    // let obj = {
    //     name : "Rakib",
    //     job : "Web Developer",
    //     age : 23
    // }

})

server.listen(8001 , "127.0.0.1");




// //Manual Way
// readStream.on("data" , (chunk) => {
//     writeStream.write(chunk)
// })