const FormP = document.getElementById("Prform"),
FormF = document.querySelector(".ForgetPass"),
FormC = document.getElementById("CreateAccount")

function ShowForget(){
    FormF.classList.add("ShowForget");
    FormP.classList.add("RemoveActive");
}

function ShowCreate(){
    FormP.classList.add("RemoveActive");
    FormC.classList.add("ShowCreate")
}

function Removeform() {
    FormC.classList.remove("ShowCreate");
    FormF.classList.remove("ShowForget");
    FormP.classList.remove("RemoveActive");
}

FormP.addEventListener("submit", e => {
    e.preventDefault();
    CheckInputs();
})

FormF.addEventListener("submit", e => {
    e.preventDefault();
    CheckInputs();
})

FormC.addEventListener("submit", e => {
    e.preventDefault();
    CheckInputs();
})

function CheckInputs(){
    let imgSenha = document.querySelectorAll(".inputsenha .input-border img")
    let imgEmail = document.querySelectorAll(".inputemail .input-border img")
    let imgFEmail = document.querySelectorAll(".forget .input-border img")
    let imgFEmailC = document.querySelectorAll(".GroupPutEmail .input-border img")
    let imgSenhaC = document.querySelectorAll(".GroupPutSenha .input-border img")
    let imgSenhaF = document.querySelectorAll(".GroupPutSenhac .input-border img")


    const PassFValue = document.getElementById("passwordC").value.trim()
    const PassF = document.getElementById("passwordC")
    const PassCValue = document.getElementById("passwordCr").value.trim()
    const PassC = document.getElementById("passwordCr")
    const emailCValue = document.getElementById("emailC").value.trim()
    const emailC = document.getElementById("emailC")
    const lastValue = document.getElementById("sobrenome").value.trim()
    const last = document.getElementById("sobrenome")
    const nameValue = document.getElementById("name").value.trim()
    const name = document.getElementById("name")
    const forgetPass = document.getElementById('forget-input')
    const forgetPassValue = document.getElementById('forget-input').value.trim()
    const email = document.getElementById('email')
    const emailValue = document.getElementById("email").value.trim()
    const password = document.getElementById("password")
    const passwordValue = document.getElementById("password").value.trim()

    if(passwordValue === ''){
        BorderError(password)
        imgSenha[1].classList.remove("ShowLock")
        imgSenha[0].style.display = "block"
    }else{
        ValidationBorder(password) 
        imgSenha[1].classList.add("ShowLock")
        imgSenha[0].style.display = "none"
    }
    
    if(emailValue === ''){
        BorderError(email)
        imgEmail[1].classList.remove("ShowEmail")
        imgEmail[0].style.display = "block" 
    }else{
        ValidationBorder(email)
        imgEmail[1].classList.add("ShowEmail")
        imgEmail[0].style.display = "none" 
    }

    if(forgetPassValue === ''){
        BorderError(forgetPass)
        imgFEmail[1].classList.remove("ShowFEmail")
        imgFEmail[0].style.display = "block" 
    }else{
        ValidationBorder(forgetPass)
        imgFEmail[1].classList.add("ShowFEmail")
        imgFEmail[0].style.display = "none" 
    }

    if(nameValue === ''){
        BorderError(name)
    }else{
        ValidationBorder(name)    
    }

    if(lastValue === ''){
        BorderError(last)
    }else{
        ValidationBorder(last)    
    }

    if(emailCValue === ''){
        BorderError(emailC);
        imgFEmailC[1].classList.remove("ShowEmailC")
        imgFEmailC[0].style.display = "block" 
    }else{
        ValidationBorder(emailC)    
        imgFEmailC[1].classList.add("ShowEmailC")
        imgFEmailC[0].style.display = "none" 
    }

    if(PassCValue === ''){
        BorderError(PassC)
        imgSenhaC[1].classList.remove("ShowLockF")
        imgSenhaC[0].style.display = "block" 
    }else{
        ValidationBorder(PassC)   
        imgSenhaC[1].classList.add("ShowLockF")
        imgSenhaC[0].style.display = "none"  
    }
    if(PassFValue === ''){
        BorderError(PassF)
        imgSenhaF[1].classList.remove("ShowLockC")
        imgSenhaF[0].style.display = "block" 
    }else{
        ValidationBorder(PassF)   
        imgSenhaF[1].classList.add("ShowLockC")
        imgSenhaF[0].style.display = "none"  
    }
}


function BorderError(input){
    const formControl = input.parentElement;

    let small = formControl.querySelector("small")

    small.className = "show"
    small.innerText = "Preencha o Campo"

    formControl.className = "input-border error"
}

function ValidationBorder(inputs){
    const formControl = inputs.parentElement;
    let small = formControl.querySelector("small");
 
    small.className = "";
    formControl.className = "input-border Sucess";
}
