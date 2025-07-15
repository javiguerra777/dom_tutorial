console.log("Hello Path2Tech Trainees have fun with DOM!");
// Selecting an element with an ID of element
const element = document.querySelector("#element");
console.log(element);
// Using .textContent to change the text of an element with an ID of manipulate
const manipulate = document.querySelector("#manipulate");
manipulate.textContent = "I like Italian food!";
// Using .innerHTML to change the HTML of an element with an ID of manipulate-html
const manipulateHtml = document.querySelector("#manipulate-html");
manipulateHtml.innerHTML = `
<strong>Pepperoni Pizza is amazing</strong>
<br>
<em>Tour of Italy is an amazing dish</em>
<br>
<a href="https://npower.org" target="_blank">Npower's Site</a>
`;
// Changing the src of an image with JavaScript
const image = document.querySelector('img');
image.src = './assets/dog.jpg';
// Changing the style of an element with an ID of style
const styleElement = document.querySelector("#style");
styleElement.style.color = "orange";
styleElement.style.backgroundColor = "black";
styleElement.style.fontSize = "2rem";
styleElement.style.padding = "15px";
// Using .classList to remove the "ugly" class from an element
const removeClass = document.querySelector("#remove-class");
// removeClass.classList.remove("ugly");
// Using .classList to add "basic" class to an element
const addClass = document.querySelector("#add-class");
addClass.classList.add("basic");
// Using .classList to toggle "dark" class on an elementc
const colorMode = document.querySelector("#color-mode");
colorMode.classList.toggle("dark"); // add
colorMode.classList.toggle("dark"); // remove
colorMode.classList.toggle("dark"); // add