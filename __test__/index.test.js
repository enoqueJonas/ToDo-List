const addTodo = require('../src/addTodo.js');
const deleteTodo = require('../src/deleteTodo.js');

describe('ToDO list operations', () => {
  it('Add new element', () => {
    const todoList = [];
    const todo = {
      description: 'Test',
      completed: false,
      index: 1,
    };
    const result = addTodo(todo, todoList);
    expect(todoList).toEqual(result);
    localStorage.setItem('todos', JSON.stringify(result));
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
    for (let i = 0; i < result.length; i += 1) {
      document.body.innerHTML += `
      <div class="works">
        <ul id="list"><li></li></ul>
      </div>
      `;
    }
    const list = document.querySelectorAll('.works');
    expect(list).toHaveLength(result.length);
  });

  it('Delete existing element', () => {
    const todoList = [
      {
        description: 'Testing1',
        completed: false,
        index: 0,
      },
      {
        description: 'Testing2',
        completed: false,
        index: 1,
      },
    ];

    const i = 0;
    const result = deleteTodo(i, todoList);
    expect(result).toEqual([{ description: 'Testing2', completed: false, index: 1 }]);
    localStorage.setItem('todos', JSON.stringify(result));
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
    document.body.innerHTML = '';
    for (let i = 0; i < result.length; i += 1) {
      document.body.innerHTML += `
      <div class="works">
        <ul id="list"><li></li></ul>
      </div>
      `;
    }

    const list = document.querySelectorAll('.works');
    expect(list).toHaveLength(result.length);
  });
});
