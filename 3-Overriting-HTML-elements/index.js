let factsListDiv = document.getElementById("facts-list");
factsListDiv.innerText = "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>";


// Method 1

factsListDiv.innerHTML =

  "<p>Browser creates DOM from HTML content</p>" +

  "<p>Developers can access the DOM using the DOM APIs</p>" +

  "<p>innerHTML property refers to the HTML inside an element</p>";


// Method 2

factsListDiv.innerHTML = `

    <p>Browser creates DOM from HTML content</p>

    <p>Developers can access the DOM using the DOM APIs</p>

    <p>innerHTML property refers to the HTML inside an element</p>

    `;
