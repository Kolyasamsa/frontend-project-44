import getRandomNumber from '../getRandomNum.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const arithmeticProgression = (start, difference, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + difference * i);
  }
  return progression;
};

const startRound = () => {
  const start = getRandomNumber();
  const difference = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const myProgression = arithmeticProgression(start, difference, length);

  const gapIndexLimit = myProgression.length - 1;
  const gapIndex = getRandomNumber(0, gapIndexLimit);
  const correctAnswer = myProgression[gapIndex].toString();
  myProgression[gapIndex] = '..';
  const question = myProgression.join(' ');
  return [question, correctAnswer];
};
const startProgressionGame = () => {
  startGame(description, startRound);
};
export default startProgressionGame;
