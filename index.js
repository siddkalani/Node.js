
//for importing from another file
const {car , ford} = require("./cars")
// console.log(car)
// console.log(ford)

//for converting object to string
console.log(JSON.stringify(car , null , 2))
console.log(JSON.stringify(ford, null , 2))
