const display = document.querySelector(".calc-display");
const displayText = document.querySelector(".display-text");


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
          console.log(typeof(currentValue)); 
          currentValue = currentValue.substring(0,currentValue.length-1);
          break;
        case 'addition':
          currentAction = '+'
          prev = currentValue;
          currentValue = '';
          break;
        case 'subtract':
          currentAction = '-'
          prev = currentValue;
          currentValue = '';
          break;
        case 'multiply':
          currentAction = '*'
          prev = currentValue;
          currentValue = '';
          break;
        case 'divide':
          currentAction = '/'
          prev = currentValue;
          currentValue = '';
          break;
        case 'decimal':
          if(currentValue.includes('.')){
            break;
          }else{
            AppendStatement('.');
          }
          break;
        case 'equals':
            Evaluation(prev,currentValue,currentAction);
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
  currentValue = '';
  prev = '';
  prevCharacter = '';
}

const Evaluation = (value1,value2,operation) =>{
  switch(operation){
    case '+':
      currentValue = Number(value1)  + Number(value2);
      currentValue = currentValue.toString();
      displayText.textContent = currentValue;
      break;
      case '-':
      currentValue = Number(value1)  - Number(value2);
      currentValue = currentValue.toString();
      displayText.textContent = currentValue;
      break;
      case '/':
      currentValue = Number(value1)  / Number(value2);
      currentValue = currentValue.toString();
      displayText.textContent = currentValue;
      break;
      case '*':
      currentValue = Number(value1)  * Number(value2);
      currentValue = currentValue.toString();
      displayText.textContent = currentValue;
      break;
    default:
      console.log('error');
  }

}


