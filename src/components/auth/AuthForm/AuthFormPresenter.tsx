import React from 'react';
import { Button } from '../../common/Button';
import { Link } from 'react-router-dom';
import './AuthForm.scss';

interface AuthFormProps {
    type: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthFormPresenter({ type, onSubmit }: AuthFormProps) {
    const text = type === 'register' ? '회원가입' : '로그인';
    return (
        <div className="auth-form">
            {/* <h3>{text}</h3> */}
            <form onSubmit={onSubmit}>
                <input
                    className="auth-form-input"
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                />
                <input
                    className="auth-form-input"
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                />
                {type === 'register' && (
                    <input
                        className="auth-form-input"
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                    />
                )}
                <Button text={text} fullWidth cyan></Button>
            </form>
            <div className="auth-form-footer">
                {type === 'register' ? (
                    <Link to="/login">로그인</Link>
                ) : (
                    <Link to="/register">회원가입</Link>
                )}
            </div>
        </div>
    );
}
