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

