const digit = document.querySelectorAll(".digit");

function digitHandler(e){
    alert(e.target.innerText);
}

for (let i = 0; i < digit.length; i++) {
    const element = digit[i];
    element.addEventListener("click",digitHandler);
}
