//creating error object
// const error = new Error("something went wrong");

// for displaying full error detials
// console.log(error.stack)

//for displaying of only error message
// console.log(error.message)
// throw new Error("hello this is a new error")

// here we call custom error and pass it , doubt in this

//handling exceptions using try and catch
// const doFunction=()=>{
//     console.log("hi")
// }

// try{
//     doFunction();
// } catch (e){
//     console.log("there is some error")
//     console.log(e)
// }

//creating uncaught exception handling

// const doFunction = () => {
//     console.log(fetch(`localhost:300`))
// }

// process.on("uncaughtException", (err) => {
//     console.log("this is an uncaught exception", err)
//     process.exit(1)
// })

// doFunction()
//error handling using async await

 function doSomething(){
    console.log(fetch(`localhost`))
 }

const doFunctionm = async() =>{
    try{
        await doSomething()
    } catch(err){
        console.log("this is error",err)
        process.exit(1)
    }
}

doFunctionm()






