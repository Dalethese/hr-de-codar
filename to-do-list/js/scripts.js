// seleção de elementos
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#search-input')
const eraseBtn = document.querySelector('#erase-button')

const filterSelect = document.querySelector('#filter-select')

let oldInputValue;

//funções
const saveTodo = text => {
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text
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
    
    todoList.appendChild(todo)

    todoInput.value = ''
    todoInput.focus()
}

const toggleForms = () => {
    editForm.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    todoList.classList.toggle('hide')
}

const updateTodo = text => {
    
    const todos = document.querySelectorAll('.todo')

    todos.forEach(todo => {
        
        let todoTitle = todo.querySelector('h3')
        
        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
}

const search = () => {
    let searchInputValue = searchInput.value
    const todos = document.querySelectorAll('.todo')

    todos.forEach(todo => {

        if (searchInputValue != '') {
            let todoTitle = todo.querySelector('h3')
            let todoTitleText = todoTitle.textContent.toLowerCase()
            
            if(!todoTitleText.includes(searchInputValue)) {
                todo.style.display = 'none'
            } else {
                todo.style.display = 'flex'
            }
        } else {
            todo.style.display = 'flex'
        }
    })
}

const filter = () => {
    const todos = document.querySelectorAll('.todo')
    
    if (filterSelect.value === 'all') {
        todos.forEach(todo => todo.style.display = 'flex')
    }
    if (filterSelect.value === 'done') {
        todos.forEach(todo => {
            if (!todo.classList.contains('done')) { 
                todo.style.display = 'none'
            } else {
                todo.style.display = 'flex'
            }
        })
    }
    if (filterSelect.value === 'todo') {
        todos.forEach(todo => {
            if (todo.classList.contains('done')) {
                todo.style.display = 'none'
            } else {
                todo.style.display = 'flex'
            }
        })
    }
}



//eventos
todoForm.addEventListener('submit',  e => {
    e.preventDefault()

    const inputValue = todoInput.value 

    if(inputValue) {
        saveTodo(inputValue)
    }
})

document.addEventListener('click', e => {

    const targetEl = e.target
    const parentEl = targetEl.closest('div')
    let todoTitle;

    if(parentEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerText
    }

    if(targetEl.classList.contains('finish-todo')) {
        parentEl.classList.toggle('done')
    }

    if(targetEl.classList.contains('remove-todo')) {
        parentEl.remove()
    }

    if(targetEl.classList.contains('edit-todo')) {
        toggleForms()

        editInput.value = todoTitle
        oldInputValue = todoTitle
    }
})

cancelEditBtn.addEventListener('click', e => {
    e.preventDefault()

    toggleForms()
})

editForm.addEventListener('submit', e => {
    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {
        updateTodo(editInputValue)
        console.log('chamou a função');
    }

    toggleForms()
})

searchInput.addEventListener('input', search)

searchForm.addEventListener('submit', e => e.preventDefault())

eraseBtn.addEventListener('click', () => {
    searchInput.value = ''
    searchInput.focus()

    const todos = document.querySelectorAll('.todo')

    todos.forEach(todo => {
        todo.style.display = 'flex'
    })
})

filterSelect.addEventListener('change', filter)