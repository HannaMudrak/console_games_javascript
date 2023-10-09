import readlineSync from 'readline-sync';

function isEven() {
  console.log('Welcom to the Math Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');

  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);

  const questionsAmount = 3;
  const maxGapNum = 100;
  for (let i = 0; i < questionsAmount; i++) {
    let number = Math.floor(Math.random() * 100 + 1);
    console.log('Question: ' + number);
    let correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    let answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log('wrong answer!!!');
    }
  }
  console.log('Congratulations, ' + name + '!');
}

export default isEven;