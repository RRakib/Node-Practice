let http = require("http")

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/html"})
    res.write("Hello")
    res.end();
}).listen(8001)