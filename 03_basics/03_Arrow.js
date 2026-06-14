

const user={
    username: "shu",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to our website`)
        // console.log(this);
    }

}

// user.welcomeMessage()

// user.username ="sam"

// user.welcomeMessage()

// console.log(this);


// function chai(){
//     // console.log(this);
// }
// chai()

// const chai = function(){

// }



// const chai =()=>{
//     let username = "shu"
//     console.log(this.username);

// }

// chai()


// const addTwo =(num1,num2)=>{
//     return num1+num2
// }



// const addTwo =(num1,num2)=> num1+num2

// const addTwo =(num1,num2)=> (num1+num2)




const addTwo =(num1,num2)=> ({username:"shu"})

console.log(addTwo(3,4))



const myArray = [1,2,3,4,5,6,]

myArray.forEach(()=> {})