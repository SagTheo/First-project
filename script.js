const btnTodo = document.getElementById('btnTodo')
const input = document.getElementById('todo')
const todos = document.getElementById('todos')

btnTodo.addEventListener('click', () => {
    if (input.value != '') {
        let newTodo = input.value
        let newItem = document.createElement('p')
        newItem.textContent = newTodo
        let deleteItem = document.createElement('p')
        deleteItem.className = 'deleteTodo'
        deleteItem.textContent = 'x'
        let todoItem = document.createElement('div')
        todoItem.className = 'newTodo'
        todoItem.append(newItem)
        todoItem.append(deleteItem)
        todos.append(todoItem)
    } else {
        alert('You must fill in the input field in order to add it to the list of to-dos.')
    }
})