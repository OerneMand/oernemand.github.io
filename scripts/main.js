//Image switcher code

var myHeading = document.querySelector('h1');
myHeading.textContent = 'DOGS ARE PLAYING GUITAR!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dog1.jpg') {
      myImage.setAttribute ('src','images/dog2.jpg');
    } else {
      myImage.setAttribute ('src','images/dog1.jpg');
    }
}

var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Dogs are playing guitar, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Dogs are playing guitar, ' + storedName;
}

if(storedName === "Caroline") {
  alert('OMG, Caroline you came back!');
}

myButton.onclick = function() {
  setUserName();
}
