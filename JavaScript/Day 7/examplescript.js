function createDiv() {
    // Get the name input element
    let name = document.getElementById("name");

    // Create a new div element
    let div = document.createElement("div");

    // Set the div's content to the name input value
    div.innerHTML = name.value;

    // Add the div to the page
    document.body.appendChild(div);
}