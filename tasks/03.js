

const root = document.querySelector("#root")
console.log(root)

const button = document.querySelector("#enter")
console.log(button)

const value = document.querySelector("#userInput")
console.log(value)

let countries=[];


button.addEventListener('click',()=>{

    countries.push( String(value.value))
   onEnter(countries)
   value.value=""

})

// custom call back function

function onEnter(countries){

root.innerHTML=``
let element = document.createElement("p")
console.log(element)

let num= countries.length
let arr1;
let arr2;
let arr3;

switch(num){
    case 1:
        element.textContent=` ${countries.toString()} `
        root.appendChild(element)
       
        break;
    case 2:
        element.textContent=` ${countries.join(" & ")} `
        root.appendChild(element)
       
        break;
    case 3:
         arr1 = countries.slice(0,countries.length-1)
         arr2 = countries.slice(-1)
         arr3 =  (arr1.toString()+" & "+arr2.toString())
         element.textContent=` ${arr3} `
            root.appendChild(element)
        break;
    default:
         arr1 = countries.slice(0,3)
         arr2 = countries.slice(3,countries.length)
        arr3 =  (arr1.toString()+" & ")
        element.innerHTML=` ${arr3} <span class="other">other</span> `
        root.appendChild(element)


        const other = document.querySelector(".other")
            element.title = arr2.toString()

            
        break;
}
}