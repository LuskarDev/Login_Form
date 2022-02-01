var senha = document.getElementById('password')

var eye = document.querySelector('.eye')

var blindEye = document.getElementById('blindEye')

const email = document.getElementById('email')

const lock = document.getElementById('lock')

const mail = document.getElementById('mail')

const form = document.querySelector('.form')

const entrar = document.querySelector('.entrar')

const CriarConta = document.querySelector('.forgetForm')

const ButtonCreate = document.querySelector('.create')

const Forget = document.querySelectorAll('#Forget')

const Forgetpassword = document.querySelector('.Forgetpassword')

const Flogin = document.getElementById('FLogin')

Forget[0].addEventListener('click', () => {
    Forgetpassword.classList.add('ShowFormPassword');
    form.classList.remove('showForm');
    CriarConta.classList.remove('showForget')
})

Forget[1].addEventListener('click', () => {
    Forgetpassword.classList.add('ShowFormPassword');
    form.classList.remove('showForm');
    CriarConta.classList.remove('showForget')
})

ButtonCreate.addEventListener('click', () => {
    CriarConta.classList.add('showForget')
    form.classList.add('showForm');
})

entrar.addEventListener('click', () => {
    form.classList.remove('showForm');
    CriarConta.classList.remove('showForget')
    Forgetpassword.classList.remove('ShowFormPassword');
})

Flogin.addEventListener('click', () => {
    Forgetpassword.classList.remove('ShowFormPassword');
})



function outline(){

email.onclick = () => {
    mail.classList.toggle("ative");
}

senha.onclick = () => {
    lock.classList.toggle('ativo')
}

eye.onclick = () => {
    blindEye.classList.add("activo")
    eye.classList.add("active")
    senha.setAttribute('type', 'text');
    senha.classList.add("active");
}

blindEye.onclick = () => {
    eye.classList.remove("active")
    blindEye.classList.remove("activo")  
    senha.setAttribute('type', 'password');
    senha.classList.remove("active");
}
}
