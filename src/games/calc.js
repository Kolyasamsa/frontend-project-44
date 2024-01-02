import getRandomNumber from '../getRandomNum.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.round(Math.random() * 2);
  return operators[randomIndex];
};

const calculate = (firstNumber, secondNumber, operator) => {
  if (operator === '+') {
    return firstNumber + secondNumber;
  } if (operator === '-') {
    return firstNumber - secondNumber;
  } if (operator === '*') {
    return firstNumber * secondNumber;
  }
  return `Error! There is no such operator like '${operator}'!`;
};

const startRound = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = calculate(firstNumber, secondNumber, operator);
  return [question, correctAnswer];
};
export { description, startRound };
