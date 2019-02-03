//array with photo
const picArr = [
  'golden-retriever-puppy.jpg',
  'Drathaar.jpg',
  "beagle.jpg",
  'alabay.jpg',
  'rizenshnautser.jpg',
  'Airedale.jpg',
];   
//function for control slide show
let idInterval;
function showControl() { 
  if(idInterval){    
    clearInterval(idInterval);
    return idInterval = undefined;
  } else {
    idInterval = setInterval(function(){showNextPic(picArr);}, 2000);
  } 
}

//function for getting running array index of running photo
function getIndex(arr) {
  let runningPic = document.querySelector('.pictureBlock');
  let pic = window.getComputedStyle(runningPic);
  let str = pic.backgroundImage;
  let goalStr = str.match(/[a-z?-]+[.]+(jpg)/gi);
  //console.log(goalStr);
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === goalStr[0]){
      return arr.indexOf(arr[i]);
    }
  }
}

//function for showing next picture in manual mode
function showNextPic(arr){
  let ind = getIndex(arr);
  //console.log(arr.length);
  let indicatorItems = document.querySelectorAll('li');
  let runningPic = document.querySelector('.pictureBlock');
  if (ind < arr.length-1){
    ind++;
    //console.log(ind);
    runningPic.style.backgroundImage = "url(" + arr[ind] + ")";
    indicatorItems[ind].style.backgroundColor = 'lightgray';
    indicatorItems[ind-1].style.backgroundColor = 'whitesmoke';
  } else {
    ind = 0;
    runningPic.style.backgroundImage = "url(" + arr[ind] + ")"; 
    indicatorItems[ind].style.backgroundColor = 'lightgray';
    indicatorItems[arr.length-1].style.backgroundColor = 'whitesmoke';
  }  
}
//function for showing previous photo in manual mode
function showPrevPic(arr) {
  let ind = getIndex(arr);
  let indicatorItems = document.querySelectorAll('li');
  let runningPic = document.querySelector('.pictureBlock');
  if (ind > 0){
    ind--;
    runningPic.style.backgroundImage = " url(" + arr[ind] + ")";
    indicatorItems[ind].style.backgroundColor = 'lightgray';
    indicatorItems[ind+1].style.backgroundColor = 'whitesmoke';
  } else {
    ind = arr.length-1;
    runningPic.style.backgroundImage = " url(" + arr[ind] + ")";
    indicatorItems[ind].style.backgroundColor = 'lightgray';
    indicatorItems[0].style.backgroundColor = 'whitesmoke';
  }    
}
  const forward = document.querySelector('.right');
  forward.addEventListener('click', function(){showNextPic(picArr)});
  //fW.addEventListener('click', function(){stopSlideShow()});
  const backward = document.querySelector('.left');
  backward.addEventListener('click', function(){showPrevPic(picArr)});
  //picture as a button for slideshow.
  const slideShowButton = document.querySelector('.pictureBlock');
  slideShowButton.addEventListener('click', showControl);