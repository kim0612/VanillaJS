// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const contents = document.querySelector("h2");
const superEventHandler = {
  mouseover: function() {
    contents.style.color = colors[0];
    contents.innerHTML = "The mouse is here!";
  },
  mouseout: function() {
    contents.style.color = colors[1];
    contents.innerHTML = "The mouse is gone!";
  },
  contextmenu: function() {
    contents.style.color = colors[4];
    contents.innerHTML = "That was a right click!";
  },
  resize: function() {
    contents.style.color = colors[2];
    contents.innerHTML = "You just resized!";
  }
};

contents.onmouseover = superEventHandler.mouseover;
contents.onmouseout = superEventHandler.mouseout;
window.oncontextmenu = superEventHandler.contextmenu;
window.onresize = superEventHandler.resize;
