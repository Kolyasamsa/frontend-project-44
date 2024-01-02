import getRandomNumber from '../getRandomNum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const startRound = () => {
  const question = getRandomNumber();
  const result = isEven(question) ? 'yes' : 'no';
  return [question, result];
};

export { description, startRound };
