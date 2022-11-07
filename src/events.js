const addDeleteEvents = (removeTodo) => {
  const removeBtn = document.querySelectorAll('.remove-btn');
  const removebtnArr = Array.from(removeBtn);
  if (removebtnArr !== null) {
    removebtnArr.forEach((btn) => {
      btn.addEventListener('click', removeTodo);
    });
  }
};

const addEditEvents = (editTodo) => {
  const editBtn = document.querySelectorAll('.edit-btn');
  const editBtnArr = Array.from(editBtn);
  if (editBtnArr !== null) {
    editBtnArr.forEach((btn) => {
      btn.addEventListener('click', editTodo);
    });
  }
};

export { addEditEvents, addDeleteEvents };