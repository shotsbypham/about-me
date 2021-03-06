'use strict';

let correctAnswer = 0;

let firstName = prompt('What is your first name?');
console.log(firstName);
alert(firstName + ', welcome to a little sneak peek on my life!');

function nameTrina() {
  let nameTrina = prompt('Is my name Trina?').toLowerCase();
  if (nameTrina === 'yes' || nameTrina === 'y') {
    // console.log('Yes, my name is Trina!');
    alert('Yes, my name is Trina!');
    correctAnswer++;
  } else if (nameTrina === 'no' || nameTrina === 'n') {
    // console.log('Sorry, you are wrong, my name is Trina.');
    alert('Sorry, you are wrong, my name is Trina.');
  } else {
    // console.log('You need to answer with a \'yes\' or a \'no\'');
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

function ownDogs() {
  let ownDogs = prompt('Do I own dogs?').toLowerCase();
  if (ownDogs === 'yes' || ownDogs === 'y') {
    // console.log('Yes, I do own dogs, 2 of them in fact!');
    alert('Yes, I do own dogs, 2 of them in fact!');
    correctAnswer++;
  } else if (ownDogs === 'no' || ownDogs === 'n') {
    // console.log('Sorry, you are wrong, I actually own 2 dogs.');
    alert('Sorry, you are wrong, I actually own 2 dogs.');
  } else {
    // console.log('You need to answer with a \'yes\' or a \'no\'');
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

function livesInSeattle() {
  let livesInSeattle = prompt('Do I live in Seattle?').toLowerCase();
  if (livesInSeattle === 'yes' || livesInSeattle === 'y') {
    // console.log('Yes, I do live in Seattle');
    alert('Yes, I do live in Seattle');
    correctAnswer++;
  } else {
    // console.log('Sorry, you are wrong. I do live in Seattle.');
    alert('Sorry, you are wrong. I do live in Seattle.');
  }
}

function hideSnack() {
  let hideSnack = prompt('Have I ever hidden a snack so that nobody else would find it and eat it first?').toLowerCase();
  if (hideSnack === 'yes' || hideSnack === 'y') {
    // console.log('If you grew up with other siblings, you would have definitely hidden a snack!');
    alert('If you grew up with other siblings, you would have definitely hidden a snack!');
    correctAnswer++;
  } else if (hideSnack === 'no' || hideSnack === 'n') {
    // console.log('I am unfortunately not a selfless person, whoops!');
    alert('I am unfortunately not a selfless person, whoops!');
  } else {
    // console.log('You need to answer with a \'yes\' or a \'no\'');
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}


function cartoonCrush() {
  let cartoonCrush = prompt('Did I ever have a crush on a cartoon character?').toLowerCase();
  if (cartoonCrush === 'yes' || cartoonCrush === 'y') {
    // console.log('Of course I have, have you ever seen Tadashi Hamada from Big Hero 6??!');
    alert('Of course I have, have you ever seen Tadashi Hamada from Big Hero 6??!');
    correctAnswer++;
  } else if (cartoonCrush === 'no' || cartoonCrush === 'n') {
    // console.log('You are very very wrong... look up Tadashi Hamada and you will see why.');
    alert('You are very very wrong... look up Tadashi Hamada and you will see why.');
  } else {
    // console.log('You need to answer with a \'yes\' or a \'no\'');
    alert('You need to answer with a \'yes\' or a \'no\'');
  }
}

let questions = ['Is my name Trina?', 'Do I own dogs?', 'Do I live in Seattle?', 'Have I ever hidden a snack so that nobody else would find it and eat it first?', 'Did I ever have a crush on a cartoon character?'];
let answers = ['y', 'y', 'y', 'y', 'y'];
let outcome = ['You got it correct!', 'Nope, you are wrong!', 'Please type yes or no'];

function yesOrNo() {
  for (let i = 0; i < 4; i++) {
    let input = prompt(questions[i]);
    let firstLetter = input.charAt(0);
    if (firstLetter === answers[i]) {
      alert(outcome[0]);
      correctAnswer++;
    } else if (firstLetter !== 'y' && firstLetter !== 'n') {
      alert(outcome[2]);
    } else {
      alert(outcome[1]);
    }
  }
}

yesOrNo();

function ageGuess() {
  let attemptsRemaining = 4;

  while (attemptsRemaining >= 1) {
    attemptsRemaining--;
    let ageGuess = prompt('Guess my age!');
    //parseInt changes the data guesses into a number which makes the === vaild
    ageGuess = parseInt(ageGuess);
    if (ageGuess === 21) {
      // console.log('You guessed it correctly! I am 21!');
      alert('You guessed it correctly! I am 21!');
      correctAnswer++;
      break;
    }
    else if (ageGuess > 21) {
      // console.log(`Too high! You have ${attemptsRemaining} attempts remaining!`);
      alert(`Too high! You have ${attemptsRemaining} attempts remaining!`);
    }
    else if (ageGuess < 21 && ageGuess > 0) {
      // console.log(`Too low! You have ${attemptsRemaining} attempts remaining!`);
      alert(`Too low! You have ${attemptsRemaining} attempts remaining!`);
    }
    else {
      // console.log(`invaild input! You have ${attemptsRemaining} attempts remaining!`);
      alert(`invaild input! You have ${attemptsRemaining} attempts remaining!`);
    }
    if (attemptsRemaining === 0) {
      // console.log('You are out of attempts! The correct answer was 21!');
      alert('You are out of attempts! The correct answer was 21!');
    }

  }
}
ageGuess();

function favVideogame() {
  let favVideogame = ['valorant', 'genshin impact', 'minecraft'];
  let guessesRemaining = 6;
  let guessIsCorrect = false;
  while (guessesRemaining && !guessIsCorrect) {
    guessesRemaining--;
    let videogameGuess = prompt('Can you guess one of my favorite video games?').toLowerCase();
    for (let i = 0; i < favVideogame.length; i++) {
      if (videogameGuess === favVideogame[i]) {
        // console.log(videogameGuess + ' is one of my favorite video games!');
        alert(videogameGuess + ' is one of my favorite video games!');
        correctAnswer++;
        guessIsCorrect = true;
        break;
      }
      else if (i === favVideogame.length - 1) {
        // console.log(videogameGuess + ` is not one of my favorite video games. You have ${guessesRemaining} guesses remaining!`);
        alert(videogameGuess + ` is not one of my favorite video games. You have ${guessesRemaining} guesses remaining!`);
      }
      if (guessIsCorrect === true) {
        break;
      }
    }
  }
}
favVideogame();

// console.log(`You scored ${correctAnswer} out of 7 questions correctly.`);
alert(`You scored ${correctAnswer} out of 7 questions correctly.`);
