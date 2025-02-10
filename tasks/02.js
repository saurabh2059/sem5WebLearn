// to print commas and and others at last


// let countries= ["Nepal","India","China","USA","AUS","Canada"]
// let countries= ["Nepal","India","China","USA"]
// let countries= ["Nepal","India"]
let countries= ["Nepal"]

let variable = `<span id="other">other</span>`

let value= countries.length
let arr1;
let arr2;

switch(value){
    case 1:
        document.write(countries)
        break;
    case 2:
        document.write(countries.join(" & "))
        break;
    case 3:
         arr1 = countries.slice(0,countries.length-1)
         arr2 = countries.slice(-1)
         document.write(arr1.toString()+" and "+arr2)
        break;
    default:
         arr1 = countries.slice(0,3)
         arr2 = countries.slice(3,countries.length)

        document.write(arr1+" and "+variable)

        const other = document.querySelector("#other")
   
            other.addEventListener('mouseover',()=>{
            other.title = arr2

        })

        break;
}


