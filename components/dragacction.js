// const draggables = document.querySelectorAll(".task");
// const droppables = document.querySelectorAll(".swim-lane");

// draggables.forEach((task) => {
//   task.addEventListener("dragstart", () => {
//     task.classList.add("is-dragging");
//   });
//   task.addEventListener("dragend", () => {
//     task.classList.remove("is-dragging");
//   });
// });

// droppables.forEach((zone) => {
//   zone.addEventListener("dragover", (e) => {
//     e.preventDefault();

//     const bottomTask = insertAboveTask(zone, e.clientY);
//     const curTask = document.querySelector(".is-dragging");

//     if (!bottomTask) {
//       zone.appendChild(curTask);
//     } else {
//       zone.insertBefore(curTask, bottomTask);
//     }
//   });
// });

// const insertAboveTask = (zone, mouseY) => {
//   const els = zone.querySelectorAll(".task:not(.is-dragging)");

//   let closestTask = null;
//   let closestOffset = Number.NEGATIVE_INFINITY;

//   els.forEach((task) => {
//     const { top } = task.getBoundingClientRect();

//     const offset = mouseY - top;

//     if (offset < 0 && offset > closestOffset) {
//       closestOffset = offset;
//       closestTask = task;
//     }
//   });

//   return closestTask;
// };


document.querySelectorAll(".list").forEach((listcontainer) => {
  listcontainer.addEventListener("dragstart", dragstart);
  listcontainer.addEventListener("dragend", dragend);
  listcontainer.addEventListener("dragover", dragover);
  listcontainer.addEventListener("dragenter", dragenter);
  listcontainer.addEventListener("dragleave", dragleave);
  listcontainer.addEventListener("drop", drop);
});

function dragstart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
  e.target.classList.add("dragging");
  updateCounts();
  updateLocalStorage();
}

function dragend(e) {
  e.target.classList.remove("dragging");
  updateCounts();
  updateLocalStorage();
}

function dragover(e) {
  e.preventDefault();
  console.log("dragover");
}

function dragenter() {
  console.log("dragenter");
}

function dragleave() {
  console.log("dragleave");
}
function drop(e) {
  e.preventDefault();
  const draggedItem = document.querySelector(".dragging");
  if (draggedItem) {
    e.target.appendChild(draggedItem);
    draggedItem.classList.remove("dragging");

    const status = statusTaskField.value;
    if (status === "Todo") countitemtodo--;
    else if (status === "Doing") countitemdoing--;
    else if (status === "Done") countitemdone--;

    const newStatus = e.target.getAttribute("data-status");
    if (newStatus === "Todo") countitemtodo++;
    else if (newStatus === "Doing") countitemdoing++;
    else if (newStatus === "Done") countitemdone++;

    updateCounts();
    updateLocalStorage();
  }
}
