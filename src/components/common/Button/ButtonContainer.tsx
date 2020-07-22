import React from 'react';
import ButtonPresenter from './ButtonPresenter';

interface ButtonProps {
  text: string;
}

export default function ButtonContainer({ text }: ButtonProps) {
  return <ButtonPresenter text={text}></ButtonPresenter>;
}
