

//************************* */ qno1**************************

// let number = prompt("enter a number ")


// if(number>0){
//     console.log("positive")
// }else if(number<0){
//     console.log("negative")
// }else if(number == 0){
//     console.log("zero")
// }else{

// }

//************************* */ qno2**************************

// let num1 = 45, num2 = 2, num3= 7

// let num1 = prompt("enter first number")
// let num2 = prompt("enter second number")
// let num3 = prompt("enter third number")



const container =  document.getElementById("container")
console.log(container)

let num1 = parseInt(document.querySelector("#num1").value)
let num2 = parseInt(document.querySelector("#num2").value)
let num3 = parseInt(document.querySelector("#num3").value)

const high = document.querySelector("#highest")
const low = document.querySelector("#lowest")

const printer = (value,check)=>{

    const hi =  value ? value:0;
    console.log("hello")
    const newElement = document.createElement("div");
    newElement.classList= "text"
    newElement.innerHTML = `
    <p> The ${check === "high"? "highest":"lowest"} value is ${hi} </p>
    `
    container.appendChild(newElement);


}

function getValues() {
    return {
      num1: parseInt(document.querySelector("#num1").value) ,
      num2: parseInt(document.querySelector("#num2").value) ,
      num3: parseInt(document.querySelector("#num3").value) ,
    };
  }

const highest = ()=>{

const {num1,num2,num3} = getValues()

let highest = 0;

    if(num1 == num2 && num2 == num3){
        console.log("all equal")
        highest = num1;
    }    
    else if(num1>=num2 && num1>=num3){
        console.log("num1 is greater" + num1)
        highest = num1;
    }else if(num2>=num3&& num2>=num1){
        console.log("num2 is greater" + num2)
        highest = num2;
    }else if(num3>=num1 && num3>=num2){
        console.log("num3 is greater" + num3)
        highest = num3;
    }
    
    printer(highest,"high")
  

}

const lowest = ()=>{

    const {num1,num2,num3} = getValues()
    let lowest = 0;
    if(num1 == num2 && num2  == num3){
        console.log("all equal")
        lowest = num1;
    }    
    else if(num1<=num2 && num1<=num3){
        console.log("num1 is lowest" + num1)
        lowest = num1;
    }else if(num2<=num3&& num2<=num1){
        console.log("num2 is lowest" + num2)
        lowest = num2;
    }else if(num3<=num1 && num3<=num2){
        console.log("num3 is lowest" + num3)
        lowest = num3;
    }
   printer(lowest,"low")
}

high.addEventListener('click', highest );
low.addEventListener('click',lowest);











// let val1 = 47;

//************************* */ qno3**************************
/** 
let val1 = prompt("enter a number to check for divisible question")

if(val1%5 == 0){
    console.log("divisible")
}else{
    console.log("not divisible")
}

if(val1%5==0 && val1%11 == 0){
    console.log("divisible")
}else{
    console.log("not divisible")
}
    */