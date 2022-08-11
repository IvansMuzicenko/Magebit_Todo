import Todo from "./Todo.js";
import generateId from "./helpers.js";

const addColumnBtn = document.querySelector(".add-column");
// const addCellBtn = document.querySelector(".add-cell");
const columnForm = document.querySelector(".app__form__column");
const cellForm = document.querySelector(".app__form__cell");
const submitColumnForm = document.querySelector("app__form__column__submit");
const submitCellForm = document.querySelector("app__form__cell__submit");
const cancelColumnForm = document.querySelector(".app__form__column__cancel");
const cancelCellForm = document.querySelector(".app__form__cell__cancel");

const todo = new Todo();
todo.setCell({ title: "123", desc: "description" });
todo.setCell({ title: "321", desc: "description" });
todo.setCell({ title: "222", desc: "description" });
todo.setCell({ title: "333", desc: "description" });

todo.defineColumnsAmount();
todo.addColumns();
todo.addCells();

addColumnBtn.onclick = function () {
  columnForm.classList.remove("hide");
};
// addCellBtn.onclick = function() {columnForm.classList.remove("hide")};

submitColumnForm.onclick = function (event) {
  event.preventDefault();
  const columnTitle = document.querySelector(".app__form__column__title");
  todo.setColumn({ id: generateId(), title: columnTitle, order: 0 }); //TODO generate ids for columns and order
};
submitCellForm;

cancelColumnForm.onclick = function () {
  columnForm.classList.add("hide");
};
cancelCellForm.onclick = function () {
  cellForm.classList.add("hide");
};
