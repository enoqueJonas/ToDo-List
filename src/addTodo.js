import { todosArr } from "./todoArray.js";
import Todo from "./Todo.js";

const todoAddInput = document.querySelector('#todo-add-input')

export const addTodo = () => {
    let todotext = todoAddInput.value;
    let todo = new Todo(todotext, false, todosArr.length);
    todosArr.push(todo);
    console.log("todosArr")
    return todosArr;
}