function sayMyName(){
    console.log("hello")
    console.log("Subhu")
    console.log("Boss")
}

//sayMyName()

function addtwoNumbers(num1 ,num2){
    // console.log(num1+num2)

    let result =num1+num2
    return result
}

const result = addtwoNumbers(4,4)

// console.log("result:",result)



function loginUserMessage(username){
    if(username === undefined){
        console.log("please eneter the user name")
        
    }
    
    return `${username} just logged in`
}


// console.log(loginUserMessage("shu"))

// console.log(loginUserMessage())



function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,200))


const user ={
    username: "Shu",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)

// handleObject({
//     username: "bro",
//     price: 99
// })



const myNewArray = [200,400,100,600]


function returnSecondValue(getArray){
    return getArray[1]
}


console.log(returnSecondValue(myNewArray))
