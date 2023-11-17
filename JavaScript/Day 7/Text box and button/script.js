// This is a javascript file that creates a div with the text of the text box
// when you click on the button

// Get the elements from the HTML document
let textBox = document.getElementById("text-box");
let createDiv = document.getElementById("create-div");
let divContainer = document.getElementById("div-container");

// Add an event listener to the button to execute a function when it is clicked
createDiv.addEventListener("click", function() {
  // Get the value of the text box
  let text = textBox.value;
  // Create a new div element
  let div = document.createElement("div");
  // Set the innerHTML of the div to be the text of the text box
  div.innerHTML = text;
  // Append the div to the div container
  divContainer.appendChild(div);
});