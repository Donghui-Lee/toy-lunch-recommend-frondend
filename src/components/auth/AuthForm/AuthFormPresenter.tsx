import React from 'react';
import { Button } from '../../common/Button';
import { Link } from 'react-router-dom';
import './AuthForm.scss';

interface AuthFormProps {
  text: string;
}

export default function AuthFormPresenter({ text }: AuthFormProps) {
  return (
      <div className="auth-form">
        <h3>로그인</h3>
        <form>
            <input className="auth-form-input"
            autoComplete="username"
            name="username"
            placeholder="아이디"
            />
            <input className="auth-form-input"
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            />
            <Button text="로그인"></Button>
        </form>
        <div className="auth-form-footer">
            <Link to="/register">회원가입</Link>
        </div>
      </div>
  );
}
