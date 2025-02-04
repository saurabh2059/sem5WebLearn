


const newElement = document.createElement("h1");

newElement.textContent = "helllo from js";


const abc = document.getElementById("sugam");

console.log(newElement)



abc.appendChild(newElement)

const data = [

    1,2,3,5,6,7,8,9
]



const info = [
    {
        "name":"aashan",
        "roll":"1"
    },
    {
        "name":"saurabh",
        "roll":"14"
    },
    {
        "name":"sugam",
        "roll":"18"
    },
    {
        "name":"anish",
        "roll":"3"
    },
]


const list = document.getElementById("list")

data.forEach(hello => {

    const hi = document.createElement("li")
    
    hi.classList = "saurabh"

    hi.textContent = hello

    list.append(hi)

});


const box = document.querySelector("#info")

info.forEach(item =>{

    const single =  document.createElement("div")
    single.classList = "single-card"

    single.innerHTML = `
        <h1> ${item.name} </h1>
        <h2> ${item.roll} </h2>

    `

    box.append(single)
})

