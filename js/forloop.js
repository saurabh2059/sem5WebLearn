for(let i = 1; i<=5;i++){
    console.log("number  is " + i);
}
//even
for (let i = 50 ; i<=100;i=i+2){
    console.log(` even nums ${i}`)
}
//odd
for (let i = 51 ; i<=100;i=i+2){
    console.log(` odd nums ${i}`)
}

//summer
let sum=0;
for (let i = 0 ; i<=20;i++){
    sum = sum+i
}
console.log(`total sum of 20 numbers = ${sum}`)


//multi question
for(let i  =1 ; i<=45;i++){

    if(i%3==0 && i%5==0){
        console.log("Fizz  &Buzz "+ i)
    }else
    if(i%3==0){
        console.log("Fizz"+ i)
    }else
    if(i%5==0){
        console.log("Buzz"+ i)
    }
   
}








