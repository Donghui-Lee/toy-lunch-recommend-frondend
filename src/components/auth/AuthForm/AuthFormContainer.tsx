import React, { useState } from 'react';
import AuthFormPresenter from './AuthFormPresenter';
// import { LOGIN_REQUEST } from '../../../modules/auth/login';

interface AuthFormProps {
    type: string;
}

export default function AuthFormContainer({ type }: AuthFormProps) {
    const [form, setForm] = useState({ username: '', password: '' });
    // Submit Event Handler
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        debugger;
    };

    const validateForm = () => {};

    // Chnage Event Handler
    // const onChange = (e) => {
    //     const { value, name } = e.target;
    //     debugger;
    // };

    return (
        <AuthFormPresenter type={type} onSubmit={onSubmit}></AuthFormPresenter>
    );
}
