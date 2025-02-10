

/*
let abc=[10,9,4,5,2]

let hello = abc.slice(1,4)

console.log(hello)

let countries = ["Nepal","India","China","Bhutan","Maldives"]

console.log(countries.slice())
console.log(countries.slice(2))
console.log(countries.slice(-1))
console.log(countries.slice(2,5))

* */

let countries = ["Nepal","India","China","Bhutan","Maldives"]
let countries2 = ["USA","Aus"]

console.log(countries.toString())


let joined = countries.join("&")
console.log(joined)



// let length= countries.length
// console.log(length)

// switch(length){
//     case 1:
//         joined= countries.join()
//         break;
//         case 2:
//             countries.join(" and ")
//             break;
//         case 3:
//                 countries.join()
//                 break;
//          case 4:
//         countries.join()
//         break;
// }

const concat = countries.concat(countries2)
console.log(concat)

// for(let i=0; i<concat.length ; i+=2){
//     console.log(concat[i])
// }

// for(let country of concat){
//     console.log(country)
// }

concat.forEach(item=>{
    console.log(item)
})

// --forEach()
// --map()
// --find()
// --findIndex()
// --reduce()
// --others

// let val = concat.reduce()
// console.log(val)


let student = {

    name:"Aashan",
    age:21,
    id:101,
    marks:24.56
}


function student_val(name,age){
  this.name = name;
  this.age = age
}


let s1= new student_val("Aashan",23)

console.log(s1)








