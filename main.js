"use strict";
let imageIndex = 0;
let slideShowInProcess = false;
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
const createdNodesContainer = document.getElementById('container');

//create new div class mainBlock and incert it at the begining of the child nodes list
const mainBlock = document.createElement('div');
createdNodesContainer.appendChild(mainBlock);
mainBlock.setAttribute('class', 'mainBlock');

//create new buttons and div.pictureBlock
const leftButton = document.createElement('button');
const rightButton = document.createElement('button');
const pictureBlock = document.createElement('img');

//set up attributes of mainBlock child nodes
leftButton.setAttribute('class', 'arrow left');
rightButton.setAttribute('class', 'arrow right');
pictureBlock.setAttribute('class', 'pictureBlock');

//put above elements into div.mainBlock
mainBlock.appendChild(leftButton);
mainBlock.appendChild(pictureBlock);
mainBlock.appendChild(rightButton);

//create div.indicator 
const divIndicator = document.createElement('div');

//add div.indicator as a last child in createdNodesContainer and set it's attributes
createdNodesContainer.appendChild(divIndicator).setAttribute('class', 'indicator');

//define const, which keep block with photo
const getPictureBlock = document.querySelector('.pictureBlock');

//invoke function for displaying first picture and pannel of indicators
showImage(imageIndex, pictureBlock);



function showImage(imageIndex, containerElement){
  
  containerElement.style.backgroundImage = `url(./images/${picArr[imageIndex]})`;
  let indItems;
  const getIndicatorList = document.getElementById('indicatorList');
  if(getIndicatorList) {
    divIndicator.removeChild(getIndicatorList);
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
  stopSlideshow();
  if(imageIndex < picArr.length-1) {
    imageIndex++;    
  } else {
    imageIndex = 0;   
  }  
  showImage(imageIndex, getPictureBlock);
  if(slideShowInProcess === true) {
    startSlideShow();
  }  
}

function showPreviousPic(){
  stopSlideshow();
  if (imageIndex > 0){
    imageIndex--;   
  } else {
    imageIndex = picArr.length-1;
  }    
  showImage(imageIndex, getPictureBlock);
  if(slideShowInProcess === true) {
    startSlideShow();
  }  
}

let idInterval;

function startSlideShow() {   
  if(idInterval){    
   stopSlideshow();
   stopSlideshow = false;
  } else {
    idInterval = setInterval(function(){showNextPic(picArr);}, 2000);
    slideShowInProcess = true;
  } 
}

function stopSlideshow(){
  if(idInterval)  {
    clearInterval(idInterval);
    idInterval = undefined;
  }
}

function defineIndicatorNumber(e){
  stopSlideshow();
  imageIndex = Number(e.target.getAttribute('data-order'));
  showImage(imageIndex, getPictureBlock);
}

const forwardButton = document.querySelector('.right');
forwardButton.addEventListener('click', showNextPic);
//forwardButton.addEventListener('click', stopSlideshow);

const backwardButton = document.querySelector('.left');
backwardButton.addEventListener('click', showPreviousPic);
//backwardButton.addEventListener('click', stopSlideshow);


//picture as a button for slideshow.
const slideShowButton = document.querySelector('.pictureBlock');
slideShowButton.addEventListener('click', startSlideShow);

//define const, which keep massive like object of li items
const indicatorButton = document.querySelectorAll('li');
indicatorButton.forEach(item => item.addEventListener('click', defineIndicatorNumber));