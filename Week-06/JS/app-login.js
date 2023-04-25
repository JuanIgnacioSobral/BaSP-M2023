var emailInput = document.querySelector("#emailInput");

function blurEmailCheck(){
    var val = document.querySelector("#emailInput").value;
    var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!(regex.test(val))){
        var alert = document.getElementById("alert");
        alert.style.visibility = "visible";
        emailInput.classList.add("redBorder");
    } else {
        return
    }
}

function focusEmailCheck(){
    var alert = document.getElementById("alert");
    alert.style.visibility = "hidden";
    emailInput.classList.remove("redBorder");
}

emailInput.addEventListener("blur", blurEmailCheck);

emailInput.addEventListener("focus", focusEmailCheck);



var passwordInput = document.getElementById("passwordInput");

function specialCharacterCheck(wordInput) {
    var specialCharacters = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
    for (var i = 0; i < wordInput.length; i++) {
        if (specialCharacters.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

function blurPasswordCheck(){
    var passwordText = passwordInput.value;
    if (specialCharacterCheck(passwordText)){
        passwordInput.classList.add("redBorder");
        var alertPassword = document.querySelector("#alertPassword");
        alertPassword.style.visibility = "visible";
    }
}

function focusPasswordCheck(){
    var alert = document.getElementById("alertPassword");
    alert.style.visibility = "hidden";
    passwordInput.classList.remove("redBorder");
}

passwordInput.addEventListener("blur", blurPasswordCheck);

passwordInput.addEventListener("focus", focusPasswordCheck);


var button = document.getElementById("button");

function loginClick (){
    var emailText = document.querySelector("#emailInput").value;
    var regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var passwordText = document.getElementById("passwordInput").value;
    var regexPassword = /^[A-Za-z0-9]*$/;
    if ((regexEmail.test(emailText))&&(regexPassword.test(passwordText)&&(passwordText !== ""))){
        alert("Successfully loged in with "+emailText+" as email and "+passwordText+" as password.");
    } else if (((passwordText === "")||(!(regexPassword.test(passwordText))))&&((regexEmail.test(emailText))&&(!(emailText === "")))) {
        alert("Please, enter a valid password.");
    } else if (((passwordText !== "")&&(regexPassword.test(passwordText)))&&(!(regexEmail.test(emailText))||(emailText === ""))){
        alert ("Please, enter a valid email.");
    } else if(((passwordText === "")||(!(regexPassword.test(passwordText))))&&(!(regexEmail.test(emailText))||(emailText === ""))){
        alert("Please enter a valid email and password");
    }
}

button.addEventListener("click", loginClick);