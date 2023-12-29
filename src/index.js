import readlineSync from 'readline-sync';
import startRound from './even.js';

const description = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(userName);
  console.log(`Hello,${userName}!`);
  description();
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = startRound(userName);
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
