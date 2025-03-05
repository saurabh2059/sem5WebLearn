const form = document.forms.kyc


form.addEventListener('submit',(e)=>{

    e.preventDefault();
    console.log(form.name)
    

    // getting values form form 

    const fullName= document.getElementById('name').value
    const email= document.getElementById('email').value
    const age= document.getElementById('age').value
    const password= document.getElementById('password').value
    const terms= document.getElementById('terms').checked
    const male = document.getElementById('male').checked
    const female = document.getElementById('female').checked


    const nError = document.getElementById('nError')
    const eError = document.getElementById('eError')
    const aError = document.getElementById('aError')
    const pError = document.getElementById('pError')
    const tError = document.getElementById('tError')
    const gError = document.getElementById('gError')

    let isValid =true

    

    const namePattern =/^[a-zA-Z]+$/
    if(fullName=="" || fullName.trim()==""){

        nError.textContent = "name cant be empty"
        isValid = false

    }else if(!fullName.match(namePattern)){
        nError.textContent = "name doesnt match pattern"
        isValid = false
    }else{
        isValid= true
        nError.textContent = ""
    }

    const passPattern = /^(?=.*[a-z]).(?=.*[A-Z]).(?=.*[0-9]).{8,} $/
    if(password==""){
        pError.textContent = "pass cant be empty"
        isValid = false

    }else if(!password.match(passPattern)){
        pError.textContent = "pass doesnt match pattern"
        isValid = false
    }else{
        isValid= true
        pError.textContent = ""
    }



    if(age>=18 && age<=80){
        isValid=true
        aError.textContent=""
    }else{
        isValid=false
        aError.textContent="age not match"
    }

    if(!male && !female){
        isValid=false
        gError.textContent="select gender"
    }

    const emailPattern = /^[a-zA-Z0-9-_.]+@[a-zA-Z-_.]+\.[a-zA-Z]{2,4}$/
    if(email=="" || email.trim()==""){

        eError.textContent = "email cant be empty"
        isValid = false

    }else if(!email.match(emailPattern)){
        eError.textContent = "email doesnt match pattern"
        isValid = false
    }else{
        isValid= true
        eError.textContent = ""
    }
    

    if(!terms){
        tError.textContent="must be checked"
        isValid=false
    }



    // if(!isValid){
    //     document.write('form cant be submitted doesnt match the data inegrity')
    // }

})