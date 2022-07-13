'use strict';


function askName() {
  let firstName = prompt('What is your first name?');
  console.log(firstName);
  alert(firstName + ', welcome to a little sneak peek on my life!');
}
askName();

let nameTrina = prompt('Is my name Trina?').toLowerCase();
if (nameTrina === 'yes' || nameTrina === 'y'){
  // console.log('Yes, my name is Trina!');
  alert('Yes, my name is Trina!');
} else if (nameTrina === 'no' || nameTrina === 'n') {
  // console.log('Sorry, you are wrong, my name is Trina.');
  alert('Sorry, you are wrong, my name is Trina.');
} else {
  // console.log('You need to answer with a \'yes\' or a \'no\'');
  alert('You need to answer with a \'yes\' or a \'no\'');
}

let ownDogs = prompt('Do I own dogs?').toLowerCase();
if (ownDogs === 'yes' || ownDogs === 'y'){
  // console.log('Yes, I do own dogs, 2 of them in fact!');
  alert('Yes, I do own dogs, 2 of them in fact!');
} else if (ownDogs === 'no' || ownDogs === 'n') {
  // console.log('Sorry, you are wrong, I actually own 2 dogs.');
  alert('Sorry, you are wrong, I actually own 2 dogs.');
} else {
  // console.log('You need to answer with a \'yes\' or a \'no\'');
  alert('You need to answer with a \'yes\' or a \'no\'');
}

let livesInSeattle = prompt('Do I live in Seattle?').toLowerCase();
if (livesInSeattle === 'yes' || livesInSeattle === 'y'){
  // console.log('Yes, I do live in Seattle');
  alert('Yes, I do live in Seattle');
} else {
  // console.log('Sorry, you are wrong. I do live in Seattle.');
  alert('Sorry, you are wrong. I do live in Seattle.');
}

let hideSnack = prompt('Have I ever hidden a snack so that nobody else would find it and eat it first?').toLowerCase();
if (hideSnack === 'yes' || hideSnack === 'y'){
  // console.log('If you grew up with other siblings, you would have definitely hidden a snack!');
  alert('If you grew up with other siblings, you would have definitely hidden a snack!');
} else if (hideSnack === 'no' || hideSnack === 'n') {
  // console.log('I am unfortunately not a selfless person, whoops!');
  alert('I am unfortunately not a selfless person, whoops!');
} else {
  // console.log('You need to answer with a \'yes\' or a \'no\'');
  alert('You need to answer with a \'yes\' or a \'no\'');
}

let cartoonCrush = prompt('Did I ever have a crush on a cartoon character?').toLowerCase();
if (cartoonCrush === 'yes' || cartoonCrush === 'y'){
  // console.log('Of course I have, have you ever seen Tadashi Hamada from Big Hero 6??!');
  alert('Of course I have, have you ever seen Tadashi Hamada from Big Hero 6??!');
} else if (cartoonCrush === 'no' || cartoonCrush === 'n') {
  // console.log('You are very very wrong... look up Tadashi Hamada and you will see why.');
  alert('You are very very wrong... look up Tadashi Hamada and you will see why.');
} else {
  // console.log('You need to answer with a \'yes\' or a \'no\'');
  alert('You need to answer with a \'yes\' or a \'no\'');
}

let attemptsRemaining = 4;

// let age = prompt('Guess my age!').toLowerCase();
// if (age === '21'){
//   alert('That is correct! I am 21 years old!');
// } while (attemptsRemaining){
//   attemptsRemaining--;
//   alert(`I am in the while loop. I have ${attemptsRemaining} attempts remaining`);
// } break (age === true);

// let attempts = 4;
// for (let i = attempts; i > 0; i--){
//   alert(`I am in the while loop. I have ${i - 1} attempts remaining`);
// }

// for (let i = 0; i < 4; i++);

while (attemptsRemaining > 0)
{
  attemptsRemaining--;
  let ageGuess = prompt('Guess my age!');
  if(ageGuess === 21)
  {
    alert('You guessed it correctly! I am 21!');
    break;
  }
  else if (ageGuess > 21)
  {
    alert(`Too high! I have ${attemptsRemaining} attempts remaining!`);
  }
  else if (ageGuess < 21 && ageGuess > 0)
  {
    alert(`Too low! I have ${attemptsRemaining} attempts remaining!`);
  }
  else 
  {
    alert(`invaild input! I have ${attemptsRemaining} attempts remaining!`);
  }
}



// alert(`I am in the while loop. I have ${attemptsRemaining} attempts remaining`);


// let ageGuess = prompt('Guess my age!').toLowerCase();
// if(ageGuess === '21'){
//   alert('You guessed it correctly! I am 21!');
// } else if (ageGuess > '21'){
//   alert('Too high!');
// } else if (ageGuess < '21'){
//   alert('Too low!');
// }
