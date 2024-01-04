import getRandomNumber from '../getRandomNum.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2 !== 0) {
    const temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num1;
};

const startRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2);
  return [question, correctAnswer];
};
export { description, startRound };
