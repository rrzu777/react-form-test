import React from 'react';

import classes from './button.scss';

const button = ({ disabled, onClick, children, buttonType }) => (
  <button disabled={disabled} onClick={onClick} className={[classes.button, classes[buttonType]].join(' ')}>
    {children}
  </button>
);

export default button;