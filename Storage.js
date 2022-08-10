export default class Storage {
  db = {};
  constructor() {
    const temp_data = localStorage.getItem("db");
    if (temp_data != null) {
      this.db = JSON.parse(temp_data);
    }
  }

  setItem = function (column, cell, data) {
    this.db[column][cell] = data;
    localStorage.setItem("db", JSON.stringify(this.db));
  };
}
