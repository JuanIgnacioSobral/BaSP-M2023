var emailInput = document.querySelector("#emailInput")

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