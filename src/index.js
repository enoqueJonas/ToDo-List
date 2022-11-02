import './index.css';
import Icon from './more.png';
import Refresh from './refresh.png';

const todoListUl = document.querySelector('.todo-list');
const todosArr = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Read a book',
    completed: false,
    index: 1,
  },
  {
    description: 'Make my bed',
    completed: false,
    index: 2,
  },
];

const populateTodo = () => {
  let todoItems = ` <li class="todo-item todo-title">
            <h2> Today's To Do</h2>
            <img src=${Refresh} alt="refresh" class="todo-hold">
    </li>
    <li class="todo-item todo-add">
        <input type="text" placeholder="Add to your list...">
    </li>`;
  todosArr.forEach((todo) => {
    todoItems = `${todoItems} <li class="todo-item todos">
        <div class="todo-wrap">
            <input type="checkbox">
            <p class="todo-text"> ${todo.description}</p>
        </div>
        <img src="${Icon}" alt="move" class="todo-hold">
        </li>`;
  });
  todoItems = `${todoItems} <li class="todo-item todo-button">
    <button>Clear all completed</button>
</li>`;
  todoListUl.innerHTML = todoItems;
};

window.addEventListener('load', populateTodo());