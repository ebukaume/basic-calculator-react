import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ name }) => <button>{name}</button>;

Button.propTypes = {
  name: PropTypes.string
}

export default Button;
