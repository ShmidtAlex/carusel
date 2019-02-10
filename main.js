let imageIndex = 0;
//get access to "container" div
let nodesList = document.body.children[0];
//create new div class mainBlock and incert it at the begining of the child nodes list
let mainblocknode = document.createElement('div');
nodesList.appendChild(mainblocknode);
mainblocknode.setAttribute('class', 'mainBlock');
//create new inputs and div.pictureBlock
let leftbutton = document.createElement('input');
let rightbutton = document.createElement('input');
let pictureblock = document.createElement('div');
//set up attributes of mainBlock child nodes
leftbutton.setAttribute('type', 'button');
rightbutton.setAttribute('type', 'button');
leftbutton.setAttribute('class', 'arrow left');
rightbutton.setAttribute('class', 'arrow right');
pictureblock.setAttribute('class', 'pictureBlock');
//put above elements into div.mainBlock
mainblocknode.appendChild(leftbutton);
mainblocknode.appendChild(pictureblock);
mainblocknode.appendChild(rightbutton);
//create div.indicator and set it's attributes
let divindicator = document.createElement('div');
//add div.indicator as a last child in nodesList
nodesList.appendChild(divindicator).setAttribute('class', 'indicator');;
//create list of indicator items
let inditems = document.createElement('ul');
inditems.setAttribute('id', 'indicatorList');
divindicator.appendChild(inditems);
for (let i = 0; i < 6; i++){
  let item = document.createElement('li');
  inditems.appendChild(item);
}
inditems.childNodes[imageIndex].setAttribute('id', 'start');
//array with photo
const picArr = [
  'golden-retriever-puppy.jpg',
  'Drathaar.jpg',
  "beagle.jpg",
  'alabay.jpg',
  'rizenshnautser.jpg',
  'Airedale.jpg',
];

//we'll ivoke this constant as an argument in handler functions
const pictureBlock = document.querySelector('.pictureBlock');
//this constant keeps list of indicators
const indicatorItems = document.querySelectorAll('li');

function showImage(imageIndex, containerElement){
  containerElement.style.backgroundImage = "url(" +picArr[imageIndex]+ ")";
  //get list of indicators
  let indicatorList = document.getElementById('indicatorList');
  //delete list of indicators
  divindicator.removeChild(indicatorList);
  //recreate list of indicators and set it's attributes
  let inditems = document.createElement('ul');
  divindicator.appendChild(inditems).setAttribute('id', 'indicatorList');
    for (let i = 0; i < 6; i++){
    let item = document.createElement('li');
    inditems.appendChild(item);
  }
  //change colour of running indicator item
  inditems.childNodes[imageIndex].setAttribute('id', 'start');
}

function showNextPic(){  
  if(imageIndex < picArr.length-1) {
    imageIndex++;
    showImage(imageIndex, pictureBlock);
  } else {
    imageIndex = 0;
    showImage(imageIndex, pictureBlock);
  }  
}
function showPreviousPic(){
  if (imageIndex > 0){
    imageIndex--;
    showImage(imageIndex, pictureBlock);
  } else {
    imageIndex = picArr.length-1;
    showImage(imageIndex, pictureBlock);
  }    
}

let idInterval;
function showControl() { 
  if(idInterval){    
    clearInterval(idInterval);
    return idInterval = undefined;
  } else {
    idInterval = setInterval(function(){showNextPic(picArr);}, 2000);
  } 
}
const forward = document.querySelector('.right');
forward.addEventListener('click', showNextPic);
const backward = document.querySelector('.left');
backward.addEventListener('click', showPreviousPic);
//picture as a button for slideshow.
const slideShowButton = document.querySelector('.pictureBlock');
slideShowButton.addEventListener('click', showControl);