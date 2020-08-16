const rangeForm = document.querySelector(".rangeForm");
const generate = rangeForm.querySelector(".js-generate");
const inputRange = rangeForm.querySelector(".js-range");
const submitForm = document.querySelector(".submitForm");
const inputNum = submitForm.querySelector(".js-number");
const paintResult = document.querySelector(".paintResult");
const h2result = document.querySelector(".js-result");

let maxNum = 10; 

function makeRand(max){
    return Math.floor(Math.random() * max);
}

function paint(you,machine){
    paintResult.innerText = `You choose: ${you}, the machine choose: ${machine}`;    
    if(you === machine){
        h2result.innerText = `You Win!`;
    }else{
        h2result.innerText = `You Lost!`;
    }
}

function inputHandler(e){
    generate.innerText = `Generate a number between 0 and ${e.target.value}`;
    maxNum = Number(e.target.value);
    inputNum.max = maxNum;
}

inputRange.addEventListener("input",inputHandler);


function submitHandler(e){
    e.preventDefault();
    if(inputNum.value === ""){
        alert("choose the number!");
    }
    else{
        let rand = makeRand(maxNum+1);
        paint(Number(e.target.yourNum.value),rand);
    }
}

submitForm.addEventListener("submit",submitHandler);
