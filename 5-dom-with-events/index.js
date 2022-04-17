function getStudentTableRowAlternate(id, name) {
  let tRow = document.createElement("tr");

  let idColumnElement = document.createElement("td");
  idColumnElement.innerText = id;

  let nameColumnElement = document.createElement("td");
  nameColumnElement.innerText = name;
  tRow.appendChild(idColumnElement);
  tRow.appendChild(nameColumnElement);

  return tRow;
}

function getStudentTableRow(id, name) {
  let tRow = document.createElement("tr");

  tRow.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
  `;

  return tRow;
}

function getStyledTable() {
  let table = document.createElement("table");

  table.setAttribute("border", "solid");
  table.setAttribute("width", "400px");

  return table;
}

function getTableHeader() {
  let thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
        <th>Id</th>
        <th>Name</th>
    </tr>
  `;
  return thead;
}

function loadTableRefactored() {
  let table = getStyledTable();
  let thead = getTableHeader();
  table.append(thead);
  let tbody = document.createElement("tbody");
  for (let i = 0; i < students.length; i++) {

    let currentStudent = students[i];
    let tRow = getStudentTableRow(currentStudent.id, currentStudent.name);
    tbody.appendChild(tRow);
  
  }

  table.appendChild(tbody);

  document.getElementById("table-div").append(table);
}


let showTableButton = document.querySelector("button");

showTableButton.addEventListener("click", function () {
  let tableContainer = document.getElementById("table-div");

  if (tableContainer.innerHTML === "") {
    loadTableRefactored();
    showTableButton.textContent = "Hide table"

  } else {
    tableContainer.innerHTML = "";
    showTableButton.textContent = "Show table"
  }
});

let nameInput = document.querySelector("input");
nameInput.addEventListener("input", function (event) {
  let inputText = event.target.value;

  let nameDisplayDiv = document.querySelector("#name-display");
  nameDisplayDiv.innerText = inputText;
});


