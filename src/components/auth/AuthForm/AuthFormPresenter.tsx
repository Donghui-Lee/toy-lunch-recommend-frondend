import React from 'react';
import { Button } from '../../common/Button';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './AuthForm.scss';

interface AuthFormProps {
    type: string;
    onSubmit: (data: AuthInput) => void;
}

interface AuthInput {
    username: string;
    password: string;
    passwordConfirm?: string;
}

const validateRegisterSchema = yup.object().shape({
    username: yup
        .string()
        .required('필수 정보입니다.')
        .max(50, 'ID의 최대 길이는 50자 입니다.'),
    password: yup
        .string()
        .required('필수 정보입니다.')
        .max(50, 'ID의 최대 길이는 50자 입니다.'),
    passwordConfirm: yup
        .string()
        .required('필수 정보입니다.')
        .max(50, 'ID의 최대 길이는 50자 입니다.'),
});

const validateLoginSchema = yup.object().shape({
    username: yup
        .string()
        .required('필수 정보입니다.')
        .max(50, 'ID의 최대 길이는 50자 입니다.'),
    password: yup
        .string()
        .required('필수 정보입니다.')
        .max(50, 'ID의 최대 길이는 50자 입니다.'),
});

export default function AuthFormPresenter({ type, onSubmit }: AuthFormProps) {
    const text = type === 'register' ? '회원가입' : '로그인';
    const { register, handleSubmit, errors } = useForm<AuthInput>({
        resolver: yupResolver(
            type === 'register' ? validateRegisterSchema : validateLoginSchema,
        ),
    });

    return (
        <div className="auth-form">
            {/* <h3>{text}</h3> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="auth-form-input"
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                    ref={register}
                />
                <p>{errors.username?.message}</p>
                <input
                    className="auth-form-input"
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    ref={register}
                />
                <p>{errors.password?.message}</p>
                {type === 'register' && (
                    <>
                        <input
                            className="auth-form-input"
                            autoComplete="new-password"
                            name="passwordConfirm"
                            placeholder="비밀번호 확인"
                            type="password"
                            ref={register}
                        />
                        <p>{errors.passwordConfirm?.message}</p>
                    </>
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
