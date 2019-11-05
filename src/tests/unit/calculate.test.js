import calculate from "../../logics/calculate";

const number = max => (Math.ceil(Math.random() * max)).toString();

describe('when a number is pressed', () => {
  it('appends the current number to next property of the state', () => {
    const buttonName = number(9);
    const state = {
      total: number(1000),
      next: number(1000),
      operation: null
    }

    const newState = calculate(state, buttonName);
    
    expect(newState).toEqual({ next: state.next + buttonName })
  });
});

describe('when +/- key is pressed', () => {
  it('multiplies total by -1 if next is zero', () => {
    const buttonName = '+/-';
    const state = {
      total: number(1000),
      next: '0',
      operation: null
    }

    const newState = calculate(state, buttonName);
    const expectedState = {
      total: (state.total * -1).toString(),
      next: state.next
    }

    expect(newState).toEqual(expectedState)
  });

  it('multiplies next by -1 if next is not zero', () => {
    const buttonName = '+/-';
    const state = {
      total: number(1000),
      next: number(12112),
      operation: null
    }

    const newState = calculate(state, buttonName);
    const expectedState = {
      next: (state.next * -1).toString(),
      total: state.total
    }

    expect(newState).toEqual(expectedState)
  });
});

describe('when AC is pressed', () => {
  it('resets the state when AC is pressed', () =>{
    const buttonName = 'AC';
    const state = {
      total: number(1000),
      next: number(1000),
      operation: ['/','-','+','x','%', null][number(5)]
    }

    const newState = calculate(state, buttonName);
    const expectedState = {
      total: '0',
      next: '0',
      operation: null
    }

    expect(newState).toEqual(expectedState)
  });
});

describe('when "." is pressed', () => {
  it('appends . to next unless already added', () =>{
    const buttonName = '.';
    const state = {
      total: number(1000),
      next: number(1000),
      operation: ['/','-','+','x','%', null][number(5)]
    }

    const newState = calculate(state, buttonName);

    expect(newState).toEqual({ next: state.next + '.' })
  });

  it('does not append . to next if already added', () =>{
    const buttonName = '.';
    const state = {
      total: number(1000),
      next: (number(1000) * (Math.random() + 1)).toString(),
      operation: ['/','-','+','x','%', null][number(5)]
    }

    const newState = calculate(state, buttonName);

    expect(newState).toEqual({ next: state.next})
  });
});

describe('when "=" is pressed', () => {
  it('returns the result of the operation between total & next for next > 0', () =>{
    const buttonName = '=';
    const state = {
      total: number(1000),
      next: number(1000),
      operation: '+'
    }

    const newState = calculate(state, buttonName);
    const expectedState = {
      total: (parseFloat(state.total) + parseFloat(state.next)).toString(),
      next: '0',
      operation: null,
    };

    expect(newState).toEqual(expectedState);
  });

  it('returns the result of the operation between total & 0 for next === 0', () =>{
    const buttonName = '=';
    const state = {
      total: number(1000),
      next: '0',
      operation: 'x'
    }

    const newState = calculate(state, buttonName);
    const expectedState = {
      total: (parseFloat(state.total) * parseFloat(state.next)).toString(),
      next: '0',
      operation: null,
    };

    expect(newState).toEqual(expectedState);
  });
});

describe('when any of [+, -, /, x] is pressed', () => {
  it('if any pending operation, it return its result, then add self as the next operation', () =>{
    const buttonName = '-';
    const state = {
      total: number(1000),
      next: number(1000),
      operation: '+'
    }

    const newState = calculate(state, buttonName);
    const expectedState = {
      total: (parseFloat(state.total) + parseFloat(state.next)).toString(),
      next: '0',
      operation: buttonName,
    };

    expect(newState).toEqual(expectedState);
  });

  it('if no pending operation, it adds self as the next operation', () =>{
    const buttonName = ['/','-','+','x'][number(3)];
    const state = {
      total: '0',
      next: number(1000),
      operation: null
    }

    const newState = calculate(state, buttonName);
    const expectedState = {
      total: state.next,
      next: '0',
      operation: buttonName,
    };

    expect(newState).toEqual(expectedState);
  });
});

describe('when % is pressed', () => {
  it('if any pending operation, process and return in terms of percentage', () =>{
    const buttonName = '%';
    const state = {
      total: number(1000),
      next: number(1000),
      operation: '+'
    }

    const newState = calculate(state, buttonName);
    const expectedState = {
      next: (parseFloat(state.next) / 100).toString(),
    };

    expect(newState).toEqual(expectedState);
  });

  it('if next !== 0, returns next in terms of percentage', () =>{
    const buttonName = '%';
    const state = {
      total: '0',
      next: number(1000),
      operation: null
    }

    const newState = calculate(state, buttonName);
    const expectedState = {
      next: (parseFloat(state.next) / 100).toString(),
    };

    expect(newState).toEqual(expectedState);
  });
});
