import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  children,
  variant,
  noHover,
  noJump,
  className: propClassName,
  tooltip,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  let hrefValue = '#';
  if (noJump) {
    hrefValue = '#!';
  }

  return (
    <Comp href={hrefValue} {...props} className={classes.join(' ')}>
      {tooltip ? <div className={styles.tooltip}>{tooltip}</div> : ''}
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  noJump: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  tooltip: PropTypes.string,
};

export default Button;
