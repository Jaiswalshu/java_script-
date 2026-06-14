// const tinderuser = new Object()


const tinderuser ={ }



tinderuser.id ="123abc"
tinderuser.name ="shu"
tinderuser.iLoggedIn=false

// console.log(tinderuser)



const regularUser={
    email: "xyz@gma9l.com",
    fullnmae: {
        userfullName:{
            firstname: "shuhmam",
            lastname: "lastname"
        }
    }
}


// console.log(regularUser.fullnmae.userfullName.lastname)


const obj1 ={1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 =  {obj1,obj2}
// console.log(obj3)

// const obj3 =Object.assign({},obj1,obj2)


////////perfect wayyyy
// const Obj3 = {...obj1, ...obj2}
// console.log(Obj3)


const user =[
    {
        id:1,
        email: "shu@gmail.com"
    },
    {
        id:2,
        email: "s2hu@gmail.com" 
    }
]

// console.log(user[0].email)



console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))


console.log(Object.entries(tinderuser))


console.log(tinderuser.hasOwnProperty('iLoggedIn'))




//////////////////////////////destructuringggggg//////////


const course={
    coursename:"js in hindi",
    price:"999",
    courseInst: "shubhu"
}


// course.courseInst


const {courseInst:instu}= course

console.log(instu)




const navbar =() =>{

}

navbar(company="shuuuuu")