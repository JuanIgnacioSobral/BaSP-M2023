//****** FUNCIONES PARA CHECKEAR CARACTERES */


function specialCharacterCheck(wordInput) {
    var specialCharacters = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
    for (var i = 0; i < wordInput.length; i++) {
        if (specialCharacters.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

function specialCharacterAndNumberCheck(wordInput) {
    var specialCharactersAndNumbers = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/9876543210";
    for (var i = 0; i < wordInput.length; i++) {
        if (specialCharactersAndNumbers.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

function numberCheck(wordInput) {
    var allButNumbers = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    for (var i = 0; i < wordInput.length; i++) {
        if (allButNumbers.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

function letterNumberFind(wordInput) {
    var letterNumber = "9876543210aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    for (var i = 0; i < wordInput.length; i++) {
        if (letterNumber.indexOf(wordInput.charAt(i)) != -1) {
            return true;
        }
    }
    return false;
}

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

function spaceFind() {
    var adressText = adressInput.value;
    return adressText.indexOf(" ");
}



//****** JS de los inputs */

var nameInput = document.querySelector("#nameInput");

nameInput.addEventListener("blur", blurNameCheck);

function blurNameCheck(){
    var nameText = nameInput.value;
    if (specialCharacterAndNumberCheck(nameText)&&(nameText.length > 3)) {
        nameInput.classList.add("redBorder");
        var alertNameLetters = document.querySelector("#alertNameLetters");
        alertNameLetters.style.visibility = "visible";
    } else if ((nameText.length < 3)&& !(specialCharacterAndNumberCheck(nameText))){
        nameInput.classList.add("redBorder");
        var alertNameLength = document.querySelector("#alertNameLength");
        alertNameLength.style.visibility="visible";
    } else if ((nameText.length < 3)&& specialCharacterAndNumberCheck(nameText)) {
        nameInput.classList.add("redBorder");
        var alertNameLength = document.querySelector("#alertNameLength");
        alertNameLength.style.visibility="visible";
        var alertNameLetters = document.querySelector("#alertNameLetters");
        alertNameLetters.style.visibility = "visible";
    }
}

nameInput.addEventListener("focus", focusNameCheck);

function focusNameCheck(){
    nameInput.classList.remove("redBorder");
    var alertNameLength = document.querySelector("#alertNameLength");
    alertNameLength.style.visibility="hidden";
    var alertNameLetters = document.querySelector("#alertNameLetters");
    alertNameLetters.style.visibility = "hidden";
}

var surnameInput = document.querySelector("#surnameInput");

surnameInput.addEventListener("blur", blurSurnameCheck);

function blurSurnameCheck(){
    var surnameText = surnameInput.value;
    if (specialCharacterAndNumberCheck(surnameText)&&(surnameText.length > 3)) {
        surnameInput.classList.add("redBorder");
        var alertSurnameLetters = document.querySelector("#alertSurnameLetters");
        alertSurnameLetters.style.visibility = "visible";
    } else if ((surnameText.length < 3)&& !(specialCharacterAndNumberCheck(surnameText))){
        surnameInput.classList.add("redBorder");
        var alertSurnameLength = document.querySelector("#alertSurnameLength");
        alertSurnameLength.style.visibility="visible";
    } else if ((surnameText.length < 3)&& specialCharacterAndNumberCheck(surnameText)) {
        surnameInput.classList.add("redBorder");
        var alertSurnameLength = document.querySelector("#alertSurnameLength");
        alertSurnameLength.style.visibility="visible";
        var alertSurnameLetters = document.querySelector("#alertSurnameLetters");
        alertSurnameLetters.style.visibility = "visible";
    }
}

surnameInput.addEventListener("focus", focusSurnameCheck);

function focusSurnameCheck(){
    surnameInput.classList.remove("redBorder");
    var alertSurnameLength = document.querySelector("#alertSurnameLength");
    alertSurnameLength.style.visibility="hidden";
    var alertSurnameLetters = document.querySelector("#alertSurnameLetters");
    alertSurnameLetters.style.visibility = "hidden";
}


var DNInput = document.querySelector("#DNInput");

DNInput.addEventListener("blur", blurDNICheck);

function blurDNICheck(){
    var DNIText = DNInput.value;
    if ((numberCheck(DNIText)) && DNIText.length > 7) {
        DNInput.classList.add("redBorder");
        var alertDNINumbers = document.querySelector("#alertDNINumbers");
        alertDNINumbers.style.visibility = "visible";
    } else if ((DNIText.length < 8) && (!(numberCheck(DNIText)))){
        DNInput.classList.add("redBorder");
        var alertDNILength = document.querySelector("#alertDNILength");
        alertDNILength.style.visibility="visible";
    } else if ((DNIText.length < 8)&& (numberCheck(DNIText))) {
        DNInput.classList.add("redBorder");
        var alertDNILength = document.querySelector("#alertDNILength");
        alertDNILength.style.visibility="visible";
        var alertDNINumbers = document.querySelector("#alertDNINumbers");
        alertDNINumbers.style.visibility = "visible";
    }
}

DNInput.addEventListener("focus", focusDNICheck);

function focusDNICheck(){
    DNInput.classList.remove("redBorder");
    var alertDNILength = document.querySelector("#alertDNILength");
    alertDNILength.style.visibility="hidden";
    var alertDNINumbers = document.querySelector("#alertDNINumbers");
    alertDNINumbers.style.visibility = "hidden";
}


var phoneInput = document.querySelector("#phoneInput");

phoneInput.addEventListener("blur", blurPhoneCheck);

function blurPhoneCheck(){
    var phoneText = phoneInput.value;
    if ((numberCheck(phoneText)) && phoneText.length > 7) {
        phoneInput.classList.add("redBorder");
        var alertPhoneNumbers = document.querySelector("#alertPhoneNumbers");
        alertPhoneNumbers.style.visibility = "visible";
    } else if ((phoneText.length < 8) && (!(numberCheck(phoneText)))){
        phoneInput.classList.add("redBorder");
        var alertPhoneLength = document.querySelector("#alertPhoneLength");
        alertPhoneLength.style.visibility="visible";
    } else if ((phoneText.length < 8)&& (numberCheck(phoneText))) {
        phoneInput.classList.add("redBorder");
        var alertPhoneLength = document.querySelector("#alertPhoneLength");
        alertPhoneLength.style.visibility="visible";
        var alertPhoneNumbers = document.querySelector("#alertPhoneNumbers");
        alertPhoneNumbers.style.visibility = "visible";
    }
}

phoneInput.addEventListener("focus", focusPhoneCheck);

function focusPhoneCheck(){
    phoneInput.classList.remove("redBorder");
    var alertPhoneLength = document.querySelector("#alertPhoneLength");
    alertPhoneLength.style.visibility="hidden";
    var alertPhoneNumbers = document.querySelector("#alertPhoneNumbers");
    alertPhoneNumbers.style.visibility = "hidden";
}

var adressInput = document.querySelector("#adressInput");

adressInput.addEventListener("blur", blurAdressCheck);


function blurAdressCheck(){
    var adressText = adressInput.value;
    if(spaceFind() > 0){
        if ((specialCharacterAndNumberCheck(adressText.substring(0, spaceFind()))) || (numberCheck(adressText.substring(spaceFind())))){
            var alertAdressValid = document.querySelector("#alertAdressValid");
            alertAdressValid.style.visibility = "visible";
            adressInput.classList.add("redBorder");
        }
    }  if  (adressText.length < 5){
        adressInput.classList.add("redBorder");
        var alertAdressLength = document.querySelector("#alertAdressLength");
        alertAdressLength.style.visibility = "visible";
        adressInput.classList.add("redBorder");
    } if (spaceFind() <= 0 || spaceFind() === adressText.length-1){
        var alertAdressValid = document.querySelector("#alertAdressValid");
            alertAdressValid.style.visibility = "visible";
            adressInput.classList.add("redBorder");
    }
}

adressInput.addEventListener("focus", focusAdressCheck);

function focusAdressCheck(){
    adressInput.classList.remove("redBorder");
    var alertAdressLength = document.querySelector("#alertAdressLength");
    alertAdressLength.style.visibility="hidden";
    var alertAdressValid = document.querySelector("#alertAdressValid");
    alertAdressValid.style.visibility = "hidden";
}

var locationInput = document.getElementById("locationInput");

locationInput.addEventListener("blur", blurLocationCheck);

function blurLocationCheck(){
    var locationText = locationInput.value;
    if (specialCharacterAndNumberCheck(locationText)&&(locationText.length > 3)) {
        locationInput.classList.add("redBorder");
        var alertLocationValid = document.querySelector("#alertLocationValid");
        alertLocationValid.style.visibility = "visible";
    } else if ((locationText.length < 3)&& !(specialCharacterAndNumberCheck(locationText))){
        locationInput.classList.add("redBorder");
        var alertLocationLength = document.querySelector("#alertLocationLength");
        alertLocationLength.style.visibility="visible";
    } else if ((locationText.length < 3)&& specialCharacterAndNumberCheck(locationText)) {
        locationInput.classList.add("redBorder");
        var alertLocationLength = document.querySelector("#alertLocationLength");
        alertLocationLength.style.visibility="visible";
        var alertLocationValid = document.querySelector("#alertLocationValid");
        alertLocationValid.style.visibility = "visible";
    }
}

locationInput.addEventListener("focus", focusLocationCheck);

function focusLocationCheck(){
    locationInput.classList.remove("redBorder");
    var alertLocationLength = document.querySelector("#alertLocationLength");
    alertLocationLength.style.visibility="hidden";
    var alertLocationValid = document.querySelector("#alertLocationValid");
    alertLocationValid.style.visibility = "hidden";
}


var zipCodeInput = document.querySelector("#zipCodeInput");

zipCodeInput.addEventListener("blur", blurZipCodeCheck);

function blurZipCodeCheck(){
    var zipCodeText = zipCodeInput.value;
    if ((numberCheck(zipCodeText)) && (zipCodeText.length === 4 || zipCodeText.length === 5)) {
        zipCodeInput.classList.add("redBorder");
        var alertZipCodeValid = document.querySelector("#alertZipCodeValid");
        alertZipCodeValid.style.visibility = "visible";
    } else if ((!(zipCodeText.length === 4 || zipCodeText.length === 5)) && (!(numberCheck(zipCodeText)))) {
        zipCodeInput.classList.add("redBorder");
        var alertZipCodeLength = document.querySelector("#alertZipCodeLength");
        alertZipCodeLength.style.visibility="visible";
    } else if ((!(zipCodeText.length === 4 || zipCodeText.length === 5)) && (numberCheck(zipCodeText))) {
        zipCodeInput.classList.add("redBorder");
        var alertZipCodeLength = document.querySelector("#alertZipCodeLength");
        alertZipCodeLength.style.visibility="visible";
        var alertZipCodeValid = document.querySelector("#alertZipCodeValid");
        alertZipCodeValid.style.visibility = "visible";
    }
}

zipCodeInput.addEventListener("focus", focusZipCodeCheck);

function focusZipCodeCheck(){
    zipCodeInput.classList.remove("redBorder");
    var alertZipCodeLength = document.querySelector("#alertZipCodeLength");
    alertZipCodeLength.style.visibility="hidden";
    var alertZipCodeValid = document.querySelector("#alertZipCodeValid");
    alertZipCodeValid.style.visibility = "hidden";
}

var emailInput = document.querySelector("#emailInput");

emailInput.addEventListener("blur", blurEmailCheck);

function blurEmailCheck(){
    var val = document.querySelector("#emailInput").value;
    var regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (!(regex.test(val))){
        var alert = document.getElementById("alertEmail");
        alert.style.visibility = "visible";
        emailInput.classList.add("redBorder");
    } else {
        return
    }
}

emailInput.addEventListener("focus", focusEmailCheck);

function focusEmailCheck(){
    var alert = document.getElementById("alertEmail");
    alert.style.visibility = "hidden";
    emailInput.classList.remove("redBorder");
}

var passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("blur", blurPasswordCheck);

function blurPasswordCheck(){
    var passwordText = passwordInput.value;
    if (!letterFind(passwordText) || !(numberFind(passwordText))){
        passwordInput.classList.add("redBorder");
        var alertPasswordValid = document.querySelector("#alertPasswordValid");
        alertPasswordValid.style.visibility = "visible";
    } if (passwordText.length < 8) {
        passwordInput.classList.add("redBorder");
        var alertPasswordLength = document.querySelector("#alertPasswordLength");
        alertPasswordLength.style.visibility = "visible";
    }
}


passwordInput.addEventListener("focus", focusPasswordCheck);

function focusPasswordCheck(){
    var alertPasswordLength = document.getElementById("alertPasswordLength");
    alertPasswordLength.style.visibility = "hidden";
    var alertPasswordValid = document.getElementById("alertPasswordValid");
    alertPasswordValid.style.visibility = "hidden";
    passwordInput.classList.remove("redBorder");
}


var repeatPasswordInput = document.querySelector("#repeatPasswordInput");

repeatPasswordInput.addEventListener("blur", blurRepeatPasswordCheck);

function blurRepeatPasswordCheck(){
    var repeatPasswordText = repeatPasswordInput.value;
    var passwordText = passwordInput.value;
    if (passwordText != repeatPasswordText){
        repeatPasswordInput.classList.add("redBorder");
        var alertRepeatPassword = document.querySelector("#alertRepeatPassword");
        alertRepeatPassword.style.visibility = "visible";
    }
}

repeatPasswordInput.addEventListener("focus", focusRepeatPasswordCheck);

function focusRepeatPasswordCheck(){
    repeatPasswordInput.classList.remove("redBorder");
    var alertRepeatPassword = document.querySelector("#alertRepeatPassword");
    alertRepeatPassword.style.visibility = "hidden";
}

var button = document.querySelector("#button");

button.addEventListener("click", function(e){
    e.preventDefault();
    alertCheck();
});



function elFetch (url) {
    return fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            if(typeof(data.msg) != "undefined" && data.success == false){
                throw new Error(data.msg);
            } else if(data.success ==false){
                var errorGroup = "";
                for(var i=0; i<data.errors.length; i++){
                    errorGroup = errorGroup + "\n" + data.errors[i].msg
                }
                throw new Error (errorGroup);
            } else {
                alert(data.msg);
            }
            return data;
        })
        .catch(function (error){
            alert(error);
            return error;
        })
}


function alertCheck(){
    var url = "https://api-rest-server.vercel.app/signup"
    console.log(url.json());
    // var inputGroup = document.querySelectorAll(".inputList");
    // var labelGroup = document.querySelectorAll(".labelList");
    // var alertGroup = document.querySelectorAll(".errorAlert");
    // var labelinput = ["Successfully signed up. \nHere is your information: "];
    // var errorList = ["Sign up was not succesful. \nPlease check the following errors: "];
    // function redBorder(input){
    //     if (input.classList.contains("redBorder")){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    // for (var i=0 ; i<alertGroup.length ; i++){
    //     if (alertGroup[i].style.visibility === "visible"){
    //         errorList.push(" ");
    //         errorList.push(alertGroup[i].textContent);
    //         errorList.push(" ");
    //     }
    // }
    // for (var i=0 ; i<inputGroup.length ; i++){
    //     if (redBorder(inputGroup[i])){
    //         return  alert (errorList.join(""));;
    //     }
    //     if (!inputGroup[i].classList.contains("redBorder")){
    //         labelinput.push(" ");
    //         labelinput.push(labelGroup[i].textContent);
    //         labelinput.push(": ");
    //         labelinput.push(inputGroup[i].value);
    //         console.log(i);
    //     }
    // }
    // if (labelinput.length > (inputGroup.length+labelGroup.length)){
    //     return alert(labelinput.join(""));
    // }
}