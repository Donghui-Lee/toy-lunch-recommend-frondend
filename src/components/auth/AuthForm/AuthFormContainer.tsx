import React from 'react';
import AuthFormPresenter from './AuthFormPresenter';
// import { LOGIN_REQUEST } from '../../../modules/auth/login';

interface AuthFormProps {
    type: string;
}

interface AuthInput {
    username: string;
    password: string;
    passwordConfirm?: string;
}

export default function AuthFormContainer({ type }: AuthFormProps) {
    // Submit Event Handler
    const onSubmit = (data: AuthInput) => {
        debugger;
    };

    return (
        <AuthFormPresenter type={type} onSubmit={onSubmit}></AuthFormPresenter>
    );
}
