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
  switch (tip) {
    case tip >= 5:
    return "Thank you so much.";
    break;

    case tip < 5:
    return "Thank you.";

    case tip < 2:
    return "Bye";
  }
}