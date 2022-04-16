
let h1Elements = document.getElementsByTagName("h1");
console.log(h1Elements);

let firsth1Element = h1Elements[0];

console.log(firsth1Element);


console.log(firsth1Element.innerText);


firsth1Element.innerText = "Practicing DOM Manipulation!";
