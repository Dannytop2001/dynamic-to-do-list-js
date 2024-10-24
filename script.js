// Get DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', () => {
        listItem.remove();
    });

    // Append the remove button and list item to the task list
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';

    // Save the updated task list to localStorage
    saveTasks();
}

// Function to save tasks to localStorage
function saveTasks() {
    const tasks = [];
    const taskElements = taskList.querySelectorAll('li');

    for (const taskElement of taskElements) {
        tasks.push(taskElement.textContent);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage on page load
function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);

        for (const task of tasks) {
            addTask(task);
        }
    }
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Load tasks on page load
document.addEventListener('DOMContentLoaded', loadTasks);