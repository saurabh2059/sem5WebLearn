


const newElement = document.createElement("h1");

newElement.textContent = "helllo from js";


const abc = document.getElementById("sugam");

console.log(newElement)



abc.appendChild(newElement)

const data = [

    1,2,3,5,6
]




const list = document.getElementById("list")

data.forEach(hello => {

    const hi = document.createElement("li")
    
    hi.classList = "saurabh"

    hi.textContent = hello

    list.append(hi)

});

