//singlton 


//object literal

// const mySyn =Symbol("key1")
const secret = Symbol("mykey")


const jsUser ={
    name: "shu",
    age: 21,
    "full name": "shubham jaiswal",
    [secret]: "mera code",
    location: "dehradun",
    email: "shu@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["mondays","saturday"]


}

// console.log(jsUser.email)
// console.log(jsUser["email"])


// console.log(jsUser["full name"])

// // console.log(jsUser.secret) -.aise acces nhi hoga 

// console.log(jsUser[secret])



// jsUser.email= "brocode@gmail.com"
// console.log(jsUser.email)


// Object.freeze(jsUser)
// console.log(jsUser.name)

// jsUser.name="new name "

// console.log(jsUser.name)



jsUser.greeting = function(){
    console.log("helllo js")
}
// console.log(jsUser.greeting())

jsUser.greetingTwo = function(){
    console.log(`helllo js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());