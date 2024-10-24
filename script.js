// Get references to DOM elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-btn');
  removeButton.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  listItem.appendChild(removeButton);
  taskList.appendChild(listItem);

  taskInput.value = '';
}

// Add event listener to the Add Task button
addButton.addEventListener('click', addTask);

// Add event listener to the input field for Enter key press
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});