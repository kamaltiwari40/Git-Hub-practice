// Get the button element
var button = document.getElementById("fireworks-button");

// Add a click event listener to the button
var button.addEventListener("click", function() {
  // Create a new div element for the fireworks
  var fireworks = document.createElement("div");
  // Set the class name of the div to "fireworks"
  fireworks.className = "fireworks";
  // Create a new span element for the text
  var text = document.createElement("span");
  // Set the class name of the span to "text"
  text.className = "text";
  // Set the inner HTML of the span to "Happy Diwali"
  text.innerHTML = "Happy Diwali";
  // Append the span element to the div element
  fireworks.appendChild(text);
  // Append the div element to the body element
  document.body.appendChild(fireworks);
  // Add a click event listener to the div element
  fireworks.addEventListener("click", function() {
    // Remove the div element from the body element
    document.body.removeChild(fireworks);
    // Create a new div element for another set of fireworks
    var fireworks2 = document.createElement("div");
    // Set the class name of the div to "fireworks"
    fireworks2.className = "fireworks";
    // Create a new span element for another text
    var text2 = document.createElement("span");
    // Set the class name of the span to "text"
    text2.className = "text";
    // Set the inner HTML of the span to "Happy Diwali"
    text2.innerHTML = "Happy Diwali";
    // Append the span element to the div element
    fireworks2.appendChild(text2);
    // Append the div element to the body element
    document.body.appendChild(fireworks2);
  });
});

// CSS?
//If you want to create a more interactive and immersive digital Diwali experience, with beautiful colourful fireworks getting activated whenever and wherever you click on the screen, you can use HTML, CSS and JavaScript together. You can use this tutorial2 as a guide, which shows how to build an interactive web application (or page) that will facilitate this effect. You will need some basic knowledge of HTML, CSS and JavaScript, as well as some online tools or editors to run your code.

//If you want to create a simple Diwali wishing animation that displays on your screen without any user interaction, you can use pure CSS code like this3:

// CSS
// AI-generated code. Review and use carefully. More info on FAQ.

/* Define some variables for colors and sizes */

/*
:root {
  --color-fire: #ff0000;
  --color-light: #ffffff;
}

/* Define some styles for elements 
.fireworks {
  list-style-type: none;
  padding: 0;
}

.fireworks li {
  width: calc(50% - (10px * (4 - (3 / (4 * (3 / (4 * (3 / (4 * (3 / (4 * (3 / (4 * (3 / (4 * (3 / (4 * (3 / (4 * (3 / (4 * (3 / (4 * (3 / (4 * (3 / (4 * ((5 - ((6 - ((7 - ((8 - ((9 - ((10 - ((11 - ((12 - ((13 - ((14 - ((15 - ((16 - ((17 - ((18 - ((19 - ((20)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

  */