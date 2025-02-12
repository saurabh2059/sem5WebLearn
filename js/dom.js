// const container = document.querySelector("#container")
const container = document.getElementById("container")
console.log(container)

// document.body.isContentEditable = true;

container.innerHTML = `<h1>I am heading 1</h1>`

const button = document.createElement('button');
button.textContent='click';

container.append(button)


button.classList.add('btn')
button.classList.add('my-btn')
button.classList.remove('btn')

button.addEventListener('click',()=>{
    // button.toggleAttribute('type','submit')
    // button.setAttribute('type','submit')
    button.classList.toggle('my-btn')
    alert("button is clicked!!!!")
})




const ul = document.createElement('ul');
const btn2= document.createElement('button');
btn2.textContent='ul adder'

container.appendChild(btn2);
container.appendChild(ul);
let counter=1;

btn2.addEventListener('click',()=>{

    const li= document.createElement('li');
    li.textContent=`Task ${counter++}`;
    ul.appendChild(li)

})


// append takes multiple

// container.append(btn2,li)


// const arr =["saurabh","aashan","biswas","sugam"]

// arr.forEach(element => {
//    constl2= document.createElement('li');
//     li.textContent= `${element}`;

//     ul.appendChild(l2)
// });


/**  Box adder with random color */


const bt3 = document.createElement('button');

bt3.textContent= 'box adder'

container.appendChild(bt3)

const boxContainer = document.getElementById('box-container')

bt3.addEventListener('click',()=>{

    let number1 = (Math.floor( Math.random() *1000 ))%255;
    let number2 = (Math.floor( Math.random() *1000 ))%255;
    let number3 = (Math.floor( Math.random() *1000 ))%255;

    let style = `rgb(${number1},${number2},${number3})`

    const box = document.createElement('div');

    box.classList.add('box')   

    box.style.backgroundColor = style

    boxContainer.appendChild(box);

})



let style = `rgb(${number1},${number2},${number3})`

console.log(style)

