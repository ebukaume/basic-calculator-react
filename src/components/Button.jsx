import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide, clickHandler }) => {
  const NORMAL = '25%';
  const WIDE = '50%';
  
  const styles = {
    width: wide ? WIDE : NORMAL,
    backgroundColor: color
  }

  return (
    <button
      style={ styles }
      onClick={() => clickHandler(name)}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  color: 'orange'
};

Button.propTypes = {
  value: PropTypes.string
};

export default Button;
