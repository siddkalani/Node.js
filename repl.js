//read evaluate print loop
//this is basically node terminal to perform various tasks inside terminal

//syntax for creating reply or start by writing node in cp

const repl = require("repl")
const local = repl.start("started$")

//print msg while exiting
local.on("exit" , ()=>{
    console.log("exiting bye")
    process.exit()
})