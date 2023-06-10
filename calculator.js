const display = document.querySelector(".calc-display");
const displayText = document.querySelector(".display-text");

let statement = '';
let currentValue = '';
let prev = '';
let currentAction = '';

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
          let nospace = currentValue.trim();
          currentValue = nospace.substring(0,nospace.length-1);
          break;
        case 'addition':
          currentAction = '+'
          prev = currentValue;
          currentValue = '';
          break;
        case 'subtract':
          statement = statement + ' - '
          break;
        case 'multiply':
          statement = statement + ' * '
          break;
        case 'divide':
          statement = statement + ' / '
          break;
        case 'decimal':
          if(currentValue.includes('.')){
            break;
          }else{
            AppendStatement('.');
          }
          break;
        default:
          console.log("action")
      } 
    }
    else{
      AppendStatement(button.innerHTML);
    }
  }
  displayText.textContent = currentValue;
  console.log('current value: ' + currentValue);
  console.log('prev value: ' + prev);
  console.log('current action: ' + currentAction);
})

const AppendStatement = (value)=>{
  currentValue += value;
}

const ResetCalc = ()=>{
  statement = '';
  currentValue = '';
  prev = '';
  prevCharacter = '';
}


