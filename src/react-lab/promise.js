const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({ name: "sk shail", roll: 100 })
        reject("Something Went Wrong")
    }, 5000)
})
console.log("Before")
promise.then((data) => {
    console.log(1, data)
}).catch((error) => {
    console.log("Error : ", error)
})
console.log("After")