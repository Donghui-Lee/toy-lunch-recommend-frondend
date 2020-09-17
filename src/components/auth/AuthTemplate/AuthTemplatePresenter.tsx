import React from 'react';
import { Link } from 'react-router-dom';
import './AuthTemplate.scss';
import { ReactNode } from 'react';

interface AuthTemplateProps {
    children: ReactNode;
}

export default function AuthTemplatePresenter({ children }: AuthTemplateProps) {
    return (
        <div className="auth-template">
            <div className="white-box">
                <div className="logo-area">
                    <Link to="/">오늘 머먹지?</Link>
                </div>
                {children}
            </div>
        </div>
    );
}
