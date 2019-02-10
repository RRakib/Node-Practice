// //Create Sync Directory
let fs = require("fs")


// //Making Directory -> Writting File -> Readig File
fs.mkdir("../Text/testDir" , () => {
    fs.writeFile("../Text/testDir/textFile.txt" ," Writting about node js ", () => {
        fs.readFile("../Text/testDir/textFile.txt" , (err , data) => {
            if(err) return err
            console.log(data.toString())
        })
    })
})

// //Deleting File
fs.unlink("../Text/testDir/textFile.txt" , () => {
    console.log("File Deleted")
})

// //Deleting Directory
fs.rmdir("../Text/testDir" , () => {
    console.log("Deleted")
})


console.log("Executed")