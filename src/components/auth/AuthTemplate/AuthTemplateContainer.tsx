import React from 'react';
import AuthTemplatePresenter from './AuthTemplatePresenter';

interface AuthTemplateProps {
  text: string;
}

export default function AuthFormContainer({ text }: AuthTemplateProps) {
  return <AuthTemplatePresenter text={text}></AuthTemplatePresenter>;
}
