/*


// init the HTML tag 
// ----------------------------------------------------- //
const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.innerText = "Tasks";
body.appendChild(h1);

const form = document.createElement("form");
body.appendChild(form);
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add task";
form.appendChild(input);



const pendingContainer = document.createElement("div");
pendingContainer.className = "pending";
body.appendChild(pendingContainer);

const pending = document.createElement("h3");
pending.innerText = "Pending";
pendingContainer.appendChild(pending);

const penUl = document.createElement("ul");
penUl.className = "pendingList";
pendingContainer.appendChild(penUl);



const finishedContainer = document.createElement("div");
finishedContainer.className = "finished";
body.appendChild(finishedContainer);

const finished = document.createElement("h3");
finished.innerText = "Finished";
finishedContainer.appendChild(finished);

const finUl = document.createElement("ul");
finUl.className = "finishedList";
finishedContainer.appendChild(finUl);
// ----------------------------------------------------- //

let penAry = [];

function savePenAry(){
    localStorage.setItem("PENDING",JSON.stringify(penAry));
}

function handleClick(e){
    const updatedPenAry = penAry.filter(function(asdf) {
        return asdf.id !== parseInt(e.target.parentNode.id);
      });
      penAry = updatedPenAry;
      penUl.removeChild(e.target.parentNode);
      savePenAry();
}

function paintPen(text){
    const li = document.createElement("li");
    li.id = penAry.length+1;
    const span = document.createElement("span");
    span.innerText = text;
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.addEventListener("click", handleClick);
    const creBtn = document.createElement("button");
    creBtn.innerText = "V";
    
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(creBtn);

    penUl.appendChild(li);
}


function handleSubmit(e){
    e.preventDefault();

    penAry.push({"id": penAry.length+1, "text":input.value});
    savePenAry();
    paintPen(input.value);
    input.value = "";
}
form.addEventListener("submit",handleSubmit);



function init(){
    let dd = localStorage.getItem("PENDING");
    if (dd=== null){
        console.log("It's empty!!");
    }
    else{
        let ddd = JSON.parse(dd);
        penAry = ddd;
        penAry.forEach(function(asdf) {
            paintPen(asdf.text);
        });
    }
}
init();

*/

const pendingList = document.getElementById("js-pending"),
  finishedList = document.getElementById("js-finished"),
  form = document.getElementById("js-form"),
  input = form.querySelector("input");

const PENDING = "PENDING";
const FINISHED = "FINISHED";

let pendingTasks, finishedTasks;

function getTaskObject(text) {
  return {
    id: String(Date.now()),
    text
  };
}

function savePendingTask(task) {
  pendingTasks.push(task);
}

function findInFinished(taskId) {
  return finishedTasks.find(function(task) {
    return task.id === taskId;
  });
}

function findInPending(taskId) {
  return pendingTasks.find(function(task) {
    return task.id === taskId;
  });
}

function removeFromPending(taskId) {
  pendingTasks = pendingTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function removeFromFinished(taskId) {
  finishedTasks = finishedTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function addToFinished(task) {
  finishedTasks.push(task);
}

function addToPending(task) {
  pendingTasks.push(task);
}

function deleteTask(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  removeFromFinished(li.id);
  removeFromPending(li.id);
  saveState();
}

function handleFinishClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInPending(li.id);
  removeFromPending(li.id);
  addToFinished(task);
  paintFinishedTask(task);
  saveState();
}

function handleBackClick(e) {
  const li = e.target.parentNode;
  li.parentNode.removeChild(li);
  const task = findInFinished(li.id);
  removeFromFinished(li.id);
  addToPending(task);
  paintPendingTask(task);
  saveState();
}

function buildGenericLi(task) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  span.innerText = task.text;
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTask);
  li.append(span, deleteBtn);
  li.id = task.id;
  return li;
}

function paintPendingTask(task) {
  const genericLi = buildGenericLi(task);
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✅";
  completeBtn.addEventListener("click", handleFinishClick);
  genericLi.append(completeBtn);
  pendingList.append(genericLi);
}

function paintFinishedTask(task) {
  const genericLi = buildGenericLi(task);
  const backBtn = document.createElement("button");
  backBtn.innerText = "⏪";
  backBtn.addEventListener("click", handleBackClick);
  genericLi.append(backBtn);
  finishedList.append(genericLi);
}

function saveState() {
  localStorage.setItem(PENDING, JSON.stringify(pendingTasks));
  localStorage.setItem(FINISHED, JSON.stringify(finishedTasks));
}

function loadState() {
  pendingTasks = JSON.parse(localStorage.getItem(PENDING)) || [];
  finishedTasks = JSON.parse(localStorage.getItem(FINISHED)) || [];
}

function restoreState() {
  pendingTasks.forEach(function(task) {
    paintPendingTask(task);
  });
  finishedTasks.forEach(function(task) {
    paintFinishedTask(task);
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const taskObj = getTaskObject(input.value);
  input.value = "";
  paintPendingTask(taskObj);
  savePendingTask(taskObj);
  saveState();
}

function init() {
  form.addEventListener("submit", handleFormSubmit);
  loadState();
  restoreState();
}
init();
