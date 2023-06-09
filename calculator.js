const display = document.querySelector(".calc-display");
const displayText = document.querySelector(".display-text");

let statement = ''

//Eventlistner to know if button on calculator is being pressed. 
//Function to handle the appropiate action for clicking a button.
calcButtonWrapper.addEventListener('click',(element)=>{
  if(element.target.tagName === 'BUTTON'){
    let button = element.target;
    if(button.hasAttribute('data-action')){
      switch(button.getAttribute('data-action')) {
        case 'reset':
          ResetCalc();
          break;
        case 'delete':
          statement = statement.substring(0,statement.length-1);
          break;
        // case 'addition':
        //   statement = statement + '+'
        //   break;
        default:
          console.log("action")
      } 
    }
    else{
      AppendStatement(button.innerHTML);
    }
  }
  console.log(statement);
})

const AppendStatement = (value)=>{
  statement += value;
}

const ResetCalc = ()=>{
  statement = ''
}


