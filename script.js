const btnTodo = document.getElementById('btnTodo')
const input = document.getElementById('todo')
const todos = document.getElementById('todos')
const items = document.getElementsByClassName('newTodo')

// Removes the element that is clicked on
const remove = (el) => {
    let element = el
    element.remove()
    btnTodo.disabled = false
}

// Highlights the item when the cursor is on it, adds the cross, and sets the onclick attribute to the item
const onItem = (event) => {          
    let cross = document.createElement('div')
    cross.className = 'deleteTodo'
    cross.textContent = 'x'
    event.target.append(cross)

    cross.addEventListener('mouseenter', () => {
        cross.title = 'Delete the todo'
        cross.parentNode.setAttribute('onclick', 'remove(this)')
    })

    cross.addEventListener('mouseleave', () => {
        cross.parentNode.removeAttribute('onclick')
    })
    
}

// Removes the cross when the cursor leaves the item
const outItem = (event) => {
    let removeCross = document.querySelector('.deleteTodo')
    removeCross.remove()
}

// Adds a todo item to the list
btnTodo.addEventListener('click', () => {
    if (input.value != '') {
        let newTodo = input.value
        input.value = ''
        let newItem = document.createElement('div')
        newItem.textContent = newTodo
        let todoItem = document.createElement('div')
        todoItem.className = 'newTodo'
        todoItem.append(newItem)
        todos.append(todoItem)

        for (let item of items) {
            item.addEventListener('mouseenter', onItem)
            item.addEventListener('mouseleave', outItem)
        }

        if (items.length === 10) {
            btnTodo.disabled = true
        } 
    } else {
        alert('You must fill in the input field in order to add it to the list of to-dos.')
    }
})


