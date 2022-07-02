// function myFunction(text){
//     console.log(text)
// }
// const button = document.getElementById('buttons');
// button.addEventListener('click', function(){
//     myFunction('ami janabo')
// },true);

// const containt = document.getElementById('containt');
// containt.addEventListener('click', function(){
//     myFunction('copy writte')
// }, true);



// class 102 select dom element

let myWindow;
const weidth = document.getElementById('weidth');
const height = document.getElementById('height');

weidth.innerHTML = "width paramiter" + window.innerWidth;
height.innerHTML = "width paramiter" + window.innerHeight;

function openwindow(){
    myWindow=window.open('https://google.com')
}
function closewindow(){
    myWindow.close();
}