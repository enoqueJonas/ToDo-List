import './index.css';
import Icon from './more.png';
import Refresh from './refresh.png';
import Edit from './edit.png';
import Remove from './remove.png';
import Add from './plus.png';
import { todosArr } from './todoArray.js';
import Todo from "./Todo.js";

const todoAddInput = document.querySelector('#todo-add-input')
const refresImg = document.querySelector('#refresh');
const btnClear = document.querySelector('#btn-clear');
const todoListUl = document.querySelector('.todo-list');
const btnAddTodo = document.querySelector('#btn-add-todo')

const populateTodo = () => {
    let todoItems = '';
    refresImg.src = Refresh;
    btnAddTodo.src = Add;
    todosArr.forEach((todo, index) => {
        todoItems = `${todoItems} <li class="todo-item todos">
        <div class="todo-wrap">
            <input type="checkbox">
            <input type="text" class="todo-text" value="${todo.description}">
        </div>
        <img src="${Edit}" alt="edit" class="todo-hold">
        <img src="${Remove}" id="${index+1}" alt="edit" class="remove-btn todo-hold">
        <img src="${Icon}" alt="move" class="todo-hold">
        </li>`;
    });
    todoItems = `${todoItems} <li class="todo-item todo-button">
    <button id="btn-clear">Clear all completed</button>
</li>`;
    todoListUl.innerHTML = todoItems;
    addEvents();
};

const addEvents = () => {
    const removeBtn = document.querySelectorAll('.remove-btn');
    const removebtnArr = Array.from(removeBtn);
    removebtnArr.forEach((btn) => {
        btn.addEventListener('click', removeTodo)
    })
}

const addTodo = () => {
    let todotext = todoAddInput.value;
    let todo = new Todo(todotext, false, todosArr.length);
    todosArr.push(todo);
    populateTodo();
    return todosArr;
}

const removeTodo = (event) => {
    const btnId = Number(event.target.id);
    todosArr.splice(btnId-1, 1);
    populateTodo();
}

window.onload = populateTodo();
btnAddTodo.addEventListener('click', addTodo);
