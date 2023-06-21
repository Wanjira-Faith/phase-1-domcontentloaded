// Your code goes here

//setting up an event listener for DOMContentLoaded
// document.addEventListener("DOMContentLoaded",function(){
//     console.log("The DOM has loaded");
// });
// console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");


//DOMContentLoaded event ensures our Js code is being executed immeadiately after the HTML is finished loading.
document.addEventListener("DOMContentLoaded",()=>{
    const text=document.getElementById('text');
    text.textContent=('This is really cool!')
});