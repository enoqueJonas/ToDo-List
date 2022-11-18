const changeStatus = (i, todoList) => {
  todoList[i].completed = !todoList[i].completed;
  return todoList;
};

module.exports = changeStatus;