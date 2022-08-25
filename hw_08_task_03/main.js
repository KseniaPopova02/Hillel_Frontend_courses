const element = document.querySelector("#element");

function createTable(parent, cols, rows) {
  let table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let td = document.createElement("td");
      td.innerText = i * 10 + (j + 1);
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
  parent.appendChild(table);
}

createTable(element, 10, 10);
console;
