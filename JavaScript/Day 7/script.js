// create Element
const listItem=document.createElement('li');
console.log(listItem)


// add text to listItems
const listItems=document.createElement('li')
// listItem.innerHTML="First item"
// list.appendChild(listItems)
// listItem.innerHTML="item 2"

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
        

// const listItems = ['list item 1.', 'Tlist item 2.', 'Tlist item 3.', 'list item 4', 'list item 5',' list item 6'];

// for (let i = 0; i < listItems.length; i++) {
//   console.log(listItems[i]);
// }

//appendChild()
// const list=document.getElementById('list');
// list.appendChild(listItems);

// console.log(list.parentElement);

const saveButton=document.getElementById('save');
saveButton.addEventListener('click',data)
function data() {
    const textBox = document.getElementById('textbox')
    console.log(textBox.value);

}


