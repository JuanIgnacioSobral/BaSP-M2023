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