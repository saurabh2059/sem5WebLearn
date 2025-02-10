// let array = [1,"saurabh","aryal",2.44]

// array.forEach(element => {
//     console.log(element)
// });


const a1 = new Array(1,2,3,4,5)




console.log(a1)



console.log(a1[0])
// console.log(a1[3])
a1[3]=6
// console.log(a1[3])


// add item in array 
// infirst
const arr = a1.unshift("ram","shyam");
// console.log(arr)
//at last
a1.push("john","smith")
console.log(a1)

// removing in array 
// from first
a1.shift()
console.log(a1)
a1.pop()
console.log(a1)

// find index  of specific item from array
console.log(a1.indexOf(6))  // if not found returns -1


a1.splice((2,1))


console.log(a1)


const a2= [1,2,3,4,5,6,7]

a2.splice(2,1);
console.log(a2)

const students= ["Biswas","Zenith","Aashan","Sugam","Saurabh"]
const bd= "Zenith"

const position = students.indexOf(bd)
students.splice(position,1)

console.log(students)

// insert element to array using splice
students.splice(position,0,"Zenith","Rai")

console.log(students)









