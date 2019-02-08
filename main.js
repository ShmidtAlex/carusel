//array with photo
const picArr = [
  'golden-retriever-puppy.jpg',
  'Drathaar.jpg',
  "beagle.jpg",
  'alabay.jpg',
  'rizenshnautser.jpg',
  'Airedale.jpg',
];
let imageIndex = 0;
//we'll ivoke this constant as an argument in handler functions
const pictureBlock = document.querySelector('.pictureBlock');
//this constant keeps list of indicators
const indicatorItems = document.querySelectorAll('li');

function showImage(imageIndex, containerElement){
  containerElement.style.backgroundImage = "url(" +picArr[imageIndex]+ ")";
  indicatorItems[imageIndex].style.backgroundColor = 'lightgray';
}

function showNextPic(){  
  if(imageIndex < picArr.length-1) {
    imageIndex++;
    showImage(imageIndex, pictureBlock);
    indicatorItems[imageIndex-1].style.backgroundColor = 'whitesmoke';
  } else {
    imageIndex = 0;
    showImage(imageIndex, pictureBlock);
     indicatorItems[picArr.length-1].style.backgroundColor = 'whitesmoke';
  }  
}
function showPreviousPic(){
  if (imageIndex > 0){
    imageIndex--;
    showImage(imageIndex, pictureBlock);
     indicatorItems[imageIndex+1].style.backgroundColor = 'whitesmoke';
  } else {
    imageIndex = picArr.length-1;
    showImage(imageIndex, pictureBlock);
     indicatorItems[0].style.backgroundColor = 'whitesmoke';
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