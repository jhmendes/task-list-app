//Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load All Event Listeners
loadEventListeners();

//Load All event listeners

function loadEventListeners() {
  //Add Task Event
  form.addEventListener('submit', addTask);

  //Remove Task event
  taskList.addEventListener('click', removeTask);

  //Clear all tasks event
  clearBtn.addEventListener('click', removeAllTasks);

  //Filter tasks event

  filter.addEventListener('keyup', filterTasks);
}

//Add Task

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a Task');
  }

  //Create Li element
  const li = document.createElement('li');

  //Add class to Li
  li.className = 'collection-item';

  //Create Text node and append it to the li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement('a');

  //Add class to link
  link.className = 'delete-item secondary-content';

  //Add icon 
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append link to the li 
  li.appendChild(link);

  //Append Li to the UL 
  taskList.appendChild(li);
  
  // console.log(li);

  //Clear the input
  taskInput.value = '';
  e.preventDefault();
}


//Remove Task

function removeTask(e) {

  if(e.target.parentElement.classList.contains('delete-item') ) {
    if(confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();  
    }
    // console.log(e.target);
  }
}

//Remove all tasks

function removeAllTasks() {

  //innerHTML
  // if(confirm('Are you sure you want to delete all tasks?')) {
    // taskList.innerHTML = '';
  // }

  //Faster with while loop/remove child
  // https://jsperf.com/innerhtml-vs-removechild/37
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach( function(task){
      const item = task.firstChild.textContent;
      console.log(item);
      if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
}