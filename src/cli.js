import readlineSync from 'readline-sync';

function greeting() {
  console.log('Welcom to the Math Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');
}

export default greeting;