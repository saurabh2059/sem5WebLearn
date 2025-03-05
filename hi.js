let a1 = [1,2,3,4,5,6,7,8,9]
let a2 = ['hi','hello']


// console.log(a1.slice())
// console.log(a1.slice(2,4))
// console.log(a1.slice(-1))
// console.log(a1.slice(2,5))
// console.log(a1)

// console.log(a1.concat(a2))

function getSum(total,num){
    total+=num
    return total
}

 console.log(a1.reduce(getSum,0)) 

 function findeven(num){
    return num%2 == 0
 }

 function findmul(num){
    return num%5 == 0
 }

 console.log(a1.find(findeven))
 console.log(` index of first multiple of 5 is : ${a1.findIndex(findmul)}`)