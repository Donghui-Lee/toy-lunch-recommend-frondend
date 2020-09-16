import React from 'react';
import { Link } from 'react-router-dom';
import './AuthTemplate.scss';

interface AuthTemplateProps {
  text: string;
}

export default function AuthTemplatePresenter({ text }: AuthTemplateProps) {
  return (
    <div className="auth-template">
      <div className="white-box">
        <div className="logo-area">
          <Link to="/">오늘 머먹지?</Link>
        </div>
      </div>
    </div>
  );
}

