var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/docker_icon.png') {
      myImage.setAttribute ('src','images/docker_icon_welcome.png');
    } else {
      myImage.setAttribute ('src','images/docker_icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Docker is cool! Hi ' + myName;
      }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Docker is cool! Hi ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}