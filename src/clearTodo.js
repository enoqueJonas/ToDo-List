const clearTodo = (todoList) => {
  const newList = todoList.filter((todo) => todo.completed === false);
  newList.forEach((element, index) => {
    element.index = index + 1;
  });
  return newList;
};

module.exports = clearTodo;