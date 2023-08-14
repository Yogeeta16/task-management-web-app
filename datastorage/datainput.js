document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("taskForm");
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent form submission

        const title = form.querySelector('input[name="title"]').value;
        const description = form.querySelector('textarea').value;
        const subtasks = Array.from(form.querySelectorAll('input[type="text"]'))
                             .map(input => input.value);
        const status = form.querySelector('select').value;

        const updatedTask = {
            title: title,
            description: description,
            subtasks: subtasks,
            status: status
        };

        try {
            // Fetch the existing JSON data from the server
            const response = await fetch("data2.json");
            const existingData = await response.json();

            // Update the existing data with the new values
            existingData.tasks.push(updatedTask);

            // Send the updated data back to the server
            const updateResponse = await fetch("path/to/update/endpoint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(existingData)
            });

            console.log("Data updated successfully!");
        } catch (error) {
            console.error("Error updating data:", error);
        }
    });
});