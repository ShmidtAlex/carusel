// window.onload = function(){
//   console.log('the html page is entirely downloaded, sir!');
let picArr = [
  'golden-retriever-puppy.jpg',
  'Drathaar.jpg',
  "beagle.jpg",
  'alabay.jpg',
  'rizenshnautser.jpg',
  'Airedale.jpg',
];   

const startSlideShow = function(){  
  setInterval(function(){
     showNextPic(picArr); 
  }, 1000);
 
}

function stopSlideShow(){
  clearInterval(startSlideShow);
}


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

//this function have to contain recursion, which will remember the running value of ind.
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

// console.log(indicatorItems[0]);
  const fW = document.querySelector('.right');
  //console.log(fW);
  fW.addEventListener('click', function(){showNextPic(picArr)});
  fW.addEventListener('click', function(){stopSlideShow()});
  const bW = document.querySelector('.left');
  //console.log(bW);
  bW.addEventListener('click', function(){showPrevPic(picArr)});
  const slideShowButton = document.querySelector('.pictureBlock');
  //console.log(playSlideShow);
  slideShowButton.addEventListener('click', startSlideShow);