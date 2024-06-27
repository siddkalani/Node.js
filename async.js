const userAuth = () => {
    console.log("enter  id and pw")
    const username = prompt("enter username")
    const password = prompt("enter password")

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "admin") {
                resolve("login-success")
            } else{
                reject("failed fuker")
            }
            console.log("performing task")
        }, 1000);
        
    })
}
function authStatus(userAuthStatus){
    return Promise.resolve(`signed in as : ${userAuthStatus}`)
}

async function sidd(){
    try{
    const res = await userAuth();
    console.log("validated")
    const userAuthStats = await authStatus(res)
    console.log(userAuthStats)
    } catch(err){
        console.log(err)
    }
}
sidd()