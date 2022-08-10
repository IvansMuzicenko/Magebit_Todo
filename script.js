import Todo from "./Todo.js";
const addColumnBtn = document.querySelector(".add-column");
// const addCellBtn = document.querySelector(".add-cell");
const columnForm = document.querySelector(".app__form__column");
const cellForm = document.querySelector(".app__form__cell");
const formColumnCancel = document.querySelector(".app__form__column__cancel");
const formCellCancel = document.querySelector(".app__form__cell__cancel");

const todo = new Todo();
todo.setItem(0, "cell1", { title: "123", desc: "description" });
todo.setItem(0, "cell2", { title: "321", desc: "description" });
todo.setItem(1, "cell1", { title: "222", desc: "description" });
todo.setItem(2, "cell1", { title: "333", desc: "description" });

todo.defineColumnsAmount();
todo.addColumns();
todo.addCells();

addColumnBtn.onclick = function () {
  columnForm.classList.remove("hide");
};
// addCellBtn.onclick = function() {columnForm.classList.remove("hide")};

formColumnCancel.onclick = function () {
  columnForm.classList.add("hide");
};
formCellCancel.onclick = function () {
  cellForm.classList.add("hide");
};
