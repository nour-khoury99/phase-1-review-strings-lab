// Write your code in this file!

const currentUser = 'Grace Hopper';

const welcomeMessage = `Welcome to flatbook , ${currentUser}`;

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `welcome , ${currentUser.slice(0,1)}!`;

typeof "const currentUser = 'Grace Hopper';";

"const currentUser = 'Grace Hopper';".length;

currentUser;

//conccatenate Strings

"High" + "Fivel";

"we"+' '+ `can` + " "+ 'company' +`enate` + "as many strings" + 'as our heart' +`desires.`;

//Interpolation

const myString = 'template literal' ;

const myNumber = 10 ;

const myBoolean = false ;

`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!

Beware that new lines inside of a ${myString} will be preserved as new ines in the resulting ${typeof myString}!`;

