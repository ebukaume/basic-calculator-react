import React from 'react';

export default function Button({ name, color, wide }) {
  const DEFAULT_COLOR = 'orange'
  const styles = {};

  styles.width = wide ? '50%' : '25%';
  styles.backgroundColor = color === undefined ? DEFAULT_COLOR : color;

  return (
    <button style={ styles }>
      {name}
    </button>
  );
}
