const editTodo = require('../src/editTodo.js');
const changeStatus = require('../src/changeStatus.js');
const clearTodo = require('../src/clearTodo.js');

describe('Updates', () => {
  it('Edit Operation', () => {
    const todoList = [
      {
        description: 'Task1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task2',
        completed: false,
        index: 2,
      },
    ];
    const result = editTodo(0, 'Edited', todoList);
    expect(result).toEqual([
      {
        description: 'Edited',
        completed: false,
        index: 1,
      },
      {
        description: 'Task2',
        completed: false,
        index: 2,
      },
    ]);
    localStorage.setItem('todos', JSON.stringify(result));
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
    document.body.innerHTML = '';
    result.forEach(() => {
      document.body.innerHTML += `
      <div class="works">
        <ul id="list"><li></li></ul>
      </div>
      `;
    });
    const list = document.querySelectorAll('.works');
    expect(list).toHaveLength(result.length);
  });

  it('Change completed status', () => {
    const todoList = [
      {
        description: 'Task1',
        completed: true,
        index: 1,
      },
      {
        description: 'Task2',
        completed: true,
        index: 2,
      },
    ];
    const result = changeStatus(0, todoList);
    expect(result).toEqual([
      {
        description: 'Task1',
        completed: false,
        index: 1,
      },
      {
        description: 'Task2',
        completed: true,
        index: 2,
      },
    ]);
    localStorage.setItem('todos', JSON.stringify(result));
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
    document.body.innerHTML = '';
    result.forEach(() => {
      document.body.innerHTML += `
      <div class="works">
        <ul id="list"><li></li></ul>
      </div>
      `;
    });

    const list = document.querySelectorAll('.works');
    expect(list).toHaveLength(result.length);
  });
  it('Clear completd ToDos', () => {
    const todoList = [
      {
        description: 'Task1',
        completed: true,
        index: 1,
      },
      {
        description: 'Task2',
        completed: false,
        index: 2,
      },
    ];
    const result = clearTodo(todoList);
    expect(result).toEqual([
      {
        description: 'Task2',
        completed: false,
        index: 1,
      },
    ]);
    localStorage.setItem('todos', JSON.stringify(result));
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
    document.body.innerHTML = '';
    result.forEach(() => {
      document.body.innerHTML += `
      <div class="works">
        <ul id="list"><li></li></ul>
      </div>
      `;
    });
    const list = document.querySelectorAll('.works');
    expect(list).toHaveLength(result.length);
  });
});