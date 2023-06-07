const toggleCircle = document.querySelector(".toggle-circle");

let count = 0;

toggleCircle.addEventListener("click", ()=>{
  
  if(count === 2){
    count = 0;
    toggleCircle.classList.remove("slide-2");
    toggleCircle.classList.remove("slide-3");
  }else if(count < 2){
    count++;
    toggleCircle.classList.toggle(`slide-${count+1}`)
  }
  console.log(count);
})