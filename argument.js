//process.argv returns an array with 
//first vale as path of node
//second value as path of file
//third as inputs we have given

const minimist = require("minimist")

// console.log(process.argv.splice(2,3)[0])

// process.argv.forEach((index , val)=>{
//     console.log(`${val}=${index}`)
// }) 

const argV = minimist(process.argv.splice(2,3))

console.log(argV.name)

