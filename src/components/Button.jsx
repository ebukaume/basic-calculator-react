import React from 'react';

export default function Button({ name, color, wide }) {
  const DEFAULT_COLOR = 'orange'
  const NORMAL = '25%'
  const WIDE = '50%'
  
  const styles = {
    width: wide ? WIDE : NORMAL,
    backgroundColor: color ? color : DEFAULT_COLOR
  }

  return (
    <button style={ styles }>
      {name}
    </button>
  );
}
