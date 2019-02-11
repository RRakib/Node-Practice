let fs = require("fs")

let readStream = fs.createReadStream("../Text/read.txt" , "utf8");
let writeStream = fs.createWriteStream("../Text/writeStrea.txt" , "utf8");



readStream.on("data" , (chunk) => {
    writeStream.write(chunk)
})