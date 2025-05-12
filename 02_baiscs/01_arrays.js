
const myArr = [0, 1, 2, 3, 4, 5,6,7,8]
// console.log(myArr)

const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
myArr.pop()
// console.log(myArr)

// myArr.unshift(7)
// console.log(myArr)
myArr.shift()
// console.log(myArr)

c= myArr.includes(9)
// console.log(c)


const newArr  = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr)
const myn2 = myArr.splice(1,3)
console.log("AB", myArr);
console.log(myn2);