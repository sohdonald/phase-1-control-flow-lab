function scuberGreetingForFeet(feetNumber){
  // Write your code here!
  if (feetNumber <= 400) {
    return "This one is on me!";
  }
  
  else if (feetNumber > 400 && feetNumber <= 2000)
  {
    return "That will be twenty bucks.";
  }
  
  else if (feetNumber > 2000 && feetNumber <= 2500)
  {
    return "I will gladly take your thirty bucks.";
  }

  else {
    return "No can do.";
  }

}

function ternaryCheckCity(city) {
  // Write your code here!
  let cabby = city === 'NYC' ? ("Ok, sounds good.") : ("No go.");
  return cabby;
//const city didn't work because city = 'NYC' was trying to reassign a value for city
// === checks condition

  //= is assignment op, gives value in container

//== compares 2 values, ex. x = 1, y = 1; x == y would be true instead of showing 1
//== is called comparison op.  Either true or false, boolean.
//ex. x = 1, y = '1'; x == y would be true

/* === strict equality, value and type.  ex. x = 1, y = '1'; x === y would be false
since they are not same type.
  
*/

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  //tip = 'generous';

  switch (tip) {
    case 'generous':
    return "Thank you so much.";
    break;

    case 'not as generous':
    return "Thank you.";
    break;

    case 'thanks for everything':
    return "Bye.";
  }
}

switchOnCharmFromTip('generous');
// 'generous' is an argument, (tip) is the parameter
// parameter is empty bottle, argument is what we put inside bottle

function checkNumber(fishNumber) {

  switch (fishNumber) {
    case 6:
      return "Tuna sushi";
    break;

    case 5:
      return "Grilled eel";
    break;

    case 4:
      return "Octopus";
    break;

    default:
      return 'Sorry, not available today.';
      
  }
}

console.log(checkNumber(3));

/*function lightSwitch(switchflip) {
//switchflip is the input
// inside {is the action}

  switch(switchflip) {
//switch is the action {cause it's inside curly braces}
  case 'On':
    return 'Light is on';
    break;
  
  case 'Off':
    return 'Light is off';
    break;
}
}
*/
function lightSwitch(switchflip) {
  //check for true or false
  switch (switchflip) {
    case true:
      return 'Light is on';
  //return is the output
      break;
    case false:
      return 'Light is off'
      break;
  }
}

console.log(lightSwitch(true));
