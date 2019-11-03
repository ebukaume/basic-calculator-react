import operate from "./operate"

const calculate = ({ total, next, operation }, buttonName) => {

  const isNumber = string => !!string.match(/\d/);

  const isOperator = string => string.match(/['/','\-','+','x','%']/);
  
  if (isNumber(buttonName)) return {next: next + buttonName};

  if (isOperator(buttonName)) {
    if(operation) {
      let result = operate(total, next, operation);

      return {
        total: buttonName === '%' ? operate(result, null, buttonName) : result,
        operation: buttonName === '%' ? null : buttonName
      }
    }
    return {operation: buttonName};
  }

  switch (buttonName) {
    case 'AC':
      return {
        total:  '0',
        next: '0',
        operation: null
      };
    case '+/-':
      return {
        total: !parseFloat(next) ? (-1 * total).toString() : total,
        next: !!parseFloat(next) ? (-1 * next).toString() : next,
      };
    case '.':
      return {
        next: next.match(/\./) ? next : next + buttonName
      }
    case '=':
      return {
        total: operation ? operate(total, next, operation) : total,
        next: '0',
        operation: null
      }
    default:
      return {};
  }
}

export default calculate;
