const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
      <span>${todo}</span>
      <button onclick="deleteTodo(${i})">Delete</button>
    `;
    todoList.appendChild(li);
  }
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    todos.push(todoText);
    renderTodos();
    todoInput.value = '';
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addTodo();
});
