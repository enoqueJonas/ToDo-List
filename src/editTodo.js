const editTodo = (index, description, todoList) => {
  todoList[index].description = description;
  return todoList;
};

module.exports = editTodo;