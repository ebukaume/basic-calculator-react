import operate from "./operate"

const calculate = ({ total, next, operation }, buttonName) => {
  if (total === 'INIFINITY') total = '0';
  const isNumber = str => !!str.match(/\d/);

  const isOperator = str => str.match(/['/','\-','+','x','%']/);
  
  if (isNumber(buttonName)) {
    return {
      next: next + buttonName,
      isOperation: false
    };
  }
  switch (buttonName) {
    case 'AC':
      return {
        total:  '0',
        next: '',
        operation: null
      };
    case '+/-':
      return {
        total: !parseFloat(next) ? (-1 * total).toString() : total,
        next: !!parseFloat(next) ? (-1 * next).toString() : next,
      };
    case '.':
      return {
        next: next.match(/\./) ? next : next + buttonName,
        isOperation: false
      }
    case '%':
      if (next === '') return {total: operate(total, null, buttonName)}
      return { next: operate(next, null, buttonName) };
    case '=':
      return {
        total: operation ? operate(total, next, operation) : total,
        next: '',
        operation: null
      }
    default:
  }

  if (isOperator(buttonName)) {
    if(operation) {
      return {
        next: '',
        total: operate(total, next, operation),
        operation: buttonName 
      }
    }
    return {
      next: '',
      total: next,
      operation: buttonName
    };
  }
  
}

export default calculate;
