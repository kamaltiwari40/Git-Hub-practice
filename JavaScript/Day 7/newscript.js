
function createDiv(){
    let textBox=document.createElement('textBox');
    text.innerHTML=name.value;
    tr.appendChild(td1);
    let createDiv=document.createElement('createDiv');
   Div.innerHTML=div.value;
    tr.appendChild(td2)
    table.appendChild(tr)
    document.body.appendChild(div);
    }

    // Get all the elements by their class name
var elements = document.getElementsByClassName("badword");

// Loop through each element
for (var i = 0; i < elements.length; i++) {
  // Get the innerHTML of the element
  var html = elements[i].innerHTML;

  // Replace any occurrence of badword with an empty string
  html = html.replace(/badword/gi, "");

  // Set the innerHTML of the element to the new html
  elements[i].innerHTML = html;
}