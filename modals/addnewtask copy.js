// // // Get the modal
// let modal = document.getElementById("create-new-task-modal");

// // // Get the button that opens the modal
// let addNewButton = document.getElementById("add-new-task-button");

// let createtaskbtn = document.getElementById("createtaskbtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// addNewButton.onclick = function () {
//   modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
// createtaskbtn.addEventListener("click",function(e){
  
// })

// createtaskbtn.onclick = function (e) {

//   e.preventDefault();

//   const titleInput = document.getElementById("titleInput");
//   const cardContainer = document.getElementById("cardContainer");

//   const title = titleInput.value;

//   if (title.trim() === "") {
//     alert("Please enter a title for the card.");
//     return;
//   }

//   const cardDiv = document.createElement("div");
//   cardDiv.classList.add("cardContainer", "task");
//   cardDiv.draggable = true;

//   const cardHeading = document.createElement("div");
//   cardHeading.classList.add("cardHeading");
//   cardHeading.textContent = title;

//   const cardDescription = document.createElement("div");
//   cardDescription.classList.add("cardDescription"); 
//   cardDescription.textContent = "0 of 3 subtasks";

//   cardDiv.appendChild(cardHeading);
//   cardDiv.appendChild(cardDescription);

//   cardContainer.appendChild(cardDiv);

//   titleInput.value = ""; // Clear the input
//   modal.style.display = "none";
// };

/************************************************************************************************* */
// // let addNewButton = document.getElementById("add-new-button");
// // let modal = document.getElementById("modal-form");
// // let listtodo = document.getElementById("todo-lane");
// // let inputtitle = document.getElementById("input-title");

// // addNewButton.addEventListener("click", () => {
// //   if (modal.classList.contains("modal-hide")) {
// //     modal.classList.remove("modal-hide");
// //     addNewButton.textContent = "Hide Pop Box";
// //   } else {
// //     modal.classList.add("modal-hide");
// //     addNewButton.textContent = "Show Content";
// //   }
// // });

// // inputtitle.addEventListener("keyup", function (e) {
// //   let targetinput = e.target.value;
// //   let listitem = document.createElement("div");
// //   let textnode = document.createTextNode(targetinput);
// //   listitem.appendChild(textnode);
// //   listtodo.appendChild(listitem);
// // });
/****************************************************************************** */

// const form = document.getElementById("newTaskForm");
// // const input = document.getElementById("input-title");
// const todoLane = document.getElementById("todo-lane");
// const doingLane = document.getElementById("doing-lane");
// const doneLane = document.getElementById("done-lane");
// const titleInput = document.getElementById("input-title");
// const descriptionInput = document.querySelector(".newTaskForm textarea");

// const statusSelect = document.querySelector(".newTaskForm select");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const value = titleInput.value;

//   if (!value) return;
//   const cardDiv = document.createElement("div");
//   cardDiv.classList.add("cardContainer", "task");
//   cardDiv.draggable = true;

//   const cardHeading = document.createElement("div");
//   cardHeading.classList.add("cardHeading");
//   cardHeading.textContent = title;

//   const cardDescription = document.createElement("div");
//   cardDescription.classList.add("cardDescription");
//   cardDescription.textContent = `${subtasks.length} of 3 subtasks`;

//   cardDiv.addEventListener("dragstart", () => {
//     cardDiv.classList.add("is-dragging");
//   });

//   cardDiv.addEventListener("dragend", () => {
//     cardDiv.classList.remove("is-dragging");
//   });

//   // todoLane.appendChild(cardDiv);
//   cardDiv.appendChild(cardHeading);
//   cardDiv.appendChild(cardDescription);

//   titleInput.value = "";
// });

/*************************************************************************************************** */

// addNewButton.addEventListener("click", () => {
//   if (modal.classList.contains("modal-hide")) {
//     modal.classList.remove("modal-hide");
//     addNewButton.textContent = "Hide Pop Box";
//   } else {
//     modal.classList.add("modal-hide");
//     addNewButton.textContent = "Show Content";
//   }
// });
