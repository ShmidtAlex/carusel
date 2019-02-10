let imageIndex = 0;
//we'll ivoke this constant as an argument in handler functions
let pictureBlock, indicatorItems, idInterval;

//array with photo
const picArr = [
  'golden-retriever-puppy.jpg',
  'Drathaar.jpg',
  "beagle.jpg",
  'alabay.jpg',
  'rizenshnautser.jpg',
  'Airedale.jpg',
];

//get access to "container" div
let nodesList = document.body.children[0];

//create new div class mainBlock and incert it at the begining of the child nodes list
let mainBlockNode = document.createElement('div');
nodesList.appendChild(mainBlockNode);
mainBlockNode.setAttribute('class', 'mainBlock');

//create new inputs and div.pictureBlock
let leftButton = document.createElement('input');
let rightButton = document.createElement('input');
let pictureBlockNode = document.createElement('div');

//set up attributes of mainBlock child nodes
leftButton.setAttribute('type', 'button');
rightButton.setAttribute('type', 'button');
leftButton.setAttribute('class', 'arrow left');
rightButton.setAttribute('class', 'arrow right');
pictureBlockNode.setAttribute('class', 'pictureBlock');

//put above elements into div.mainBlock
mainBlockNode.appendChild(leftButton);
mainBlockNode.appendChild(pictureBlockNode);
mainBlockNode.appendChild(rightButton);

//create div.indicator 
let divIndicator = document.createElement('div');

//add div.indicator as a last child in nodesList and set it's attributes
nodesList.appendChild(divIndicator).setAttribute('class', 'indicator');

//assing needed values to declared earlier variables
pictureBlock = document.querySelector('.pictureBlock');
indicatorItems = document.querySelectorAll('li');

//invoke function for displaying first picture and pannel of indicators
showImage(imageIndex, pictureBlock);



function showImage(imageIndex, containerElement){
  containerElement.style.backgroundImage = "url(" +picArr[imageIndex]+ ")";
  //get list of indicators
  let indItems;
  let indicatorList = document.getElementById('indicatorList');
  if(indicatorList) {
    //let indicatorList = document.getElementById('indicatorList');
    //delete list of indicators
    divIndicator.removeChild(indicatorList);
  } 
  indItems = document.createElement('ul');    
  divIndicator.appendChild(indItems);
  indItems.setAttribute('id', 'indicatorList');
  for (let i = 0; i < 6; i++){
    let item = document.createElement('li');
    indItems.appendChild(item);
  }
  //change colour of running indicator item
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