const userForm = document.forms.registerForm;
document.forms.registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Read all form fields values
    const username = document.getElementById("username").value;
    // console.log("Username = ", username);
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const passw = document.getElementById("pass").value;
    const cPass = document.getElementById("cPass").value;
    // console.log(cPass);
    const terms = document.getElementById("terms");
    const message = document.getElementById("message").value;
    const country = document.getElementById("country").value;
    console.log(country);
    // const gender = document.querySelectorAll('input[name="gender"]');
    const male = document.getElementById("male").checked;
    console.log(male);
    const female = document.getElementById("female").checked;
    console.log(female);

    // Access all the erros
    const uError = document.getElementById("uError");
    // console.log(uError);
    const eError = document.getElementById("eError");
    const pError = document.getElementById("pError");
    const pasError = document.getElementById("passError");
    const cPassError = document.getElementById("cPassError");
    // const cPassError = document.getElementById("cPassError");
    const tError = document.getElementById("tError");
    const mError = document.getElementById("mError");
    const counError = document.getElementById("counError");
    const gError = document.getElementById("gError");
    let isValid = true;


    // Username Validation
    const usernamePattern = /^[A-Za-z]+$/;
    if (username == "" || username.trim() == "") {
        uError.textContent = "Username is Required!";
        isValid = false;
    } else if (!username.match(usernamePattern)) {
        uError.textContent = "Username must contain characters only!";
        isValid = false;
    } else {
        uError.textContent = "";
        console.log("username is", username);
    }   

    //for email 

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email == "" || email.trim() == "") {
        eError.textContent = "E-mail is Required!";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        eError.textContent = "E-mail format not matched!";
        isValid = false;
    } else {
        eError.textContent = "";
        console.log("Email is", email);
    }

    //for phone 

    const phonePattern = /^([0-9]{10})$/;
    if (phone == "" || phone.trim() == "") {
        pError.textContent = "Phone is Required!";
        isValid = false;
    } else if (!phone.match(phonePattern)) {
        pError.textContent = "Phone format not matched!";
        isValid = false;
    } else {
        pError.textContent = "";
        console.log("Phone is", phone);
    }

    //for password
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    if (passw == "") {
        pasError.textContent = "Password is Required!";
        isValid = false;
    } else if (!passw.match(passPattern)) {
        pasError.textContent = "At least 8 characters, 1 uppercase, 1 lowercase, 1 number";
        isValid = false;
    } else {
        pasError.textContent = "";
        console.log(passw);
    }

    //confirm password
    if (cPass == "" || cPass.trim() == "") {
        cPassError.textContent = "cannot be empty!";
        isValid = false;
    } else if (cPass != passw) {
        cPassError.textContent = "password not matched";
        isValid = false;
    } else {
        cPassError.textContent = "";
        console.log(cPass);
    }

    // //gender
    if(male || female){
        gError.textContent = "";
        isValid = true;
    }

    if(!male || !female){
        isValid = false;
        gError.textContent = " Please select a gender . ";
    }

    // terms
    if (terms.checked == false) {
        tError.textContent = "Needs to be checked";
        isValid = false;
    }

    //country 
    if (country == "") {
        counError.textContent = "Select a country";
        isValid = false;
    } else {
        counError.textContent = "";
        console.log(country);
    }

    //message
    if (message.length > 20) {
        mError.textContent = "0-20 characters";
        isValid = false;
    } else {
        mError.textContent = "";
        console.log(message);
    }
});
