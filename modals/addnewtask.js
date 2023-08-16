// // Get the modal
let modal = document.getElementById("create-new-task-modal");

// // Get the button that opens the modal
let addNewButton = document.getElementById("add-new-task-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let createsubtask = document.getElementById("create-subtask");
let subtaskField = document.getElementById("subtask-field");

let listtodo = document.getElementById("todo-list");
let listdoing = document.getElementById("doing-list");
let listdone = document.getElementById("done-list");

let inputfield = document.getElementById("input-title");
let descriptionfield = document.getElementById("description");
let createtaskbtn = document.getElementById("createtaskbtn");

// const todo_lane = document.getElementById("todo-lane");
// const doing_lane = document.getElementById("doing-lane");
// const done_lane = document.getElementById("done-lane");

let status_field = document.getElementById("status-field");

const countTaskTodos = document.getElementById("item-count-todo");
const countTaskDoing = document.getElementById("item-count-doing");
const countTaskDone = document.getElementById("item-count-done");

let title = "";
let description = "";
let countitemtodo = 0;
let countitemdoing = 0;
let countitemdone = 0;

// When the user clicks on the button, open the modal
addNewButton.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//=====================================================================================================================//
let titlevalue = "";
inputfield.addEventListener("input", function (e) {
  titlevalue = e.target.value;
});

let descriptionvalue = "";
descriptionfield.addEventListener("input", function (e) {
  descriptionvalue = e.target.value;
});
//=====================================================================================================================//
createtaskbtn.addEventListener("click", function (e) {
  e.preventDefault();
  // localStorage.clear();
  let cardDiv = document.createElement("li");
  cardDiv.classList.add("cardContainer", "task");
  cardDiv.draggable = true;
  let cardHeading = document.createElement("h5");
  cardHeading.classList.add("cardHeading");
  let cardDescription = document.createElement("p");
  cardDescription.classList.add("cardDescription");
  let titletextnode = document.createTextNode(titlevalue);
  let descriptionnode = document.createTextNode(descriptionvalue);
  // cardDiv.ondragover = drag(event);
  // cardDiv.setAttribute("ondrop", "drop(event)");
  // cardDiv.setAttribute("ondragover", "allowDrop(event");

  cardHeading.appendChild(titletextnode);
  cardDescription.appendChild(descriptionnode);

  cardDiv.appendChild(cardHeading);
  cardDiv.appendChild(cardDescription);

  let status = status_field.value;
  if (status === "todo") listtodo.appendChild(cardDiv);
  else if (status === "doing") listdoing.appendChild(cardDiv);
  else if (status === "done") listdone.appendChild(cardDiv);

  modal.style.display = "none";

  //   // let todolistobj = [
  //   //   {
  //   //     title: "",
  //   //     description: "",
  //   //     status: "",
  //   //   },
  //   // ]

  // Storing the targetlist in the target list and then append to the listcontainer of the target list
  // // const status = statusTaskField.value;
  // const targetList =
  //   status === "Todo" ? listTodos : status === "Doing" ? listDoing : listDone;
  // targetList.appendChild(listcontainer);

  if (status === "Todo") countitemtodo++;
  else if (status === "Doing") countitemdoing++;
  else if (status === "Done") countitemdone++;

  updateCounts();
  updateLocalStorage();

  titlevalue = "";
  descriptionvalue = "";
});
//=====================================================================================================================//

// Function for update the counts for localstorage
const updateCounts = () => {
  countTaskTodos.textContent = `(${countitemtodo})`;
  countTaskDoing.textContent = `(${countitemdoing})`;
  countTaskDone.textContent = `(${countitemdone})`;
};
//=====================================================================================================================//

// making an object to store the list columns todo's list with keys
const updateLocalStorage = () => {
  const savedData = {
    todo: listtodo.innerHTML,
    doing: listdoing.innerHTML,
    done: listdone.innerHTML,
    countTodo: countitemtodo,
    countDoing: countitemdoing,
    countDone: countitemdone,
  };

  localStorage.setItem("liststorage", JSON.stringify(savedData));
};
//=====================================================================================================================//
// Getting the local storage data after dom refreshing
window.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("liststorage"));

  if (savedData) {
    listtodo.innerHTML = savedData.todo || "";
    listdoing.innerHTML = savedData.doing || "";
    listdone.innerHTML = savedData.done || "";

    countitemtodo = savedData.countTodo || 0;
    countitemdoing = savedData.countDoing || 0;
    countitemdone = savedData.countDone || 0;

    updateCounts();
  }
});

// debugger
//=====================================================================================================================//
// // Adding more subtasks
createsubtask.addEventListener("click", (e) => {
  e.preventDefault();
  const subtaskContainer = document.createElement("div");
  const inputsubtaskfield = document.createElement("input");
  const deletesubtaskfield = document.createElement("button");
  deletesubtaskfield.textContent = "x";
  deletesubtaskfield.classList.add("delete-button");
  subtaskContainer.classList.add("subtaskinput");
  inputsubtaskfield.setAttribute("type", "text");
  subtaskContainer.appendChild(inputsubtaskfield);
  subtaskContainer.appendChild(deletesubtaskfield);
  subtaskField.appendChild(subtaskContainer);

  // let deletetaskbtn = document.getElementsByClassName("delete-button");

  deletesubtaskfield.addEventListener("click", function () {
    // e.preventDefault();
    inputsubtaskfield.remove();
    deletesubtaskfield.remove();
  });
});
