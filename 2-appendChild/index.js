const pElement = document.createElement("p");
pElement.innerText = "innerText property refers to the text inside an element";

const divElement = document.getElementById("facts-list");

divElement.appendChild(pElement);


const pElement1 = document.createElement("p");

pElement1.innerText = "append() or appendChild() methods can add a new child element";

divElement.appendChild(pElement1);
