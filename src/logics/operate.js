import Big from 'big.js';

const operate = ((numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return Big(numberOne).plus(numberTwo);
    case '-':
      return Big(numberOne).minus(numberTwo);
    case '/':
      return Big(numberOne).div(numberTwo);
    case 'x':
      return Big(numberOne).times(numberTwo);
    case '%':
      return Big(numberOne).div(100);
    default:
      return numberTwo;
  }
});

export default operate;