const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h4");


function returnTwoDigit(tempList) {
    let changeList = Array.from(tempList);
    for(let i=0; i<changeList.length; i++){
        let data = changeList[i]
        if(data<10){
            data = `0${data}`;
            changeList.splice(i,1,data);
        }
    }
    return changeList;
}

function insertClock(){
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    let timeArray = returnTwoDigit([hh,mm,ss]);
    clockTitle.innerText = `${timeArray[0]}:${timeArray[1]}:${timeArray[2]}`
}


function init(){
    insertClock();
    setInterval(insertClock, 1000);
}
init();