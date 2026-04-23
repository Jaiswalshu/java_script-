//array

/*mix, zero base indexing ,,  

 --shallow copy=> same refnece point 

 -- deep copy => do not share the same refnces 



*/


const myArr = [0,1,2,3,4,5]
// console.log(myArr[1]);

const myheroes =["shu","Raj", "saktimaaan", "ton strak"]
// console.log(myheroes[1]);


const myArr2 = new Array(1,45,4,6,5,1,5)

// console.log(myArr2[1]);










// myArr.push(99)

// myArr.push(88)
// console.log(myArr)


// myArr.pop()


// myArr.unshift(1)

// myArr.shift()
// myArr.shift()



// console.log(myArr.includes(1));

// console.log(myArr.indexOf(3));

// console.log(myArr.indexOf(13));


// const newArr = myArr.join()

// console.log(myArr)

// console.log(typeof newArr)
// console.log(newArr)





/////////////sliec/////////////


console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);


const myn2 =myArr.splice(1,3)

console.log("c",myArr);
console.log(myn2)