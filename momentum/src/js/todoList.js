const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-list');

let todos = [];

const TODOS_KEY = 'todos';

function paintTodo(val) {
    if (!val) return;
    todos.push(val);

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');

    span.textContent = val;
    li.appendChild(span);

    button.textContent = 'delete';
    button.addEventListener('click', deleteTodo);

    li.appendChild(button);

    todoList.appendChild(li);
}

function deleteTodo(e) {
    const target = e.target.parentElement;
    const nodes = [...target.parentElement.children];
    const targetIndex = nodes.indexOf(target);

    todos = todos.filter((todo, i) => i !== targetIndex);

    e.target.parentElement.remove();

    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

export default function TodoList() {
    const prevTodos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
    if (prevTodos) {
        prevTodos.forEach(item => {
            paintTodo(item);
        });
    }

    todoForm.addEventListener('submit', e => {
        e.preventDefault();
        const val = todoInput.value;
        todoInput.value = '';

        paintTodo(val);
        saveTodos();
    });
}
