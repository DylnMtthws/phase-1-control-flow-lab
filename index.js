function scuberGreetingForFeet(distanceInFeet){
  let response 
  if (distanceInFeet <= 400) {
    response = "This one is on me!"
  }
  else if (distanceInFeet > 400 && distanceInFeet < 2000) {
    response = "That will be twenty bucks."
  }
  else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    response = "I will gladly take your thirty bucks."
  }
  else if (distanceInFeet > 2500) {
    response = "No can do."
  }
  return response
}
 


function ternaryCheckCity(cityName){
  const cityResponse = cityName === "NYC" ? "Ok, sounds good." : "No go."
  return cityResponse
}


function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return  "Thank you.";
    default:
      return "Bye."
  }
}