// @flow

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Button.css';

type Foo = {
  bar: string,
};

export type Props = {
  label: string,
  theme?: 'primary' | 'secondary' | 'danger',
  foobar?: Array<Foo>,
  justAnArray?: Array<number>,
  handleClick?: () => void,
};


const Button = ({ label, theme, handleClick, ...extraProps }: Props) => (
  <button
    className={classNames(styles.root, styles[theme])}
    onClick={handleClick}
    {...extraProps}
  >
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  foobar: PropTypes.arrayOf(PropTypes.shape({
    bar: PropTypes.string,
  })),
  justAnArray: PropTypes.arrayOf(PropTypes.number),
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  theme: 'primary',
};


export default Button;
