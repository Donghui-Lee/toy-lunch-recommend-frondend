import React from 'react';
import ButtonPresenter from './ButtonPresenter';

interface ButtonProps {
    text: string;
    fullWidth?: boolean;
    cyan?: boolean;
}

export default function ButtonContainer({
    text,
    fullWidth,
    cyan,
}: ButtonProps) {
    return (
        <ButtonPresenter
            text={text}
            fullWidth={fullWidth}
            cyan={cyan}
        ></ButtonPresenter>
    );
}
