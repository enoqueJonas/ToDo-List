export const addCompletedEvents = (updateTasks) => {
    const chBoxes = document.querySelectorAll('.checkboxes');
    const chBoxesArr = Array.from(chBoxes);
    if (chBoxesArr !== null) {
        chBoxesArr.forEach((ch) => {
            ch.addEventListener('change', updateTasks);
        });
    }
};