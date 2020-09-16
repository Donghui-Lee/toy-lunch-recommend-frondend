import React from 'react';
import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
  text: string;
  fullWidth: boolean;
}

export default function ButtonPresenter({ text, fullWidth }: ButtonProps) {
  return <button className={classNames('Button', fullWidth)}>{text}</button>;
}
