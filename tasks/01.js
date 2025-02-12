// to print commas and and others at last

//reducer

/**
 The reduce() method executes a reducer function for array element.

The reduce() method returns a single value: the function's accumulated result.

The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.
 */

let array1= [2,3,4,5,6]

function getSum(total,num){


    total+=num;
    return total;


}
console.log(array1.reduce(getSum,0))


/**
The find() method returns the value of the first element that passes a test.

The find() method executes a function for each array element.

The find() method returns undefined if no elements are found.
 */


function checkOdd(num){
    
        return num%2!=0
}

function checkhigh(num){
    return num>5
}
console.log(array1.find(checkOdd))

console.log(array1.findIndex(checkhigh))


const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

console.log(newArr)
