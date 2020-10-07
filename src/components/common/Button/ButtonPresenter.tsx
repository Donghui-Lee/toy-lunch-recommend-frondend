import React from 'react';
import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
    text: string;
    fullWidth?: boolean;
    cyan?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonPresenter({
    text,
    fullWidth,
    cyan,
    onClick,
}: ButtonProps) {
    return (
        <button
            className={classNames(
                'Button',
                { fullWidth: fullWidth },
                { cyan: cyan },
            )}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
