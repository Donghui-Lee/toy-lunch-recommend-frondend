import React from 'react';
import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
    text: string;
    fullWidth?: boolean;
    cyan?: boolean;
}

export default function ButtonPresenter({
    text,
    fullWidth,
    cyan,
}: ButtonProps) {
    return (
        <button
            className={classNames(
                'Button',
                { fullWidth: fullWidth },
                { cyan: cyan },
            )}
        >
            {text}
        </button>
    );
}
