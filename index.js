//for importing from another file
// const {car , ford} = require("./cars")
// console.log(car)
// console.log(ford)

//for converting object to string
// console.log(JSON.stringify(car , null , 2))
// console.log(JSON.stringify(ford, null , 2))

const path = require("path")

const filePath = "/Users/siddharthkalani/Downloads/Node/files/sample.txt"

// console.log(path.dirname(filePath))
// console.log(path.extname(filePath))
// console.log(path.basename(filePath))
// console.log(__dirname)

const fs = require("fs")
//reading a file
// basic syntax for reading a file

// fs.readFile(filename , encoding , callback function)

// fs.readFile(filePath , 'utf8' , (err , data)=>{
//     if(err) throw new Error("there is some error")
//     console.log(data)
// })

// another way of getting data from another file
try{
   const data =  fs.readFileSync(path.join(__dirname,"files","sample.txt") , "utf-8")
        console.log(data)
    }
 catch(err)
{console.log("lol",err)}

