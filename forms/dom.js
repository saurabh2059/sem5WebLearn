const container = document.getElementById("container");
container.textContent="This is text content added by javascript";

container.innerHTML = "<h1>I am heading added by using js</h1>"//text content is overwrite since we have added new html using innerHTML
console.log(container);

//create new element
const button= document.createElement("button");
button.textContent = "click Me";


//add click event to the button
button.addEventListener('click',function(){
    // alert("button is clicked");
    button.classList.toggle("my-btn");//in one click the class activate and in another click it is removed
});
//add class using js
button.classList.add('btn');
// button.classList.add('my-btnt');//we have written html for this so changed to red


//remove ckass
button.classList.remove("btn");

//append to container
container.appendChild(button);


//TASK
// Create ul and button. When clicking button, add list to the ul
// Hint: First CLick ,add task1, 2nd click task2.....

let ul = document.createElement('ul');
let btn1 = document.createElement('button');
btn1.textContent = "Task Adder";
container.appendChild(btn1);//since we have already made container
container.appendChild(ul);
//OR we can USE
// document.body.append(button,ul);

let count=1;

btn1.addEventListener('click',function(){
    let li=document.createElement('li');
    li.textContent=`Task ${count}`;
    ul.appendChild(li);
    count++;
});

