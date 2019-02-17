"use strict";
let imageIndex = 0;
//we'll ivoke this constant as an argument in handler functions

//array with photo
const picArr = [
  'golden-retriever-puppy.jpg',
  'Drathaar.jpg',
  "beagle.jpg",
  'alabay.jpg',
  'rizenshnautser.jpg',
  'Airedale.jpg',
];

//get access to "container" div WE DON'T USE WAYS LIKE document.body.children[0], it's UNSAFE!
const nodesList = document.getElementById('container');

//create new div class mainBlock and incert it at the begining of the child nodes list
const mainBlockNode = document.createElement('div');
nodesList.appendChild(mainBlockNode);
mainBlockNode.setAttribute('class', 'mainBlock');

//create new buttons and div.pictureBlock
const leftButton = document.createElement('button');
const rightButton = document.createElement('button');
const pictureBlockNode = document.createElement('img');

//set up attributes of mainBlock child nodes
leftButton.setAttribute('class', 'arrow left');
rightButton.setAttribute('class', 'arrow right');
pictureBlockNode.setAttribute('class', 'pictureBlock');

//put above elements into div.mainBlock
mainBlockNode.appendChild(leftButton);
mainBlockNode.appendChild(pictureBlockNode);
mainBlockNode.appendChild(rightButton);

//create div.indicator 
const divIndicator = document.createElement('div');

//add div.indicator as a last child in nodesList and set it's attributes
nodesList.appendChild(divIndicator).setAttribute('class', 'indicator');

//define const, which keep block with photo
const pictureBlock = document.querySelector('.pictureBlock');

//invoke function for displaying first picture and pannel of indicators
showImage(imageIndex, pictureBlock);



function showImage(imageIndex, containerElement){
  
  containerElement.style.backgroundImage = `url(./images/${picArr[imageIndex]})`;
  let indItems;
  const indicatorList = document.getElementById('indicatorList');
  if(indicatorList) {
    divIndicator.removeChild(indicatorList);
  } 

  indItems = document.createElement('ul');    
  divIndicator.appendChild(indItems);
  indItems.setAttribute('id', 'indicatorList');
  picArr.forEach(function(item, index){
    item = document.createElement('li');
    indItems.appendChild(item);
    item.setAttribute('data-order', index);
    item.addEventListener('click', defineIndicatorNumber);
  })  
  indItems.childNodes[imageIndex].setAttribute('id', 'start');
}

function showNextPic(){  
  if(imageIndex < picArr.length-1) {
    imageIndex++;    
  } else {
    imageIndex = 0;   
  }  
  showImage(imageIndex, pictureBlock);
}

function showPreviousPic(){
  if (imageIndex > 0){
    imageIndex--;   
  } else {
    imageIndex = picArr.length-1;
  }    
  showImage(imageIndex, pictureBlock);
}

let idInterval;

function showControl() { 
  if(idInterval){    
   stopSlideshow();
  } else {
    idInterval = setInterval(function(){showNextPic(picArr);}, 2000);
  } 
}

function stopSlideshow(){  
  clearInterval(idInterval);
  idInterval = undefined;
}

function defineIndicatorNumber(e){
  stopSlideshow();
  imageIndex = Number(e.target.getAttribute('data-order'));
  showImage(imageIndex, pictureBlock);
}

const forward = document.querySelector('.right');
forward.addEventListener('click', showNextPic);
forward.addEventListener('click', stopSlideshow);

const backward = document.querySelector('.left');
backward.addEventListener('click', showPreviousPic);
backward.addEventListener('click', stopSlideshow);


//picture as a button for slideshow.
const slideShowButton = document.querySelector('.pictureBlock');
slideShowButton.addEventListener('click', showControl);

//define const, which keep massive like object of li items
const indicatorButton = document.querySelectorAll('li');
indicatorButton.forEach(item => item.addEventListener('click', defineIndicatorNumber));