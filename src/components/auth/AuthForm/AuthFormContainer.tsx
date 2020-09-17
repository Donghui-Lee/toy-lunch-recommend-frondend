import React from 'react';
import AuthFormPresenter from './AuthFormPresenter';

interface AuthFormProps {
    type: string;
}

export default function AuthFormContainer({ type }: AuthFormProps) {
    return <AuthFormPresenter type={type}></AuthFormPresenter>;
}
