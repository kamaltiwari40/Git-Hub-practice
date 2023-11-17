/*
what is loop? Nathan
    when we execute code multiple times repeatedly 
    Hello Welcome
when to use for loop? Galib
    To run a code a specific number of times whilst breaking it when the condition is false (the code becomes terminated)
when to use while loop? Ayoub
    when you are not sure about the number of iteration
what is array? Kia
    -- a variable which store multiple values of different data type
what is function? Kamal
    --
what is object? Dmytro

what is the difference between below code? Natasha
if(condition){statement}
if(condition){statement}
if(condition){statement}
if(condition){statement}
else{statement}

if(condition){statement}
else if(condition){statement}
else if(condition){statement}
else if(condition){statement}
else{statement}

let data=['Zak','Pardis', 28, true]
let value=10;
if(value==10){console.log("equla")}
else if(value>5){console.log("Greater than five")}
else if(value>9){console.log("Greater than nine")}
else {
    console.log("values is Zero")
}
 */

// Learning Objective
    //Exploring Document Object Model
    //To modify HTML elements

//
/*
DOM - is programming interface which represent the page in a tree structure
-- which can be easily modified by the JavaScript.
*/
//accessing HTML element DOM Node using Id
// const firstParagraph=document.getElementById('p1');
// firstParagraph.innerHTML='Change using JS';
// console.log(firstParagraph);

//accessing HTML element by it's Class
const Headings=document.getElementsByClassName('headings');
console.log(Headings);

// accessing HTML element by Tag name
const listItems=document.getElementsByTagName('li');
console.log(listItems[1]);

//accessing HTML element by selector
const item=document.querySelector('.firstItem');
console.log(item);

// change CSS style
let firstParagraph=document.getElementById('p1');
firstParagraph.style.color="red";
console.log(firstParagraph);
firstParagraph.style.backgroundColor="orange";

/*
I would like you to add three element in the html page (image, and two paragraph)
I would like you to change thier css property using JS like width, height and border for the picture and paragraph text color
*/

const secondItem=document.getElementById('secondItem');
secondItem.innerHTML='Second Item';
secondItem.style.color="red";


const dogPictures=document.getElementById('pic1');
/*
dogPictures.style.width="200px";
dogPictures.style.height="200px";
dogPictures.style.borderRadius="20px";
*/
dogPictures.style.cssText="width:300px; height:300px; border-radius:50%";

const taskParagraph=document.getElementsByClassName('task');
for(let i=0; i<taskParagraph.length; i++)
{
    taskParagraph[i].style.cssText="color:orange; background-color: gray; font-size:20px";
}
//addEventListener() is used to attach an event to a html element.
const div=document.getElementById('div1')
div.style.cssText='width:250px; height:200px; border:5px solid red;';

div.addEventListener('mouseover', changeDiv)
function changeDiv(){
    div.style.backgroundColor="red";
    div.innerHTML="Go Away!"
}
div.addEventListener('mouseout', function removeStyle(){
    div.style.backgroundColor="white";
    div.innerHTML="Thank you"
})
/*
i would like you to have two buttons(hide and show) and an image, when you click on the hide button the image should hide, when you click on the show button the image should become visible.
*/
const image=document.getElementById('naturePic');
document.getElementById('hide').addEventListener('click', function HideImage(){
// image.style.display="none";
image.style.visibility="hidden";
})

document.getElementById('show').addEventListener('click', function ShowImage(){
    /* image.style.display="block"; */
    image.style.visibility="visible";
})
/*
I would like you to create a div, when you hover over the div, it should increase it width and when you leave it width shoul be back to normal
*/
//classList is used to add a class to a html element or to remove a class from html element
const myDiv=document.getElementById('myDiv');
myDiv.addEventListener('mouseover', changeStyle);
function changeStyle(){
    myDiv.classList.add('changeStyle');
}
myDiv.addEventListener('mouseout',removeStyle )
function removeStyle(){
    myDiv.classList.remove('changeStyle')
}