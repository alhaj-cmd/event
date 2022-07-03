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

// let myWindow;
// const weidth = document.getElementById('weidth');
// const height = document.getElementById('height');

// weidth.innerHTML = "width paramiter" + window.innerWidth;
// height.innerHTML = "width paramiter" + window.innerHeight;

// function openwindow(){
//     myWindow=window.open('https://google.com')
// }
// function closewindow(){
//     myWindow.close();
// }

function validation(){
    const inputObj = document.getElementById('id1');

    if (inputObj.validity.rangeOverflow){
        inputObj.setCustomValidity("you have range Overflow !!");

    }
    else if(inputObj.validity.rangeUnderflow){
        inputObj.setCustomValidity("you have range Underflow !!");


    }

    else if(inputObj.validity.valueMissing){
        inputObj.setCustomValidity("you have range ValuMiss !!");


    }

    if(!inputObj.checkValidity()){
        document.getElementById("demo").innerHTML = inputObj.validationMessage;

    }
}