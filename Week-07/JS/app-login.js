function letterFind(wordInput) {
    var letter = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    for (var i = 0; i < wordInput.length; i++) {
        if (letter.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

function numberFind(wordInput) {
    var number = "9876543210";
    for (var i = 0; i < wordInput.length; i++) {
        if (number.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}







var emailInput = document.querySelector("#emailInput");

function blurEmailCheck(){
    var val = document.querySelector("#emailInput").value;
    var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!(regex.test(val))){
        var alert = document.getElementById("alert");
        alert.style.visibility = "visible";
        emailInput.classList.add("redBorder");
        return false;
    } else {
        return true;
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



function blurPasswordCheck(){
    var passwordText = passwordInput.value;
    if (!letterFind(passwordText) || !(numberFind(passwordText))){
        passwordInput.classList.add("redBorder");
        var alertPassword = document.querySelector("#alertPassword");
        alertPassword.style.visibility = "visible";
        return false;
    } else {
        return true;
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



function theFetch (url) {
    return fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            if(typeof(data.msg) != "undefined" && data.success == false){
                throw new Error (data.msg);
            } if(data.success == false){
                var errorGroup = "";
                for(var i=0; i<data.errors.length; i++){
                    errorGroup = errorGroup + "\n" + data.errors[i].msg
                }
                throw new Error (errorGroup);
            } else {
                var emailText = document.querySelector("#emailInput").value;
                var passwordText = document.getElementById("passwordInput").value;
                alert(data.msg +"\n"+"loged in with "+emailText+" as email and "+passwordText+" as password.");
                var emailLabel = document.querySelector("#emailLabel");
                var passwordLabel = document.querySelector("#passwordLabel");
                localStorage.setItem(passwordLabel.textContent, passwordInput.value);
            }
            return data;
        })
        .catch(function (error){
            alert(error);
            return error;
        })
}

function loginClick (){
    var url = "https://api-rest-server.vercel.app/login?email="+emailInput.value+"&password="+passwordInput.value;
    theFetch(url);
}

button.addEventListener("click", function(e){
    e.preventDefault();
    loginClick();
});
