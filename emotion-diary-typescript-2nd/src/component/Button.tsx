import "./Button.css";
import React from "react";


type ButtonType = {
    text: string
    type? : 'default' | 'positive' | 'negative'
    doAction: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({
                    text,
                    type='default',
                    doAction}: ButtonType) {
    return (
        <button
            onClick={doAction}
            className={`Button Button_${type}`}>
            {text}
        </button>
    );
}

export default React.memo(Button);