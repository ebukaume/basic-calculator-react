import React from 'react';

export default function Button({ name, color, wide }) {
  const DEFAULT_COLOR = 'orange'
  const NORMAL = '25%'
  const WIDE = '50%'
  const styles = {};

  styles.width = wide ? WIDE : NORMAL;
  styles.backgroundColor = color === undefined ? DEFAULT_COLOR : color;

  return (
    <button style={ styles }>
      {name}
    </button>
  );
}
