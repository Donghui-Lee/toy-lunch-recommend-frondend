import React from 'react';
import AuthFormPresenter from './AuthFormPresenter';

interface AuthFormProps {
  text: string;
}

export default function AuthFormContainer({ text }: AuthFormProps) {
  return <AuthFormPresenter text={text}></AuthFormPresenter>;
}
