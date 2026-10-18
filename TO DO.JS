// ===============================
// GET HTML ELEMENTS
// ===============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
 
const allBtn = document.getElementById("allBtn");
const pendingBtn = document.getElementById("pendingBtn");
const completedBtn = document.getElementById("completedBtn");

const allCount = document.getElementById("allCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

const clearCompleted = document.getElementById("clearCompleted");

const currentDate = document.getElementById("currentDate");


// ===============================
// TASK DATA
// ===============================

let tasks = JSON.parse(localStorage.getItem("smartFlowTasks")) || [];

let currentFilter = "all";


// ===============================
// SAVE TASKS TO LOCAL STORAGE
// ===============================

function saveTasks() {
    localStorage.setItem("smartFlowTasks", JSON.stringify(tasks));
}


// ===============================
// DISPLAY TASKS
// ===============================

function displayTasks() {

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    // Filter
    if (currentFilter === "pending") {
        filteredTasks = tasks.filter(function(task) {
            return !task.completed;
        });
    }

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(function(task) {
            return task.completed;
        });
    }


    // Display every task
    filteredTasks.forEach(function(task) {

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");

        if (task.completed) {
            taskDiv.classList.add("completed");
        }


        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-check");
        checkbox.checked = task.completed;


        // Task name
        const taskName = document.createElement("span");
        taskName.classList.add("task-name");
        taskName.textContent = task.name;


        // Status
        const status = document.createElement("span");
        status.classList.add("status");

        if (task.completed) {
            status.classList.add("completed-status");
            status.textContent = "Completed";
        } else {
            status.classList.add("pending");
            status.textContent = "Pending";
        }


        // Edit button
        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");

        editButton.innerHTML = `<img src="edit.png">`;


        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");

        deleteButton.innerHTML = `<img src="image.png">`;


        // ===============================
        // CHECKBOX EVENT
        // ===============================

        checkbox.addEventListener("change", function() {

            task.completed = checkbox.checked;

            saveTasks();
            displayTasks();
            updateCounts();

        });


        // ===============================
        // EDIT EVENT
        // ===============================

        editButton.addEventListener("click", function() {

            const newTaskName = prompt("Edit your task:", task.name);

            if (newTaskName !== null && newTaskName.trim() !== "") {

                task.name = newTaskName.trim();

                saveTasks();
                displayTasks();

            }

        });


        // ===============================
        // DELETE EVENT
        // ===============================

        deleteButton.addEventListener("click", function() {

            tasks = tasks.filter(function(item) {
                return item.id !== task.id;
            });

            saveTasks();
            displayTasks();
            updateCounts();

        });


        // Add elements inside task
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(taskName);
        taskDiv.appendChild(status);
        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);

    });

}


// ===============================
// ADD NEW TASK
// ===============================

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }


    const newTask = {

        id: Date.now(),

        name: taskText,

        completed: false

    };


    tasks.push(newTask);

    saveTasks();

    taskInput.value = "";

    displayTasks();

    updateCounts();

}


// Add button
addTaskBtn.addEventListener("click", addTask);


// Enter key
taskInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        addTask();

    }

});


// ===============================
// UPDATE COUNTS
// ===============================

function updateCounts() {

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(function(task) {
        return task.completed;
    }).length;

    const pendingTasks = totalTasks - completedTasks;


    allCount.textContent = totalTasks;

    pendingCount.textContent = pendingTasks;

    completedCount.textContent = completedTasks;

}


// ===============================
// FILTER BUTTONS
// ===============================

function setFilter(filter) {

    currentFilter = filter;

    // Remove active from all
    allBtn.classList.remove("active");
    pendingBtn.classList.remove("active");
    completedBtn.classList.remove("active");


    // Add active to selected button
    if (filter === "all") {
        allBtn.classList.add("active");
    }

    if (filter === "pending") {
        pendingBtn.classList.add("active");
    }

    if (filter === "completed") {
        completedBtn.classList.add("active");
    }


    displayTasks();

}


// All
allBtn.addEventListener("click", function() {

    setFilter("all");

});


// Pending
pendingBtn.addEventListener("click", function() {

    setFilter("pending");

});


// Completed
completedBtn.addEventListener("click", function() {

    setFilter("completed");

});


// ===============================
// CLEAR COMPLETED TASKS
// ===============================

clearCompleted.addEventListener("click", function() {

    tasks = tasks.filter(function(task) {

        return !task.completed;

    });

    saveTasks();

    displayTasks();

    updateCounts();

});


// ===============================
// CURRENT DATE
// ===============================

function showDate() {

    const today = new Date();

    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric"
    };

    currentDate.textContent = today.toLocaleDateString("en-IN", options);

}


// ===============================
// INITIAL LOAD
// ===============================

showDate();

displayTasks();

updateCounts();