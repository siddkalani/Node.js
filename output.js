// console.log("im %s of age %d","siddharth",18)

// console.clear()

// console.count("siddharth")
// console.count("siddharth")

// imp****

// how to visualize a progress thats taking some time to finish for eg a multiply operation
// we can use ProgressBar
//A progress bar is a graphical control element used to visualize the progression of an extended computer operation
const ProgressBar = require("progress")
const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas",{
    total:20
})

const timer = setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer)
    }
}, 100);

//for custom color in terminal use chalk
const chalk = require("chalk")
console.log(chalk.red("hello world"))