export default class Storage {
  db = {
    columns: {},
    cells: {},
  };
  constructor() {
    const temp_data = localStorage.getItem("db");
    if (temp_data != null) {
      this.db = JSON.parse(temp_data);
    } else {
      localStorage.setItem("db", this.db);
    }
  }

  setColumn(data, column = null) {
    column = column || Object.keys(this.db["columns"]).length;
    this.db["columns"][column] = data;
    localStorage.setItem("db", JSON.stringify(this.db));
  }
  setCell = function (data, cell = null) {
    cell = cell || Object.keys(this.db["cells"]).length;
    this.db["cells"][cell] = data;
    localStorage.setItem("db", JSON.stringify(this.db));
  };
}
