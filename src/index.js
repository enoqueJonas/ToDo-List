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
            <input id="todo-${index+1}" type="text" class="todo-text" value="${todo.description}">
        </div>
        <img src="${Edit}" id="edit-${index+1}" alt="edit" class="edit-btn todo-hold">
        <img src="${Remove}" id="${index+1}" alt="edit" class="remove-btn todo-hold">
        <img src="${Icon}" alt="move" class="todo-hold">
        </li>`;
    });
    todoItems = `${todoItems} <li class="todo-item todo-button">
    <button id="btn-clear">Clear all completed</button>
</li>`;
    todoListUl.innerHTML = todoItems;
    addDeleteEvents();
    addEditEvents();
};

const addDeleteEvents = () => {
    const removeBtn = document.querySelectorAll('.remove-btn');
    const removebtnArr = Array.from(removeBtn);
    removebtnArr.forEach((btn) => {
        btn.addEventListener('click', removeTodo)
    })
}

const addEditEvents = () => {
    const editBtn = document.querySelectorAll('.edit-btn');
    const editBtnArr = Array.from(editBtn);
    editBtnArr.forEach((btn) => {
        btn.addEventListener('click', editTodo)
    })
}

const addTodo = () => {
    let todotext = todoAddInput.value;
    let todo = new Todo(todotext, false, todosArr.length);
    todosArr.push(todo);
    todoAddInput.value = '';
    populateTodo();
}

const removeTodo = (event) => {
    const btnId = Number(event.target.id);
    todosArr.splice(btnId-1, 1);
    populateTodo();
}

const editTodo = (event) => {
    const todoTextInput = document.querySelectorAll('.todo-text')
    const eventItemId = event.target.id;
    let newDescription = '';
    const matches = eventItemId.replace( /^\D+/g, '');
    const editId = Number(matches);
    const todoTextInputArr = Array.from(todoTextInput);
    todoTextInputArr.forEach((input) => {
        let inputId = input.id;
        let extractId = Number(inputId.replace( /^\D+/g, ''));
        if(editId === extractId){
            newDescription = input.value;
        }
    })
    todosArr.forEach((todo, index) => {
        if(editId-1 === index){
            todo.description = newDescription;
        }
    })
    populateTodo();
}

window.onload = populateTodo();
btnAddTodo.addEventListener('click', addTodo);
