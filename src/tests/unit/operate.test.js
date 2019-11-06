import operate from '../../logics/operate';

describe('input type', () => {
  it('accepts input as both of type string and number', () => {
    const result1 = operate(12, 4, '+');
    const result2 = operate('12', 4, '+');
    const result3 = operate(12, '4', '+');
    const result4 = operate('12', '4', '+');
  
    expect(result1).toBe('16');
    expect(result2).toBe('16');
    expect(result3).toBe('16');
    expect(result4).toBe('16');
    
  });
});

describe('#addition', () =>{
  it('calculates the sum of 2 INTEGERS', () => {
    const sum = operate('12', 4, '+');

    expect(sum).toBe('16');
  });

  it('calculates the sum of 2 FLOATS', () => {
    const sum = operate('12.53', 4.42, '+');

    expect(parseFloat(sum)).toBeCloseTo(16.95, 0.00001);
  });

  it('calculates the sum of 1 FLOAT and 1 INTEGER', () => {
    const sum = operate(134, '41.42', '+');

    expect(parseFloat(sum)).toBeCloseTo(175.42, 0.000001);
  });
});

describe('#subtraction', () =>{
  it('calculates the difference of 2 INTEGERS', () => {
    const difference = operate('12', 4, '-');

    expect(difference).toBe('8');
  });

  it('calculates the difference of 2 FLOATS', () => {
    const difference = operate(4.42, 12.53, '-');

    expect(parseFloat(difference)).toBeCloseTo(-8.11, 0.00001);
  });

  it('calculates the difference of 1 FLOAT and 1 INTEGER', () => {
    const difference = operate('134.553', 41, '-');

    expect(parseFloat(difference)).toBeCloseTo(93.553, 0.000001);
  });
});

describe('#multiplication', () =>{
  it('calculates the product of 2 INTEGERS', () => {
    const product = operate('11', 8, 'x');

    expect(product).toBe('88');
  });

  it('calculates the product of 2 FLOATS', () => {
    const product = operate(4.42, 7.357, 'x');

    expect(parseFloat(product)).toBeCloseTo(32.51794, 0.000001);
  });

  it('calculates the product of 1 FLOAT and 1 INTEGER', () => {
    const product = operate('87.12', 41, 'x');

    expect(parseFloat(product)).toBeCloseTo(3571.92, 0.01);
  });
});

describe('#division', () =>{
  it('calculates the quotient of 2 INTEGERS', () => {
    const quotient = operate('144', 12, '/');

    expect(quotient).toBe('12');
  });

  it('calculates the quotient of 2 FLOATS', () => {
    const quotient = operate(7.42, 124.205, '/');

    expect(parseFloat(quotient)).toBeCloseTo(0.059739946, 0.0000000001);
  });

  it('calculates the quotient of 1 FLOAT and 1 INTEGER', () => {
    const quotient = operate('553', 41.142, '/');

    expect(parseFloat(quotient)).toBeCloseTo(13.441252248, 0.00000001);
  });

  it('returns INFINITY when 0 is passed as the denominator', () => {
    const quotient = operate('553', 0, '/');

    expect(quotient).toBe('INIFINITY');
  });
});

describe('#percentage', () =>{
  it('returns the first argument in terms of percent', () => {
    const percentage1 = operate('50', 12, '%');
    const percentage2 = operate('42', 20, '%');
    const percentage3 = operate('65', null, '%');

    expect(percentage1).toBe('0.5');
    expect(percentage2).toBe('0.42');
    expect(percentage3).toBe('0.65');
  });
});

describe('#default operation', () =>{
  it('returns the first argument as a string', () => {
    const nop = operate(50, 12, '');
    const nop1 = operate('50', 12, '');

    expect(nop).toBe('50');
    expect(nop1).toBe('50');
  });
});
