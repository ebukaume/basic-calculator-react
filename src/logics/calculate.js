import operate from "./operate"

const calculate = (total, next, operation, buttonName) => {
  const computeTotal = (val, next, op, btn) => {
    if (val === '+/-') return val * -1;
    if (['%', '/', 'x', '+', '-'].includes(op)) return operate(val, next, op);

    return val;
  }
  
  const data = {
    total: computeTotal(total, next, operation, buttonName),
    next,
    operation
  }

  return data;
}

// console.log(calculate('12', '4', 'x'))

export default calculate;
