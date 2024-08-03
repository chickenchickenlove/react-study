import "./Button.css"
import React from "react";

type ButtonType = {
    text: string,
    type?: 'positive' | 'negative' | 'default',
    onButtonClick?: (e: React.MouseEvent) => void
}

function Button({
                    text,
                    type = 'default',
                    onButtonClick = (e: React.MouseEvent) => console.log("click dummy button")}: ButtonType) {
    return (
        <button
            onClick={onButtonClick}
            className={`Button Button_${type}`}
        >
            {text}
        </button>
    )
}

export default Button;