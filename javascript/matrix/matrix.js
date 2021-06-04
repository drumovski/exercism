export class Matrix {
  constructor(matrix) {
    this.rowArray = matrix.split("\n").map((rows) => {
      return rows.split(" ").map((num) => parseInt(num));
    });

    this.columnArray = [];
    for (
      let columnIndex = 0;
      columnIndex < this.rowArray[0].length;
      columnIndex++
    ) {
      this.columnArray.push(this.rowArray.map((row) => row[columnIndex]));
    }
  }

  get rows() {
    return this.rowArray;
  }

  get columns() {
    return this.columnArray;
  }
}
