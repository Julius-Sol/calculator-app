const toggleCircle = document.querySelector(".toggle-circle");
const body = document.querySelector('body');
const calcButtonWrapper = document.querySelector('.calc-buttons-wrapper');

let count = 0;

// Function to remove all classes of theme 2 or 3 from elments
const clearThemes = ()=>{
  document.querySelectorAll(".theme-2").forEach((e)=>{
    e.classList.remove("theme-2");
  });
  document.querySelectorAll(".theme-3").forEach((e)=>{
    e.classList.remove("theme-3");
  });
}


// function to control toggle button when click and apply appropiate classes for themes
toggleCircle.addEventListener("click", ()=>{
  clearThemes();
  if(count === 2){
    count = 0;
  }else if(count < 2){
    count++;
    toggleCircle.classList.toggle(`theme-${count+1}`);
    body.classList.toggle(`theme-${count+1}`);
    calcButtonWrapper.classList.toggle(`theme-${count+1}`);
    
  }
  console.log(count);
})