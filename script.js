const btnTodo = document.getElementById('btnTodo')
const input = document.getElementById('todo')
const todos = document.getElementById('todos')

btnTodo.addEventListener('click', () => {
    if (input.value != '') {
        let newTodo = input.value
        let newItem = document.createElement('li')
        newItem.textContent = newTodo
        todos.append(newItem)
    } else {
        alert('You must fill in the input field in order to add it to the list of to-dos.')
    }
})