import React from 'react';
import ButtonPresenter from './ButtonPresenter';

interface ButtonProps {
    text: string;
    fullWidth?: boolean;
    cyan?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonContainer({
    text,
    fullWidth,
    cyan,
    onClick,
}: ButtonProps) {
    return (
        <ButtonPresenter
            text={text}
            fullWidth={fullWidth}
            cyan={cyan}
            onClick={onClick}
        ></ButtonPresenter>
    );
}
