const addTodo = require('../src/addTodo.js')

describe('ToDO list operations', () => {
    it('Add operation', () => {
        const todoList = [];
        const todo = {
            description: 'Test',
            completed: false,
            index: 1,
        }

        const result = addTodo(todo, todoList);
        expect(todoList).toEqual(result);
        localStorage.setItem('todos', JSON.stringify(result));
        expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
        for (let i = 0; i < result.length; i++) {
            document.body.innerHTML += '<div class="works">'
                + '  <ul id="list"><li></li></ul>'
                + '</div>';
        };
        const list = document.querySelectorAll('.works');
        expect(list).toHaveLength(result.length);
    })
    
})