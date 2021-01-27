// Array.map()
const days =["Mon", "Tue", "Wed", "Thu", "Fri"];

function addNumSmile(day, index){
  return `${index + 1} ${day} :)`;
}

const smileDays = days.map(addNumSmile);

console.log(smileDays);