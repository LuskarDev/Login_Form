window.addEventListener("scroll", ()=> {
    var head = document.getElementById("head")
    head.classList.toggle("styck", window.scrollY > 5)
})

function ShowMore(){
    let buttonText = document.querySelector("#showMore p")
    let ImgButton = document.querySelector("#showMore img")
    let ul = document.getElementById("lista-ul")

    ul.classList.toggle("show");
    if(ul.className === "show"){
        buttonText.innerText = " Fechar";
        ImgButton.style.rotate = "-180deg"
    }else {
        buttonText.innerText = "Ver + 1";
            ImgButton.style.rotate = "0deg"

    }
}

function Share(){
    const title = window.document.title;
    const url = window.document.location.href;
    const text = "Venha Da Um Olhada em Uma Arvoré Social";
    let copiePop = document.querySelector(".copieConfirm");

    if(navigator.share){
        navigator.share({
            title: `${title}`,
            text: `${text}`,
            url: `${url}` 
        }).then(() => {
            copiePop.classList.add("active");
            setInterval(() => {
                copiePop.classList.remove("active")
            }, 2000)
        }).catch(console.error);
    }
}

