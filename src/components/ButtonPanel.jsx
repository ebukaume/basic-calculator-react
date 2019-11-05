import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  const MAGIC_GRAY = 'rgb(235, 229, 229)';
  const names = [
    ['A/C', '+/-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];
  
  const getColor = value => {
    if (['/', 'x', '+', '-', '='].includes(value)) return;
    return MAGIC_GRAY;
  }

  return (
    <div id='display-panel'>
      {names.map((group, i) => {
        return (
          <div 
            key={"group-" + i} 
            id={"group-" + (i + 1)}
            >
              {group.map((cell, j) => {
                return (
                  <Button 
                    key={group + i + j}
                    name={cell}
                    wide={cell === '0'}
                    color={getColor(cell)}
                    />
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
