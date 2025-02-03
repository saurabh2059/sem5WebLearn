console.log("hello external js")


// const h1  = document.createElement("h1")
// h1.textContent = ` hello coder saurabh `

// document.querySelector(".element").appendChild(h1)

// document.body.appendChild(h1);

const element = document.getElementsByClassName("element")
console.log(element)

const hi  = document.querySelector("#id_select")
console.log(hi)


const newElement = document.createElement("p");
newElement.textContent = "This is a new div created and appended by JavaScript.";

const idElement = document.createElement("p");
newElement.textContent = "This is a new id  element";


element[0].appendChild(newElement);

// hi.appendChild(idElement);

// if selected by classname it gives array of divs