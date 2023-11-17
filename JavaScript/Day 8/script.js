localStorage.setItem('Name', '');
localStorage.setItem('Name2', '');

console.log(localStorage.getItem('Name'));

// localStorage.removeItem();


const data=document.getElementById('value');
const key=document.getElementById('key');
const save=document.getElementById('save');
const clearAll=document.getElementById('clearAll');

save.addEventListener('click', saveData);

function saveData() {
    localStorage.setItem(key.value, data.value);
    location.reload();
}

//output the data - local storage

const list=document.getElementById('list');
list.innerHTML=localStorage.getItem('Name')

for (let i=0; i<localStorage.length; i++)
{ 
     let item=document.createElement('h3');
 item.innerHTML=localStorage.getItem(localStorage.key(i));
 list.appendChild(item);

// }

clearAll.addEventListener('click', clearData);

function clearData() {
    localStorage.clear();
    location.reload();
}
// // let array=[30,'kamal', true]
// // 4
// // 3