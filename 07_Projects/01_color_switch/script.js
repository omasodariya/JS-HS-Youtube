
// const red=document.querySelector(".color-red");
// const green=document.querySelector(".color-green");
// const blue=document.querySelector(".color-blue");
// const yellow=document.querySelector(".color-yellow");

// const mainBG=document.querySelector('#main-bg');

// red.addEventListener("click",()=>{
//   mainBG.style.backgroundColor="#f58282ff";
//   mainBG.style.color="#212121";
// });
// blue.addEventListener("click",()=>{
  //   mainBG.style.backgroundColor="#a2a2f1ff";
  //   mainBG.style.color="#212121";
  // });
  // green.addEventListener("click",()=>{
    //   mainBG.style.backgroundColor="#99ed99";
    //   mainBG.style.color="#212121";
    // });
    // yellow.addEventListener("click",()=>{
      //   mainBG.style.backgroundColor="#f5f591";
      //   mainBG.style.color="#212121";
      // });

//Better

const mainBG=document.querySelector('#main-bg');
const buttons=document.querySelectorAll('.box');

buttons.forEach((item)=>{
    item.addEventListener("click",(e)=>{
      mainBG.style.backgroundColor=e.target.id;
      mainBG.style.color="black";
    })
})