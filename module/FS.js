let fs = require("fs")

// //Syschronous Version
// let readme = fs.readFileSync("../Text/read.txt" , "utf8");
// fs.writeFileSync("../Text/write.txt" , readme);
// console.log("Now I am working")


// //Asyschronous Version
fs.readFile("../Text/read.txt" , "utf8" , (err, data) => {
    if(err) return err;
    console.log(data)
});
console.log("Now I am working")