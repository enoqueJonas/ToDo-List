import './index.css';
import Icon from './more.png';
import Refresh from './refresh.png';
import Edit from './edit.png';
import Remove from './remove.png';
import Add from './plus.png';
import Todo from './Todo.js';

const tasksArr = JSON.parse(localStorage.getItem('todos'));
const todoAddInput = document.querySelector('#todo-add-input');
const refresImg = document.querySelector('#refresh');
const todoListUl = document.querySelector('.todo-list');
const btnAddTodo = document.querySelector('#btn-add-todo');

const populateTodo = () => {
  let todoItems = '';
  refresImg.src = Refresh;
  btnAddTodo.src = Add;
  const storageTasks = JSON.parse(localStorage.getItem('todos'));
  if (storageTasks !== null) {
    storageTasks.forEach((todo, index) => {
      todoItems = `${todoItems} <li class="todo-item todos">
          <div class="todo-wrap">
              <input type="checkbox">
              <input id="todo-${index + 1}" type="text" class="todo-text" value="${todo.description}">
          </div>
          <img src="${Edit}" id="edit-${index + 1}" alt="edit" class="edit-btn todo-hold">
          <img src="${Remove}" id="${index + 1}" alt="edit" class="remove-btn todo-hold">
          <img src="${Icon}" alt="move" class="todo-hold">
          </li>`;
    });
  }
  todoItems = `${todoItems} <li class="todo-item todo-button">
      <button id="btn-clear">Clear all completed</button>
  </li>`;
  todoListUl.innerHTML = todoItems;
};

const removeTodo = (event) => {
  const btnId = Number(event.target.id);
  tasksArr.splice(btnId - 1, 1);
  tasksArr.forEach((todo, index) => {
    todo.index = index + 1;
  });
  localStorage.setItem('todos', JSON.stringify(tasksArr));
  populateTodo();
};

const editTodo = (event) => {
  const todoTextInput = document.querySelectorAll('.todo-text');
  const eventItemId = event.target.id;
  let newDescription = '';
  const matches = eventItemId.replace(/^\D+/g, '');
  const editId = Number(matches);
  const todoTextInputArr = Array.from(todoTextInput);
  todoTextInputArr.forEach((input) => {
    const inputId = input.id;
    const extractId = Number(inputId.replace(/^\D+/g, ''));
    if (editId === extractId) {
      newDescription = input.value;
    }
  });
  tasksArr.forEach((todo, index) => {
    if (editId - 1 === index) {
      todo.description = newDescription;
    }
  });
  localStorage.setItem('todos', JSON.stringify(tasksArr));
  populateTodo();
};

const addDeleteEvents = () => {
  const removeBtn = document.querySelectorAll('.remove-btn');
  const removebtnArr = Array.from(removeBtn);
  removebtnArr.forEach((btn) => {
    btn.addEventListener('click', removeTodo);
  });
};

const addEditEvents = () => {
  const editBtn = document.querySelectorAll('.edit-btn');
  const editBtnArr = Array.from(editBtn);
  editBtnArr.forEach((btn) => {
    btn.addEventListener('click', editTodo);
  });
};

const addTodo = () => {
  const todotext = todoAddInput.value;
  const todo = new Todo(todotext, false, tasksArr.length + 1);
  tasksArr.push(todo);
  todoAddInput.value = '';
  localStorage.setItem('todos', JSON.stringify(tasksArr));
  populateTodo();
};

window.onload = populateTodo();
window.onload = addDeleteEvents();
window.onload = addEditEvents();
btnAddTodo.addEventListener('click', addTodo);
