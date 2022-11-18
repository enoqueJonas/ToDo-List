function deleteTodo(i, todos) {
  todos.splice(i, 1);
  return todos;
}

module.exports = deleteTodo;