// // Get the modal
let modal = document.getElementById("create-new-task-modal");

// // Get the button that opens the modal
let addNewButton = document.getElementById("add-new-task-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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



let createtaskbtn = document.getElementById("createtaskbtn");
createtaskbtn.addEventListener("click", function (e) {});
var input = document.getElementById("input-title");
var description = document.getElementById("description");

input.addEventListener("input", function (e) {
  e.preventDefault();
  var titlevalue = e.target.value;
  console.log(titlevalue);
});

description.addEventListener("textarea", function (e) {
  e.preventDefault();
  var descriptionvalue = e.target.value;
  console.log(descriptionvalue);
});
const todo_lane = document.getElementById("todo-lane");


createtaskbtn.addEventListener("onclick", function (e) {
  e.preventDefault();
  const todo_list = document.getElementById("todo-list");

  const cardDiv = document.createElement("li");
  cardDiv.classList.add("cardContainer", "task");
  cardDiv.draggable = true;

  const cardHeading = document.createElement("h5");
  cardHeading.classList.add("cardHeading");
  cardHeading.textContent = title;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("cardDescription");
  cardDescription.textContent = "0 of 3 subtasks";

  cardDiv.appendChild(cardHeading);
  cardDiv.appendChild(cardDescription);

  todo_list.appendChild(cardDiv);

  titlevalue.value = ""; // Clear the input
  
  modal.style.display = "none";
});
