// !Everyone have a search on these question
// what does getElementById() do? Alexandru
    /* we select an element based on it's Id */
    const paragraph=document.getElementById('p1');
    console.log(paragraph);
    // what does getElementsByTagName() do? Galib
    const allDiv=document.getElementsByTagName('div');
    console.log(allDiv);
    // what does getElementsByClassName() do? Jamila
    const myDiv=document.getElementsByClassName('myDiv');
    myDiv[0].innerHTML='Changed using JS';
    // for(let i=0; i<myDiv.length; i++)
    // {
    //     myDiv[i].innerHTML='Changed using JS';
    // }
    
    // what does querySelector() do? Ehsan
        // select element by selector but will return first match
    const Div=document.querySelector('.myDiv');
    console.log(Div);
    //querySelectorAll() 
        // select multiple element by selector
        const elements=document.querySelectorAll('.myDiv, #p1, img')
    // How to style an Element With JS? Albina
    // paragraph.style.fontSize='40px';
    paragraph.style.cssText="font-size:50px; color:red; background-color:gray;"
    //How to select all element div?
    
    //createElement()
    const listItem=document.createElement('li');
    console.log(listItem);
    
    //add text to the list item
    listItem.innerHTML="First Item"
    
    
    //appendChild()
    const list=document.getElementById('list');
    list.appendChild(listItem);
    
    // add five list item with below text
        //Second Item
        //Third Item
        //Fourth Item
        //Fifth Item
        //Sixth Item
    const listItem2=document.createElement('li');
    listItem2.innerHTML="Second Item"
    list.appendChild(listItem2);
    
    const listItem3=document.createElement('li');
    listItem3.innerHTML="Third Item"
    list.appendChild(listItem3);
    
    const listItem4=document.createElement('li');
    listItem4.innerHTML="Fourth Item";
    list.appendChild(listItem4);
    
    //remove() -- will remove an item
    listItem4.remove();
    
    //setAttribute();
    listItem2.setAttribute('id','secondListItem');
    //removeAttribute()
    paragraph.removeAttribute('id');
    
    //DOM Traversal
    console.log(listItem2.parentElement);
    
    //Child node traversal
    console.log(list.childNodes)
    console.log(list.lastChild)
    console.log(list.firstChild);
    // 
    
    //value -- take the value of from elements
    const saveButton=document.getElementById('save');
    saveButton.addEventListener('click',data)
    function data(){
        const textBox=document.getElementById('textbox')
        console.log(textBox.value);
    }
    
    // Create new HTML and JavaScript files and ensure they are all linked correctly.
    // Add a <h1> element to the HTML with some text inside it.
    //Add a <input type='text'>, and <button>, <ul> to the HTML file as well.
    // Using a DOM query method I would like you to select the element from the DOM and store it in your JavaScript file in a variable.
    // Using DOM, I would like to you add 3 <li>'s containing text of text box, while you click on the Add button
    
    const title=document.getElementById('title');
    title.style.backgroundColor="orange";
    const Save=document.getElementById('add');
    const ul=document.getElementById('myList');
    const itemText=document.getElementById('text');
    Save.addEventListener('click',addItem);
    
    function addItem(){
    const listItem=document.createElement('li');
    listItem.innerHTML=itemText.value;
    ul.appendChild(listItem);
    itemText.value="";
    }
    
    // delete first item
    // delete last item
    const firstDelete=document.getElementById('firstItem');
    const lastDelete=document.getElementById('lastItem');
    firstDelete.addEventListener('click',deleteFirstItem);
    lastDelete.addEventListener('click',deleteLastItem);
    function deleteFirstItem(){
        ul.firstChild.remove();
    }
    
    function deleteLastItem(){
        ul.lastChild.remove();
    }
    
    /////////////////////////////////////////////////
    const name=document.getElementById('name');
    const age=document.getElementById('age');
    const save=document.getElementById('saveData');
    const table=document.getElementById('table');
    save.addEventListener('click',addData)
    
    function addData(){
    let tr=document.createElement('tr');
    let td1=document.createElement('td')
    td1.innerHTML=name.value;
    tr.appendChild(td1);
    let td2=document.createElement('td');
    td2.innerHTML=age.value;
    tr.appendChild(td2)
    table.appendChild(tr)
    }
    
    // I would like you to create new HTML and js files
    //add a text box and a button to the html file
    //when you click on the button, it should create a div containing the text of text box.