const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit" , (event)=>{event.preventDefault();
    let uservalue = username.value;
    let passvalue = password.value;
    if(uservalue.length < 5) {alert("Username must be at least 5 characters long.");
        return}
    let passwordpattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
    if(!passwordpattern.test(passvalue)){alert("Password must contain at least one uppercase letter,one lowercase letter, and one number.")
        return
    }
alert("Form submitted successfully!")})