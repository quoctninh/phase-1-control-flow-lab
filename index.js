function scuberGreetingForFeet(travel) {
  const distance = travel;
  if (distance <= 400) {
      return 'This one is on me!';
  } else if (distance > 2000 && distance < 2500) {
      return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
      return 'No can do.';

}

}

function ternaryCheckCity(NYC) {
  return (NYC == "NYC" ? 'Ok, sounds good.' : 'No go.');

}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous" :
      return "Thank you so much."
    case "not as generous" :
      return "Thank you."
    default: 
      return "Bye."
  }

}