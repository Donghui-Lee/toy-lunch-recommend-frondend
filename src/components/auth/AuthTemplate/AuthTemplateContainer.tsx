import React from 'react';
import AuthTemplatePresenter from './AuthTemplatePresenter';
import { ReactNode } from 'react';

interface AuthTemplateProps {
    children: ReactNode;
}

export default function AuthFormContainer({ children }: AuthTemplateProps) {
    return <AuthTemplatePresenter>{children}</AuthTemplatePresenter>;
}
