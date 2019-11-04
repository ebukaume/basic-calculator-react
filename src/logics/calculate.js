import operate from "./operate"

const calculate = ({ total, next, operation }, buttonName) => {

  const isNumber = str => !!str.match(/\d/);

  const isOperator = str => str.match(/['/','\-','+','x','%']/);
  
  if (isNumber(buttonName)) return {next: next + buttonName};

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
    case '%':
      if (next === '0') return {total: operate(total, null, buttonName)}
      return { next: operate(next, null, buttonName) };
    case '=':
      return {
        total: operation ? operate(total, next, operation) : total,
        next: '0',
        operation: null
      }
    default:
  }

  if (isOperator(buttonName)) {
    if(operation) {
      return {
        next: '0',
        total: operate(total, next, operation),
        operation: buttonName 
      }
    }
    return {
      next: '0',
      total: next,
      operation: buttonName
    };
  }
  
}

export default calculate;
