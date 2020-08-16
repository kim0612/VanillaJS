const greetingContainer = document.querySelector(".js-greeting"),
    form = greetingContainer.querySelector("form"),
    sayHi = greetingContainer.querySelector(".sayHi");


function paintHi(text){
    sayHi.classList.remove("hiding");
    sayHi.innerText = `Hello! ${text}`
}

function submitHandler(e){
    e.preventDefault();
    let temp = e.target.askName.value;
    if(temp === ""){
        alert("type your name!");
    }
    else{
        localStorage.setItem("userName",temp);
        form.classList.add("hiding");
        paintHi(temp);
    }
}
form.addEventListener("submit",submitHandler);


function checkLs(){
    let userName = localStorage.getItem("userName");
    if(userName === null){
        form.classList.remove("hiding");
    }
    else{
        paintHi(userName);
    }
}


function init(){
    checkLs();
}
init();