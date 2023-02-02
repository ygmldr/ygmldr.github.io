function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//alert('hello!');
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'bluepoison.jpg') {
      myImage.setAttribute('src', 'bp2.jpg');
    } else {
      myImage.setAttribute('src', 'bluepoison.jpg');
    }
}

let myButton = document.querySelector('button');

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
     