import readlineSync from 'readline-sync';
import getRandomNumber from './getRandomNum.js';

const isEven = (num) => num % 2 === 0;
// eslint-disable-next-line import/prefer-default-export
const startRound = (userName) => {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  if (userAnswer.toLowerCase() === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}. Let's try again, ${userName}!`);
  return false;
};
export default startRound;
