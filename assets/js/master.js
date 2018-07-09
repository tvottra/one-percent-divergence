var listOfEvents = ['lightning will strike you.', 'you will win the lottery.', 'a shark will attack you.', 'Elina will wake up early.', 'a person will die from an acute myocardial infraction in a year', 'a person will visit an emergency room from a golf cart accident']; //list of below 1 percent probabilities


let b = baffle('#baffle', {
  // characters: '█▓▒░█▓▒░█▓▒░<>/' //custom characters to obfuscate with
});
b.start(); //start obfuscating


var i = 0; //counter for index of event




setInterval(() => { //Loop to change event
    b.text(text => listOfEvents[i]) //replace current text with new event text
    b.reveal(3000); //show progress of reveal over 3 sec
    i = (i + 1) % listOfEvents.length;
  },
  5000); //loop every 5 sec
