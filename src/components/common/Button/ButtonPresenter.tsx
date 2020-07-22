import React from 'react';
import styled from 'styled-components';
import palette from './../../../styles/palette';

interface ButtonProps {
  text: string;
}

export default function ButtonPresenter({ text }: ButtonProps) {
  return <StyledButton>{text}</StyledButton>;
}

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;
