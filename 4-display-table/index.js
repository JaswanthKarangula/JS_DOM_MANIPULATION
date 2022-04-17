
function loadTable() {

  // Create <table> element with styles

  let table = document.createElement("table");


  table.setAttribute("border", "solid");

  table.setAttribute("width", "400px");


  // Create header row and append it to the <table> element

  let thead = document.createElement("thead");

  thead.innerHTML = `

    <tr>

        <th>Id</th>

        <th>Name</th>

    </tr>

  `;

  table.append(thead);


  // Create body element

  let tbody = document.createElement("tbody");


  // Create a table row and append it to the body

  let tRow = document.createElement("tr");


  tRow.innerHTML = `

    <td>1</td>

    <td>Rajesh</td>

  `;


  table.appendChild(tbody);

  tbody.appendChild(tRow);

  tRow.innerHTML = `

    <td>2</td>

    <td>Jaswanth</td>

  `;

  


  // Set newly created <table> element inside the div container

  document.getElementById("table-div").append(table);

}


loadTable()

