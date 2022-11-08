const addCompletedEvents = (updateTasks) => {
  const chBoxes = document.querySelectorAll('.checkboxes');
  const chBoxesArr = Array.from(chBoxes);
  if (chBoxesArr !== null) {
    chBoxesArr.forEach((ch) => {
      ch.addEventListener('change', updateTasks);
    });
  }
};

const addBtnClearEvent = (clearCompleted) => {
  const btnClear = document.querySelector('#btn-clear');
  btnClear.addEventListener('click', clearCompleted);
};

export { addBtnClearEvent, addCompletedEvents };