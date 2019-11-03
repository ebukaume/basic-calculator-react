import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  const names = [
    ['A/C', '+/-', '%', '/'],
    ['7', '9', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];
  
  return (
    <React.Fragment>
      {names.map((grp, i) => {
        return (
          <div key={"group-" + i} id={"group-" + (i + 1)}>
              {grp.map((cell, j) => <Button key={grp + i + j} name={cell} />)}
          </div>
        )
      })}
    </React.Fragment>
  );
}
