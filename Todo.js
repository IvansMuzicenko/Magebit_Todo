import Storage from "./Storage.js";

export default class Todo extends Storage {
  addColumns() {
    const board = document.querySelector(".app__columns");
    //creating all columns

    const template = document.querySelector(".app__column--template");
    for (let column in Object.keys(this.db)) {
      let newColumn = document.createElement("div");

      newColumn.innerHTML = template.innerHTML;
      newColumn.classList.add("app__column");
      newColumn.dataset.column = column;
      newColumn.querySelector(".app__column__title").textContent = "123";
      board.append(newColumn);
    }
    template.remove();
  }

  defineColumnsAmount() {
    const board = document.querySelector(".app__columns");

    board.classList.add("app__columns");
    board.classList.add("app__columns--" + Object.keys(this.db).length);
  }

  addCells() {
    const template = document.querySelector(".app__cell--template");
    const columns = document.querySelectorAll(".app__column");

    for (let columnIndex in this.db) {
      const column = this.db[columnIndex];
      const exactColumn = columns[columnIndex];

      for (let cellIndex in column) {
        const cell = column[cellIndex];
        let newCell = document.createElement("div");

        newCell.innerHTML = template.innerHTML;
        newCell.classList.add("app__cell");
        newCell.dataset.cell = cellIndex;

        newCell.querySelector(".app__cell__title").textContent = cell.title;
        newCell.querySelector(".app__cell__desc").textContent = cell.desc;

        exactColumn.append(newCell);
      }
    }

    template.remove();
  }
}
