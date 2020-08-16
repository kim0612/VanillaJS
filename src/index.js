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
console.dir(window);
console.dir(document);
document.title = "Fixed by document object!"

var intViewportWidth = window.innerWidth;
console.log(intViewportWidth);

const title = document.querySelector("h1");
console.log(title);
console.dir(title);
title.innerHTML = "I fixed it!";
title.style.color = "white";


// Event
const h1 = document.querySelector("h1");

const superEventHandler = {
    handleClick : function(){
        if(h1.style.color === "white"){
            h1.style.color = "#5f27cd";
        }
        else{
            h1.style.color = "white";
        }
    },
    handleResize : function(){
        h1.style.backgroundColor = "#feca57";
    },
    handleMouseOver : function(){
        h1.style.cursor = "pointer";
    }
}

h1.addEventListener("click", superEventHandler.handleClick);
window.addEventListener("resize",superEventHandler.handleResize);
h1.addEventListener("mouseover",superEventHandler.handleMouseOver);
