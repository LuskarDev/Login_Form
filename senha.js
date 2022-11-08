let PasswordInput = document.querySelector("#password");
PasswordCr = document.getElementById('passwordCr'),
PasswordC = document.getElementById("passwordC")

let eye = document.querySelectorAll(".input-border img")
let line = document.querySelectorAll(".line")

function ShowPassword(){
    if(PasswordInput.type === "password"){
        PasswordInput.setAttribute("type", "text")
        line[0].classList.add("CloseEye")
    }else {
        PasswordInput.setAttribute("type", "password")
        line[0].classList.remove("CloseEye")
    }
}

function ShowPasswordCr(){
    if(PasswordCr.type === "password"){
        PasswordCr.setAttribute("type", "text")
        line[1].classList.add("CloseEye")
    }else {
        PasswordCr.setAttribute("type", "password")
        line[1].classList.remove("CloseEye")
    
    }
}

function ShowPasswordC(){
    if(PasswordC.type === "password"){
        PasswordC.setAttribute("type", "text")
        line[2].classList.add("CloseEye")
    }else{
        PasswordC.setAttribute("type", "password")
        line[2].classList.remove("CloseEye")
    }
}

let close = document.querySelector(".close").addEventListener("click", () => {
    let bg = document.querySelector(".bg").style.display = "none"
})