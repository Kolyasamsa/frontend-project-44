import readlineSync from 'readline-sync';

const startGame = (description, round) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const roundsCount = 3; // кол-во раундов
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, result] = round();

    console.log(`Question: ${question}?`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() !== String(result)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
