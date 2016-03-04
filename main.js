//Create a Javascript application that allows the user
//to match people in need with volunteers during a disaster relief effort.

//Add victim entries
function addVictims () {
  //First prompt the user to ask how many disaster victims they wish to enter.
  var victimEntries = prompt("How many disaster victim entries would you like to enter?")
  //For each disaster victim that will be added, prompt the user to enter their name,
  //phone number, and street. You don't need to validate the information.
  //Add each newly entered user to three arrays, one for each piece of information, using array.push
  function Victim( name, phoneNum, address){
    this.name = name
    this.phoneNum = phoneNum
    this.address = address
  }
  var victimArr = []
  for (i = 0; i < victimEntries, i++){
    victimArr.push();
  }

}


// //Add volunteer entries
// function addVolunteers () {
//   //First prompt the user to ask how many disaster volunteers they wish to enter.
//   var volunteerEntries = prompt("How many disaster volunteer entries would you like to enter?")
//   //For each disaster volunteer that will be added, prompt the user to enter their name,
//   //phone number, and street. You don't need to validate the information.
//   //Add each newly entered user to three arrays, one for each piece of information, using array.push.
//   var volunteerArr = []
//   for (i = 0; i < volunteerEntries, i++){
//     volunteerArr.push();
//   }
// }
