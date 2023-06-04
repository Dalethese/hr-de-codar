const localStorageTasks = JSON.parse(
  localStorage.getItem('tasks')
)

const tasks = localStorage
  .getItem('tasks') !== null ? localStorageTasks : []

// declarations

const addTaskForm = document.querySelector('#todo-form')
const taskNameInput = document.querySelector('#todo-input')
const todoListInDOM = document.querySelector('#todo-list')

// Functions
const generateID = () => Math.round(Math.random() * 1000)

const addTaskInTheDOM = ({name}) => {
  const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = name
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
    todo.appendChild(editBtn)

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove-todo')
    removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    todo.appendChild(removeBtn)
    
    todoListInDOM.appendChild(todo)

    taskNameInput.value = ''
    taskNameInput.focus()
}

const updateLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

const saveTask = () => {
  const taskName = taskNameInput.value.trim()

  if (!taskName) {
    return
  }

  addToTasksArray(taskName)
  init()
  updateLocalStorage()
}

const addToTasksArray = name => {
  tasks.push({
    id: generateID(),
    name,
    situation: 'todo'
  })
}

const init = () => {
  todoListInDOM.innerHTML = ''
  tasks.forEach(addTaskInTheDOM)
}

init()

// events

addTaskForm.addEventListener('submit', ev => {
  ev.preventDefault()

  saveTask()
})