// accessed html element DOM Node using Id
/*const firstParagraph=document.getElementById('p1');
firstParagraph.innerHTML='Change using JS';
console.log(firstParagraph); */

// access html element by class
const headings=document.getElementsByClassName('headings');
console.log(headings);

// access html element by TagName
const listItems=document.getElementsByTagName('li');
console.log(listItems);

// access html element by Selector
const item=document.querySelector('.firstItem');
console.log(item);

// change CSS Style
let firstParagraph =document.getElementById('p1');
firstParagraph.style.color="red";
console.log(firstParagraph);
firstParagraph.style.backgroundColor="orange";


const nati=document.getElementById('nati');
nati.style.cssText="width:165px; height:165px; border-radius:50%"

// const dogPictures=document.getElementById('pic1'); 
/* dogPictures.style.width= '250px';
dogPictures.style.height= '225px';
dogPictures.style.borderRadius= '50%';
dogPictures.style.border = '5px solid black'
*/

// dogPictures.style.cssText="width:300px; height:300px; border-radius:50%"


const p1Paragraph=document.getElementsByClassName('p1');
// p1Paragraph[0].style.color="red";
// console.log("p1");

for (let i=0; i<p1Paragraph.length; i++) 
{
    p1Paragraph[i].style.cssText="color:orange; background-color: gray; font-size:20px";
}

// Eventlistner is used to attach an event to html element.
const div = document.getElementById('div1');
div.style.cssText = 'width:200px; height:200px; border: 5px solid red;';

// p1[i].style.color.cssText="color: red;
// const div=document.getElementById('div1');
// div.style.cssText='width.250; height:200; border: 5px solid red;';

div.addEventListener('mouseover', changeDiv);
function changeDiv(){
    /* div.style.backgroundColor="red"; */
    div.style.backgroundColor= "red";

    div.innerHTML="Go Away!"
}

div.addEventListener('mouseout', removeStyle)
function removeStyle() {
    div.style.backgroundColor="white";
    div.innerHTML="Thank You";
}

// need to look at this again.



document.getElementById('show').addEventListener('click'); 
// function ShowImage() {
// const image = document.getElementById('image');
// // Image.style.display="none";
// Image.style.visibility="visible";
// }


// // const myDiv=document.getElementById('myDiv');
// // myDiv.addEventListener('mouseover', changeStyle);
// // function changeStyle() {
// // myDiv.classList.add('changeStyle');