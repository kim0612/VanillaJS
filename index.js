// Hello world 
console.log("Hello World!");


// How to use ``
function sayHello(name, age) {
    return `Hello ${name}! \nYou are ${age} years old.`;
}
console.log(sayHello("Nicolla",33));


// function() in object
const math = {
    plus : function(a,b) {return a+b;},
    minus : function(a,b) {return a-b;}
}
console.log(`Let's utilize function and object!
3+4=${math.plus(3,4)} 12-4=${math.minus(12,4)}`);


// DOM
console.dir(document);
document.title = "Fixed by document object!"

const title = document.querySelector("h1");
console.log(title);
console.dir(title);
title.innerHTML = "I fixed it!";
title.style.color = "white";


// Event
title.onclick=function(){
    title.style.color = "red";
}