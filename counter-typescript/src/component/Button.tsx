import "./Button.css";
import React, {useContext} from "react";
import {ButtonEventHandlers, ButtonEventContext} from "../util";

type ButtonProps = {
    num: number
}

function Button ({
                     num
}: ButtonProps) {

    const ctx = useContext(ButtonEventContext);
    if (!ctx) {
        throw new Error("There is no context at all.");
    }
    const {onClickButton} = ctx as ButtonEventHandlers;
    return (
        <button
            className="Button"
            onClick={onClickButton}
            value={num}
        >
            {num}
        </button>
    );
}

export default React.memo(Button);